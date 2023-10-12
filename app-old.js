const http = require("node:http");

// http
// 	.createServer((req, res) => {
// 		res.writeHead(200);
// 		res.write("Hola Mundo", "utf8", () => {
// 			console.log("Write data into response");
// 		});
// 		res.end("");
// 	})
// 	.listen(8000);
// console.log("Escuchando el puerto: 8000");

http
	.createServer((req, res) => {
		// res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
		// res.writeHead(200, { "Context-Type": "application/csv" });
		// res.write("id, nombre\n");
		// res.write("1, Jesus\n");
		// res.write("2, Rapha\n");
		res.write("Hola Jesus");

		res.end("");
	})
	.listen(8000);
console.log("escuchando el puerto 8000");
