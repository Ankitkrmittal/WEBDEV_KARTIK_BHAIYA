// const fs = require("fs");
// const QRCode = require("qrcode");

// // Base pattern
// const base = "86*****65715539";

// // Folder to save QR codes
// const outputDir = "./qrcodes";
// if (!fs.existsSync(outputDir)) {
//     fs.mkdirSync(outputDir);
// }

// // Generate all IDs (100,000 possibilities)
// async function generateQRCodes() {
//     let count = 0;

//     for (let i = 0; i < 100000; i++) {
//         // Pad number with leading zeros (e.g., 00000 → 99999)
//         let stars = i.toString().padStart(5, "0");
//         let id = base.replace("*****", stars);

//         // File path
//         let filePath = `${outputDir}/${id}.png`;

//         // Generate QR
//         await QRCode.toFile(filePath, id);

//         count++;
//         if (count % 1000 === 0) {
//             console.log(`${count} QR codes generated...`);
//         }
//     }

//     console.log("✅ All QR codes generated successfully!");
// }

// generateQRCodes().catch(err => console.error(err));





const fs = require("fs");
const QRCode = require("qrcode");

// Base pattern
const base = "86*****65715539";

// Folder to save QR codes
const outputDir = "./qrcodes";
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Generate all IDs (100,000 possibilities)
async function generateQRCodes() {
    let count = 0;

    for (let i = 0; i < 100000; i++) {
        // Pad number with leading zeros (e.g., 00000 → 99999)
        let stars = i.toString().padStart(5, "0");
        let id = base.replace("*****", stars);

        // File path
        let filePath = `${outputDir}/${id}.png`;

        // Generate QR
        await QRCode.toFile(filePath, id);

        count++;
        if (count % 1000 === 0) {
            console.log(`${count} QR codes generated...`);
        }
    }

    console.log("✅ All QR codes generated successfully!");
}

generateQRCodes().catch(err => console.error(err));
