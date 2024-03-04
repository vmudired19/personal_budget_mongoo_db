const mongoose = require("mongoose");
const nameModel = require("./models/budget_schema");

const url = 'mongodb://localhost:27017/mongo_budget';

mongoose.connect(url)
    .then(() => {
        console.log("Connected to MongoDB");
        nameModel.find({})
            .then((data) => {
                console.log(data);
                mongoose.connection.close();
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
