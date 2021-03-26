import React,{useEffect} from 'react'
 import UserCard from '../UserCard/index.js'
 import {useDispatch,useSelector} from 'react-redux'
import { getallusers,deleteuser } from '../js/Actions.js'
const Userlist=()=> {
    const {users,loading}=useSelector((state)=>state)
   const dispatch = useDispatch();
   const getusers = () => dispatch(getallusers());


    useEffect(() => {
    getusers(); 
     
   }, [])
    return (
        <div>
         { users.map((user)=>
          <UserCard user={user} /> )}
        </div>
      )
}

export default Userlist
