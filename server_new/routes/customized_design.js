const express = require("express");
const customized_design = require("../models/customized_design");

const router = express.Router();

router.post('/',async (req,res) => {
    const cust = req.body;
    const newDesign = new customized_design(cust);
    try {
        await newDesign.save();
        res.status(201).json(newDesign);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
});

router.get('/',async (req,res) => {
    try {
        const custom = await customized_design.find();
        res.status(200).json(custom);
    } catch (error) {
        res.status(404).json({ message : error.message});
    }
});

router.delete('/:id',async (req,res)=>{
    let id=req.params.id
    customized_design.findByIdAndDelete(id, function (err) {
        if (err) return next(err);
        res.send({success:true});
});
});

router.get('/search/:id',async (req,res)=>{
    let id=req.params.id;
    try {
        const cust = await  customized_design.findById(id);
        res.status(200).json(cust);
    } catch (error) {
        res.status(404).json({ message : error.message});
    }
})

module.exports = router;