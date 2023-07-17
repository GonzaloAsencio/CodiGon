import { useState } from "react";

export default function RegisterPage(){
    const [username,SetUsername] = useState('');
    const [password,setPassword] = useState('');

    async function register(ev){
        ev.preventDefault();
       const response =  await fetch ('https://codigon.onrender.com/register',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},

        });
        if(response.status === 200){
            alert('Register successsful');
        }else {
            alert('Register failed');
        }
    }
    return (
        <form className="Register" onSubmit={register}>
            <h2>Register</h2>
            <input type = "text" placeholder="username" value={username} onChange={ev => SetUsername(ev.target.value)}/>
            <input type = "password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button>Register</button>
        </form>
    );
}