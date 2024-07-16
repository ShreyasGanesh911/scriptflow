import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,'Name must be provided']
        },
        email:{
            type:String,
            required:[true,'Email must be provided'],
            unique :true
        },
        password:{
            type:String,
            required:[true,'Password must be provided']
        },
        
})

 const user = mongoose.model('user',userSchema)
  export default user