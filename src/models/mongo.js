const mongoose = require("mongoose")
const Admin = mongoose.mongo.Admin;

const Schemas = require("./item")

var Models = {};
Models["item"] = Schemas.item;
Models["order"] = Schemas.order;


async function createListing(dbName, collection, newListing) {
    console.log(newListing);
    mongoose.connection.useDb(dbName);

}