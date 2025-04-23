#!/usr/bin/env node

import { resolve } from "path"
import { constants, copyFile, mkdir, readdir, readFile } from "fs/promises"
import { createReadStream, createWriteStream, Dirent } from "fs"
import readline from "readline/promises"

const path = process.argv[2]

if (!path) throw Error("An argument is required")

console.log(path)

/**
 * 
 * @param {Map<string, string>} existingLinks
 * @param {string} wikiLinkContent 
 */
function wikiLinkToHugoLink(existingLinks, wikiLinkContent) {
    let link = wikiLinkContent
    let text = wikiLinkContent
    let frag = ""

    const textDivider = wikiLinkContent.indexOf("|")
    if (textDivider >= 0) {
        link = wikiLinkContent.slice(0, textDivider)
        text = wikiLinkContent.slice(textDivider + 1)
    }

    const fragmentDivider = link.indexOf("#")
    if (textDivider >= 0) {
        link = link.slice(0, fragmentDivider) 
        frag = "#" + link.slice(fragmentDivider + 1).toLowerCase().replaceAll(" ", "-")
    }

    const realLink = existingLinks.get(link.toLowerCase())
    if (realLink) {
        return `[${text}]({{< ref "${link + frag}" >}})`
    } else {
        return `[${text}](#)`
    }

}

/**
 * @param {Dirent[]} dirents
 */
function getExistingLinks(dirents) {
    return new Map(
        dirents.map(({ name }) => {
            const stripped = name.slice(0, -3)
            return [stripped.toLowerCase(), stripped]
        })
    )
}

const WIKILINK_RE = /\[\[(.*?)\]\]/g
const FRONTMATTER_START = "---\n"
const FRONTMATTER_END = "\n---\n"

/**
 * @param {string} content
 */
function parseNote(content) {
    let last = 0

    /** @type {string[]} */
    const tags = []
    let frontmatter = ""

    if (content.startsWith(FRONTMATTER_START)) {
        last += FRONTMATTER_START.length
        const frontmatterEnd = content.indexOf(FRONTMATTER_END, last)
        
        if (frontmatterEnd >= 0) {
            frontmatter = content.slice(4, frontmatterEnd + 1)
            last = frontmatterEnd + FRONTMATTER_END.length
        }
    }

    const tagLineEnd = content.indexOf("\n", last)

    if (tagLineEnd >= 0) {
        let tagsLine = content.slice(last, tagLineEnd).trim()
        
        for (const match of tagsLine.matchAll(/#(\w+)/g)) {
            tags.push(match[1])
        }
        
        last = tagLineEnd + 1
    }
    
    let body = content.slice(last).trim()
    return { frontmatter, tags, body }
}


/**
 * @param {Map<string, string>} existingLinks
 * @param {Dirent} dirent
 * @param {string} out
 */
async function convertFile(existingLinks, dirent, out) {
    if (dirent.isDirectory()) return

    const path = resolve(dirent.parentPath, dirent.name)
    const outPath = resolve(out, dirent.name)
    
    if (dirent.name.endsWith(".md")) {
        const content = (await readFile(path)).toString("utf-8")
        
        const note = parseNote(content)
        
        // based this on https://github.com/devidw/obsidian-to-hugo/blob/main/src/obsidian_to_hugo/wiki_links_processor.py
        
        const convertedBody = note.body.replaceAll(
            WIKILINK_RE,
            (_orig, link) => wikiLinkToHugoLink(existingLinks, link)
        )

        const newContent = 
            "---\n" +
            note.frontmatter +
            `title: ${JSON.stringify(dirent.name.slice(0, -3))}\n` +
            `tags: ${JSON.stringify(note.tags)}\n` +
            "---\n" + (convertedBody ?? "")
        
        const writer = createWriteStream(outPath)

        writer.write(
            newContent
        )

        writer.close()
    } else {
        // copyFile(path, outPath, constants.COPYFILE_FICLONE_FORCE)
    }
}

async function tree(path) {
    return await readdir(path, { withFileTypes: true, recursive: true })
}

const out = resolve("./content/tercero")
const files = await tree(resolve(import.meta.dirname, path))

const existingLinks = getExistingLinks(files)

await mkdir(out, {
    recursive: true
})
await Promise.all(files.map((dirent) => convertFile(existingLinks, dirent, out)))