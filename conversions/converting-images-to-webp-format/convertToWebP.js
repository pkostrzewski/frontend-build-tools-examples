const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const glob = require('glob');
const path = require('path');

const imagesDir = path.resolve(__dirname, 'src/images');
const outputDir = path.resolve(__dirname, 'src/images/webp');

glob(imagesDir + '/*.{jpg,jpeg,png}', (err, files) => {
    if (err) {
        console.error('Błąd przeglądania plików obrazów:', err);
        return;
    }
    files.forEach(async (file) => {
        try {
            await imagemin([file], {
                destination: outputDir,
                plugins: [
                    imageminWebp({ quality: 75 })
                ]
            });
            console.log(`Przekonwertowano ${file} do formatu WebP`);
        } catch (error) {
            console.error(`Błąd podczas konwersji ${file} do formatu WebP:`, error);
        }
    });
});
