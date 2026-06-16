import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/TaskManagement")

const db = mongoose.connection
db.on('connected', () => {
    console.log("Connected Successfully")
})

db.on('error', (err) => {
    console.log("Error in connection",+err)
})

export default db;