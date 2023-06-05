import { useState } from "react";
import { Navigate} from "react-router-dom";

export default function LoginPage(){
    const [username,SetUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);

    async function Login(ev){
        ev.preventDefault();
       const response = await fetch ('http://localhost:4000/login',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
            credentials:'include',
        });
        if (response.ok){
            setRedirect(true);
        }else {
            alert('wrongCredentials');
        }
    }
        if(redirect){
            return <Navigate to={'/'}/>
        }

    return (
        <form className="Login" onSubmit={Login}>
            <h2>Login</h2>
            <input type = "text" placeholder="username" value={username} onChange={ev => SetUsername(ev.target.value)}/>
            <input type = "password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button>Login</button>
        </form>
    );
}