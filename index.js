import express from 'express'
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/a', (req, res) => res.send('Hello World!A'))
app.get('/b', (req, res) => res.send('Hello World!B'))
app.get('/c', (req, res) => res.send('Hello World!C'))
app.get('/d', (req, res) => res.send('Hello World!D'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))