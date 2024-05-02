const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()

// Configurando o Mustache Express como a engine de template
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('index.html')
})

app.post('/dados', function(req, res){
    let dados = req.body
    res.render('dados.html', {dados})
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

