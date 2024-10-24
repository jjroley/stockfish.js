const fs = require('fs');
const path = require('path');

const wasmBase64 = fs.readFileSync(path.join(__dirname, 'src', 'stockfish-16.1-lite-single.wasm'), 'base64');

const kaPath = path.join(__dirname, 'ka');
if (!fs.existsSync(kaPath)) {
		fs.mkdirSync(kaPath);
}

const jsPath = path.join(__dirname, 'ka', 'stockfish-16.1-lite-single.js');
const jsContent = `window.stockfish_wasm="${wasmBase64}";`;

fs.writeFileSync(jsPath, jsContent);
