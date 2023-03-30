const fs = require("fs").promises;
const path = require("path")

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    const filesArr = walk(files)
    let naoEncontrados = []

    for(let i=1000; i<=1012; i++) {
        let sit = 0;
        for(let file of filesArr) {
            if(i!=file) {
                sit+=1
            }
        }
        if(sit == filesArr.length) {
            naoEncontrados.push(i)
        }
    }
    console.log(`Qtd de arquivos faltantes: ${naoEncontrados.length}`)
    console.log(naoEncontrados)
}

/* function walk(files) {
    let numNaoEncontrados = []
    for(let i of files) {
        if(i.match(/.txt$/)){
            const file = i.match(/\d{1,2}.\d{1,3}/)
            for(let i=1000; i<=1010;i++) {
                let seTem = false;
                if(file[0]==i) {
                    seTem = true;
                    return;
                }
            }
        }
    }
} */

function walk(files) {
    let arr = []
    for(let i of files) {
    
        if(i.match(/.pdf$/) || i.match(/-2022$/)){
            let matchNum = i.match(/\d{1,2}.\d{1,3}/);
            if(matchNum) {
                const file = matchNum
                const fileRename = file[0].replace(/\./, "")
                arr.push(fileRename)
            }
        }
    }
    return arr

}

readdir()
