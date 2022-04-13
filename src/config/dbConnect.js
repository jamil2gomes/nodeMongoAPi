import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:OJKjwlFDqXVR3b5F@cluster0.9jmyg.mongodb.net/alura_node");

let db = mongoose.connection;

export default db;
