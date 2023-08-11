console.time()
for(var i = 0;i < 100;i++){
    LZMA().compress(crypto.getRandomValues(new Uint8Array(Math.random()*30000 + 30000 | 0)))
}
console.timeEnd()
