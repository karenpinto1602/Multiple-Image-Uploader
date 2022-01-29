
const route = require('express').Router()
const controller = require('../controller/controller');
const store = require('../middleware/multer');

//routes
route.get('/',controller.home);
route.post('/uploadMultiple',store.array('images',12),controller.uploads); 
//because the input tag in the form has the name: "images"
//because we are uploading multiple images, we are using array
// 12 - is basically the limit to uploads at a time

module.exports = route;