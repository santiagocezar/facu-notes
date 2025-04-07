sync:
    ./fromVault.js "$HOME/Documentos/UTN/3er año/"
    git add .
    git commit -m "auto-sync $(printf '%(%Y-%m-%d)T\n' -1)"
    git push
    