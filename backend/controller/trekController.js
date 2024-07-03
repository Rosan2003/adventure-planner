const express = require('express');
const app = express();
const Trek = require('../models/trekModel');

async function addTrek(req,res){
        let newTrek = req.body;
        let trek = await Trek.create({... newTrek});
        res.send("added");
}

async function getTrek(req,res){
    try {
        let trekId= req.query.trekId;
        if(trekId){
            let trek = await Trek.findById(trekId);
            return res.send(trek);
        }
        let trek = await Trek.find();
        res.send(trek);
    } catch (error) {
        res.status(500).send({error: err.message});
    }
}

async function deleteTrek(req,res){
    let id = req.params.id;
    let trek = await Trek.findByIdAndDelete(id);
    res.send("deleted");
}

exports.addTrek = addTrek;
exports.getTrek = getTrek;
exports.deleteTrek = deleteTrek;