import express from "express"; 
const router = express.Router()

// Tableau de films (à titre d'exemple)
const films = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan' },
    { id: 2, title: 'Interstellar', director: 'Christopher Nolan' },
    { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
    { id: 4, title: 'The Godfather', director: 'Francis Ford Coppola' }
];

// Route pour obtenir la liste des films
router.get('/films', (req, res) => {
    res.json(films);
});

// Route pour obtenir un film par son ID
router.get('/films/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const film = films.find(film => film.id === id);
    if (film) {
        res.json(film);
    } else {
        res.status(404).json({ message: 'Pas de Film' });
    }
});

router.post('/films', (req, res) => {
    const film = {
        id : film.length + 1,
        title: req.body.title
    }
    film.push (film)
    res.send(films)
})

router.delete('/films/:id', (req, res) => {
    let {id} = req.params
    const film = films.find(e => e.id === parseInt(id))
    const index = films.indexOf(movie)
    films.splice(index, 1)
    res.send('Le film a été supprimé')
})

export default router