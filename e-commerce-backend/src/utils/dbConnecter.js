const mongoose = require("mongoose");

const dbConnecter = () => {
    const dbConStr = process.env.MONGODB_URL;

    mongoose
        .connect(dbConStr, () => {
            console.log("DB Connetion Success !!");
        });
};

module.exports = {dbConnecter};