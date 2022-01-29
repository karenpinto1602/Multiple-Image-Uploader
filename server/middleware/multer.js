
const multer = require('multer');

//set storage
var storage = multer.diskStorage({
    destination: function(res,file,cb){
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        // image.jpg then ext will be jpg
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
        cb(null,file.fieldname+'-'+Date.now()+ext);
    }
})


module.exports = store = store = multer({storage:storage});
