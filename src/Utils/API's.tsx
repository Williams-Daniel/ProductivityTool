import axios from "axios"

const URL:string = "http://localhost:4455/data"


export const  createTask = async(data:any)=>{
    try {
        await axios.post(URL,data).then(res=>{
            console.log(data)
            return res.data
        })
    } catch (error) {
     console.log(error)   
    }
}