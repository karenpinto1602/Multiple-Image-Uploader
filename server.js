const express = require('express');
const app = express();
const hbs = require('express-handlebars');

const path = require('path');

// app.use lets us use any middleware application
app.use(express.json()); //this allows us to post raw json data when a post request is made

// serving static files
app.use(express.static(path.join(__dirname,'public')));


// setup view engine
app.set('view engine','hbs');
app.engine('hbs',hbs.engine({
    extname:'hbs',
    defaultView:'default',
    layoutsDir:path.join(__dirname,'views'),
    partialsDir:path.join(__dirname,'views/partials')
}))


// routes
app.get('/',(req,res)=>{
    res.render('main')
});

app.listen(3000,()=>console.log(`Server is started on http://localhost:3000`));




