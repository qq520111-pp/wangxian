var express = require("express");
var mongoose = require("mongoose");
var { feedbacks } = require("./feedback");
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");

var app = express();
//使用中间件

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("*", function (req, res, next) {
    //解决跨域请求问题
    res.header({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'content-type',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/json;charset=utf-8'
    })

    if (req.method === "OPTIONS") {
        res.status(200).send("OK")
        //eslint-disable-next-lineno-console   
        console.log("hasoption")
    } else {
        next()
    }
})

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
        data = JSON.parse(data.toString());
        res.send(
            data
        )
    })
})

//  获取全部反馈 
app.use("/feedback", function (req, res) {
    feedbacks.find({}).then(d => {
        console.log(12)
        res.send(d)
    })
    // res.send("132")
})

// 创建反馈的
app.use("/createData/", function (req, res) {
    var data = req.body;

    //判断名字是否重复
    feedbacks.findOne({
        name: data.name
    }).then(d => {
        // 查找到就返回这个数据--没有就null
        if (!d) {
            // 没有重复名字
            var obj = {
                time: handleTime(),
                reader: 0
            }
            // 改变原对象--返回第一个对象
            feedbacks.create(Object.assign(obj, data)).then(d => {
                console.log("创建成功")
                res.send({
                    err: 1
                })
            })
        } else {
            // 重复名字
            res.send({
                err: 0
            })
        }
    })

})
// 已读
app.use("/reader/", function (req, res) {
    var data = req.body;
    console.log(data)
    //判断名字是否重复
    feedbacks.findOne({
        name: data.name
    }).then(d => {

        // 查找到就返回这个数据--没有就null
        var num = d.reader += 1;
        num = Math.min(1, num);
        feedbacks.updateOne({
            name: data.name
        }, {
            reader: num
        }).then(d => {
            
            res.send({
                err: 1
            })
        })
    })

})

app.listen(3389, function () {
    console.log(3389 + "服务器开启成功");
    mongoose.connect("mongodb://127.0.0.1:27017/feedback", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(d => {
        console.log("数据库链接成功")
    })
})
function handleTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return `${year}-${month}-${day}`
}