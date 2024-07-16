import mongoose from 'mongoose'

const connectMongoDb = async()=>{
  try{
      await mongoose.connect("mongodb://localhost:27017/scriptflow")
      console.log("connected to data base")

  }catch(e){
    console.log(e)
  }
}

export default connectMongoDb