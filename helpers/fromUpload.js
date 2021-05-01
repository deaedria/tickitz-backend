const e = require("express");
const multer = require("multer");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/upload/photo");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

let limits = {
    filesize: 5000000,
};
let uploadImg = multer({ storage, limits });

let storageLogo = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/upload/logos");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

let uploadL = multer({ storage: storageLogo, limits });

const fromUpload = {
    uploadImage: (req, res, next) => {
        const uploadImage = uploadImg.single("photo");
        uploadImage(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                res.status(400).send({
                    message: err.message,
                    statusCode: 400,
                });
            } else if (err) {
                res.status(400).send({
                    message: err.message,
                    statusCode: 400,
                });
            } else {
                next();
            }
        });
    },

    uploadLogo: (req, res, next) => {
        const uploadLogo = uploadL.single('logo');
        uploadLogo(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                res.status(400).send({
                    message: err.message,
                    statusCode: 400,
                });
            } else if (err) {
                res.status(400).send({
                    message: err.message,
                    statusCode: 400,
                });
            } else if (req.file === undefined) {
                next();
            } else {
                next();
            }
        })
    }
};

module.exports = fromUpload;
