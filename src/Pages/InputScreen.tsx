import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import styled from "styled-components"
import * as yup from "yup"
import { createTask } from "../Utils/API's"
import {v4 as uuidv4} from "uuid"


const InputScreen = ()=>{


    const model = yup.object({
        task: yup.string().required(),
        priority: yup.string().required()
    })
 
    const {
        register,
        formState:{ errors },
        handleSubmit,
        reset

    } = useForm({
        resolver: yupResolver(model)
    })

    const handleMySubmission = handleSubmit((res)=>{
        createTask({
            id:uuidv4(),
            task: res.task,
            priority:res.priority,
            completed:false
        })

        reset()
    })
    return(
        <div>
            <Container>
                <Main 
                onSubmit={handleMySubmission}
                >
                    <Input placeholder="Enter your task"
                    {...register("task")}
                    />
                    <Error>{errors.task && "please enter your task"}</Error>
                    <Input placeholder="Enter your priority" 
                    {... register("priority")}
                    />
                    <Error>{errors.priority && "please enter your priority"}</Error>
                    <Button 
                    type = "submit"
                    >Add Task</Button>
                </Main>
            </Container>
        </div>
    )
}

export default InputScreen

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const Main = styled.div`
width: 90%;
display: flex;
align-items: center;
flex-direction: column;
padding-top: 50px;
`
const Input = styled.input`
outline: none;
border: 1px solid silver;
border-radius: 3px;
height: 50px;
width: 300px;
padding-left: 10px;
margin-top: 10px;
`
const Error = styled.div`
font-size: 10px;
color: red;
`
const Button = styled.button`
padding: 10px 18px;
background-color: black;
border-radius: 3px;
color: white;
cursor: pointer;
margin-top: 30px;
outline: none;
/* border: 0; */
`