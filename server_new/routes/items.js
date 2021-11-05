const express = require("express");
const item = require("../models/item");

const router = express.Router();

router.get('/',async (req,res) => {
    try {
        res.status(200).json(await item.find());
    } catch (error) {
        res.status(404).json({ message : error.message});
    }
})

router.post('/',async (req,res) => {
    const it = req.body;
    const newItem = new item(it);
    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
})

router.delete('/:id',async (req,res)=>{
    let id=req.params.id
    item.findByIdAndDelete(id, function (err) {
        if (err) return next(err);
        res.send({success:true});
});
});

router.get('/search/:id',async (req,res)=>{
    let id=req.params.id;
    try {
        const I = await  item.findById(id);
        res.status(200).json(I);
    } catch (error) {
        res.status(404).json({ message : error.message});
    }
});
module.exports = router;