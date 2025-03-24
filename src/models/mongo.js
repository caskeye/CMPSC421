const mongoose = require("mongoose")
const Admin = mongoose.mongo.Admin;

const Schemas = require("./item")

var Models = {};
Models["item"] = Schemas.item;

async function createListing(dbName, collection, newListing) {
    console.log(newListing);
    mongoose.connection.useDb(dbName);

}