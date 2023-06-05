import { useState } from "react";

export default function LoginPage(){
    const [username,SetUsername] = useState('');
    const [password,setPassword] = useState('');
    return(
        <form className="Login">
            <h2>Login</h2>
            <input type = "text" placeholder="username"/>
            <input type = "password" placeholder="password"/>
            <button>Login</button>
        </form>
    );
}