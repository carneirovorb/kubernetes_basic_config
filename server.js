const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const app = express();

const router = express.Router()

router.get("/", (req, res)=>{
  res.status(200).send("<h1>Ola Mundo! v2</h1>")
})


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  bodyParser.json({
    extended: true,
  })
);

app.use(router)

const httpServer = http.createServer(app);

httpServer.listen(3000, () => {
  console.log({
    msg: "Servidor HTTP rodando na porta 3000",
  });
});
