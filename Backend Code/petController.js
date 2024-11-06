const Pet = require('../models/Pet');

exports.getPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addPet = async (req, res) => {
    const { name, age, breed, status, careDetails } = req.body;
    try {
        const pet = new Pet({ name, age, breed, status, careDetails });
        await pet.save();
        res.status(201).json({ message: 'Pet added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
