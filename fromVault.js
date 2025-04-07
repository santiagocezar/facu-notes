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
        
        const tags = []

        const firstLineEnd = content.indexOf("\n")
        /** @type {string} */
        let tagsLine = content.slice(0, firstLineEnd)
        let rest = content.slice(firstLineEnd + 1)
    
        if (tagsLine) {
            tagsLine = tagsLine.trim()
            if (tagsLine.startsWith("#")) {
                tags.push(...tagsLine.split(/\s+/).map(s => s.slice(1)))
            } else {
                rest = tagsLine + "\n" + rest
            }
        }
    
        
        const writer = createWriteStream(outPath)
        
        // based this on https://github.com/devidw/obsidian-to-hugo/blob/main/src/obsidian_to_hugo/wiki_links_processor.py
        
        const newRest = rest ? rest.replaceAll(
            /\[\[(.*?)\]\]/g,
            (_orig, link) => wikiLinkToHugoLink(existingLinks, link)
        ) : ""

        const newContent = 
            "---\n"+
            `title: ${dirent.name.slice(0, -3)}\n`+
            `tags: ${JSON.stringify(tags)}\n`+
            "---\n" + (newRest ?? "")
        

        console.log(newContent)

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