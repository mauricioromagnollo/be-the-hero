const app = require('./app');

app.listen(process.env.PORT || 3333, () => {
  console.log(`[*] ${process.env.APP_NAME} Server Running...\n[*] PORT: ${process.env.PORT}`);
});
