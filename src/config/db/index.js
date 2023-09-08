const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/bemap_courses_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Successfully!!!');
    } catch (error) {
        console.log('Connected to MongoDB Failure!!!');
    }
}

module.exports = { connect };
