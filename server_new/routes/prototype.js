const express = require("express");
const prototype = require("../models/prototype");
const Prototype = require("../models/prototype");
const router = express.Router();


router.get('/',async (req,res) => {
    try {
        const prototype = await Prototype.find();
        res.status(200).json(prototype);
    } catch (error) {
        res.status(404).json({ message : error.message});
    }
})

router.post('/',async (req,res) => {
    const prot = req.body;
    const newPrototype = new Prototype(prot);
    try {
        await newPrototype.save();
        res.status(201).json(newPrototype);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
})

router.delete('/:id',async (req,res)=>{
    let id=req.params.id
    prototype.findByIdAndDelete(id, function (err) {
        if (err) return next(err);
        res.send({success:true});
});
});

router.get('/search/:id',async (req,res)=>{
    let id=req.params.id;
    try {
        const prototype = await Prototype.findById(id);
        res.status(200).json(prototype);
    } catch (error) {
        res.status(404).json({ message : error.message});
    }
})
module.exports = router;