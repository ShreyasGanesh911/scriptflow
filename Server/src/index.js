import app from "./app.js";
import connectMongoDb from "./db/index.js";
const port = 4000

app.listen(port,()=>{
    console.log("Listening to port ",port)
    connectMongoDb()
})

