import mongoose from 'mongoose'

const snippetSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:[true,'Name must be provided']
    },
    language:{
        type:String,
        required:[true,'Language must be provided']
    },
    version:{
        type:String,
        required:[true,'Version must be provided']
    },
    content:{
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

const snippet = mongoose.model('snippet',snippetSchema)

export default  snippet