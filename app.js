import express from 'express'
const app = express();
const PORT = 3010;
import path from 'node:path'
import router from './route/films.js'
import bodyParser from 'body-parser'

// const __dirname = new URL('./views', import.meta.url).pathname
// console.log(__dirname)

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res)=> {
    res.render('home')
})

app.use('/',router)
// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server est en route sur http://localhost:${PORT}`);
});