const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './resources/img';
const outputDir = './resources/formWebp';

fs.readdirSync(inputDir).forEach(file => {
    // Comprova si l'arxiu és ocult (començant per ".") o .DS_Store i salta a la següent iteració
    if (file.startsWith('.') || file === '.DS_Store') {
        return;
    }

    const inputPath = path.join(inputDir, file);
    const outputFileName = file.replace(/\.(png|jpg|jpeg)$/, '.webp');
    const outputPath = path.join(outputDir, outputFileName);

    sharp(inputPath)
        .webp({ quality: 40 })
        .toFile(outputPath, (err, info) => {
            if (err) {
                console.error(`Error al convertir la imagen ${inputPath} a WebP: ${err}`);
            } else {
                console.log(`Imagen convertida: ${info}`);
            }
        });
});
