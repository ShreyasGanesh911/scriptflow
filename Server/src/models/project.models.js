import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:[true,'Name must be provided']
    },
    html:{
        type:String,
    },
    css:{
        type:String,
    },
    js:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:[true,'Name must be provided']
    },
    publicView:{
        type:Boolean,
        default:false
    }
})

const project = mongoose.model('project',projectSchema)

export default  project