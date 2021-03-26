import {GETUSERS,ADDUSER }from  './ActionTypes'
import axios from 'axios'
export const getallusers=()=>(dispatch)=>{
axios.get('/api/getuser')
.then((res)=> dispatch({
    type:GETUSERS,
    payload:res.data
}))
} 
export const deleteuser=(id)=>(dispatch)=>{
    axios.delete(`/api/${id}`).then((res)=>dispatch(getallusers()))
}
export const adduser=(newuser)=>(dispatch)=>{
    axios.post('/api/addUser',newuser)
    .then((res)=> dispatch({
        type:ADDUSER,
        payload:res.data
    }))
    }
    export const edituser=(id,editeduser)=>(dispatch)=>{
        axios.put(`/api/${id}`,editeduser).then((res)=>dispatch(getallusers()))}