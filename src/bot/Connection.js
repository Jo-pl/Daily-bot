const dotenv = require("dotenv");
dotenv.config();
const config = require('../../config.json');
const mongoose = require('mongoose');

class Connection {
    constructor() {
        const uri = (`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/local?retryWrites=true&w=majority`);
        mongoose.connect(uri, { useNewUrlParser: true }).
        catch(error => console.log(error));

        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function() {
            console.log("Db connected");
        });
    }

    getConfig(){

    }

    runOnce(){

    }

}

module.exports = {
    Connection: Connection
};