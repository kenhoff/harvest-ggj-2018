console.log("Starting...");


const express = require("express");


let app = express();

app.use(express.static(__dirname + "/build"))
app.use(express.static(__dirname + "/assets"))


app.get("*", (req, res) => {
	res.sendFile(__dirname + "/index.html")
})



let port = process.env.PORT || 1234
app.listen(port, () => {
	console.log(`Listening on ${port}...`);
})
