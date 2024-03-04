const express = require('express');
const { default: router } = require('./route/films');
const app = express();
const PORT = 3000;


app.use('/films',router)
// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});