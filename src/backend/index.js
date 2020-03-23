require('dotenv/config');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Maurício Romagnoli'
  })
})

app.listen(process.env.PORT);

console.log(`[*] Server Running...\n[*] PORT: ${process.env.PORT}`);
