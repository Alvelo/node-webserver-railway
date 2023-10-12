require("dotenv").config();

var hbs = require("hbs");
const express = require("express");
const app = express();
const port = process.env.PORT;

//TODO: require('hbs')
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//servir contenido estatico
app.use(express.static("templated-roadtrip"));

app.get("/", (req, res) => {
	res.render("home", { nombre: "Jesus", titulo: "FullStack Engineer" });
});
app.get("/generic", (req, res) => {
	res.render("generic", { nombre: "Jesus", titulo: "FullStack Engineer" });
});

app.get("/elements", (req, res) => {
	res.render("elements", { nombre: "Jesus", titulo: "FullStack Engineer" });
});

// app.get("/hola-mundo", function (req, res) {
// 	res.send("Hola desde otra pantalla en su respectiva ruta");
// });

//generic
// app.get("/generic", function (req, res) {
// 	res.sendFile(__dirname + "/templated-roadtrip/generic.html");
// });

// //elements
// app.get("/elements", function (req, res) {
// 	res.sendFile(__dirname + "/templated-roadtrip/elements.html");
// });

// app.get("*", function (req, res) {
// 	res.sendFile(__dirname + "/public/404.html");
// });

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
