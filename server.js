const express = require("express");
const cors = require('cors')
const path = require("path")

const PORT = Number(process.env.PORT || 3333);

const app = express();

app.use(cors());

app.use(express.json());

const pathHtml = path.join(__dirname, "public")

app.use(express.static(pathHtml))
app.set("views", pathHtml)
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.get("/", (req, res) => {
    return res.render("index.html")

})

app.listen(PORT, () => {
    console.log('servidorRodando')
});