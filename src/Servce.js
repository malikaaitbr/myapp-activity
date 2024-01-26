const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/call-java-service', async (req, res) => {
  try {
    // Faire une requête vers un service Java
    const javaServiceResponse = await axios.post('http://localhost:8080/java-service', req.body);

    res.json({ result: javaServiceResponse.data });
  } catch (error) {
    console.error('Erreur lors de l\'appel du service Java', error.message);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

app.listen(port, () => {
  console.log(`Serveur Node.js en cours d'exécution sur http://localhost:${port}`);
});