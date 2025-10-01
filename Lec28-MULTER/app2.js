const path = require('path');
const express = require('express');
const PORT = 4444;
const app = express();
const multer = require('multer');
app.use(express.urlencoded({extended:true}));
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension)
    }
})

const upload =multer({storage:storage})
app.post('/image', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.status(200).json({
        message: 'Image uploaded successfully'
    });
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});