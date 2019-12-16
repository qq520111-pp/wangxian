var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();

app.use("/newlist", function (req, res) {
    fs.readFile(path.join(__dirname, "./data/newList.json"), function (err, data) {
        var d = data.toString()
        res.send(d)
    })
})
app.use("/imglist/:id", function (req, res) {
    var num = Number(req.params.id)
    fs.readFile(path.join(__dirname, "./data/imgList.json"), function (err, data) {
        var d = JSON.parse(data.toString()).data.slice(num * 10, (num + 1) * 10);
        res.send(d)
    })
})
app.use("/prolist/", function (req, res) {

    fs.readFile(path.join(__dirname, "./data/proList.json"), function (err, data) {
        data = JSON.parse(data.toString())

        res.send(
            data
        )
    })
})

app.listen(5567, function () {
    console.log("服务器开启成功");
})