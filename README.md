# lz
LZMA WASM=0
# 使用方法
```javascript
var temp = [1,2,3];
var lzma = LZMA().compress(temp)
var data = LZMA().decompress(lzma);
console.log(String.fromCharCode.apply(null,data)==String.fromCharCode.apply(null,temp)) // true

var temp = crypto.getRandomValues(new Uint8Array(65536));
var lzma = LZMA().compress(temp)
var data = LZMA().decompress(lzma);
console.log(String.fromCharCode.apply(null,data)==String.fromCharCode.apply(null,temp)) // true
```
# 不确定能否这样用
```javascript
var lzma = LZMA();
lzma.compress(data1);
lzma.compress(data2);
```
# 引用
### chatgpt
### emscripten v3.1.41 
[https://emscripten.org/](https://emscripten.org/)
### 7z
[https://sourceforge.net/projects/sevenzip/](https://sourceforge.net/projects/sevenzip/)

