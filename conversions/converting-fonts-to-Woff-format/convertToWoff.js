const fs = require('fs');
const path = require('path');
const ttf2woff = require('ttf2woff');

function convertTtfToWoff(inputPath, outputPath) {
    const input = fs.readFileSync(inputPath);
    const ttf = new Uint8Array(input);
    const woff = ttf2woff(ttf);

    fs.writeFileSync(outputPath, Buffer.from(woff.buffer));
    console.log(`Converted ${inputPath} to ${outputPath}`);
}
function processFonts(inputDir, outputDir) {
    fs.readdir(inputDir, (err, files) => {
        if (err) {
            console.error(`Unable to read directory ${inputDir}:`, err);
            process.exit(1);
        }

        files.forEach(file => {
            if (path.extname(file).toLowerCase() === '.ttf') {
                const inputPath = path.join(inputDir, file);
                const outputFileName = path.basename(file, path.extname(file)) + '.woff';
                const outputPath = path.join(outputDir, outputFileName);
                
                convertTtfToWoff(inputPath, outputPath);
            }
        });
    });
}

const inputDir = path.resolve(__dirname, 'src/fonts/static');
const outputDir = path.resolve(__dirname, 'src/fonts/woff');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

processFonts(inputDir, outputDir);
