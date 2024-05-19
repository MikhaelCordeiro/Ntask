import express from "express"

const app = express();


//ejs

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/NewTask', (req, res) => {
    res.render('NovaTarefa.ejs')
})

app.listen(3000, () => console.log("O pai ta ON!!!"))