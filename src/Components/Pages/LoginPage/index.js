import {useContext, useState} from "react";
import { Navigate} from "react-router-dom";
import {UserContext} from "../../UserContext";
import LoginImage from  "../../../assets/Image/Login/login.png";
import Button from '../../SharedComponents/Button/index';
import './Login.css';

export default function LoginPage(){
    const [username,SetUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);

    async function Login(ev){
        ev.preventDefault();
       const response = await fetch ('http://localhost:3000/login',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
            credentials:'include',
        });
        if (response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
              });
        }else {
            alert('wrongCredentials');
        }
    }
        if(redirect){
            return <Navigate to={'/'}/>
        }

    return (
        <div className="login-container">
            <img src={LoginImage} alt="LoginImg"/>
            <form className="Login" onSubmit={Login}>
                <h2>Login</h2>
                <input type = "text" placeholder="Usuario" value={username} onChange={ev => SetUsername(ev.target.value)}/>
                <input type = "password" placeholder="Contraseña" value={password} onChange={ev => setPassword(ev.target.value)}/>
                <Button text='Login'/>
            </form>
        </div>
    );
}