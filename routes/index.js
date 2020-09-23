const express = require('express');
const router = express.Router();


// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');




module.exports = function (io) {
    router.get('/', function (req, res) {
        let tweets = tweetBank.list();
        res.render('index', { tweets });
    });

    router.get('/users/:name', (req, res) => {
        let name = req.params.name
        console.log(name)
        let tweets = tweetBank.find({ name })
        console.log(tweets)
        res.render('index', { tweets, showForm: true, twitero: name })
    })

    router.get("/tweets/:id", function (req, res) {
        let id = req.params.id;
        let tweets = tweetBank.find({ id });
        res.render("index", { tweets, showForm: true });
    });

    router.post("/tweets", (req, res) => {
        let name = req.body.name
        let tweet = req.body.text
        let id = tweetBank.add(name, tweet)
        io.sockets.emit('newTweet', { name, tweet, id });
        //res.end()
        res.redirect("/")
    })

    return router
};