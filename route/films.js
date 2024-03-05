import express from 'express'
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
    res.render('films', {films});
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

router.get('/addfilm', (req, res) => {
    res.render('addfilm')
})

router.get('/remove', (req, res) => {
    res.render('remove')
})

router.post('/films', (req, res) => {
    const film = {
        id : films.length + 1,
        title: req.body.title,
        director: req.body.director
    }
    films.push (film)
    res.render('films', {films})
})

router.post('/removefilms', (req, res) => {
    const { id } = req.body;
    const index = films.findIndex(film => film.id === parseInt(id));

    if (index !== -1) {
        films.splice(index, 1);
        res.render('films', {films})
    } else {
        res.status(404).json({ message: 'Film non trouvé' });
    }
})

router.put('/films/:id', (req, res) => {
    let {id} = req.params
    const film = movie.find(e => e.id === parseInt(id))
    film.title = req.body.title
    res.send(film)
})

export default router;