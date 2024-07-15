class ErrorHandler extends Error{
    constructor(status,message){
        super(message)
        status = this.status || 500
    }
}

export default ErrorHandler