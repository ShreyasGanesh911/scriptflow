type Props = {
    language:string|undefined,version:string|undefined,code:string|undefined 
}
type Output = {
    language: string,
    version : string,
    run : {
      output : string,
      stderr : string
    }
  }
export const compileCode = async({language,version,code}:Props)=>{
    
    const body = {
      language : language,
      version : version,
      
      files :[
        {
          content :code?.toString()
        }
      ]
    }
    try{
      const response = await fetch("https://emkc.org/api/v2/piston/execute",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(body)
      })
      
    const data:Output = await response.json()
    console.log(data)
    let success = true , value = data.run.output.split('\n')

    if(data.run.stderr){
        success = false
        return {success,value}
         }
    else 
    return {success,value}
    
    // const repo = data.run.output.split('\n')
    
    // // setValue(repo)
    // // if(data.run.stderr){
    // //     setError(true)
    // //     toastError("Error in code !")
    // // }
    // // else{
    // //     toastSuccess("Executed successfully")
    // // }

    
    }catch(e){
        
      console.log(e)
    }
  }