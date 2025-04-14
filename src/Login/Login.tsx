import axios from 'axios';
import { useState } from 'react'

function Login() {

    let [login, setLogin] = useState({});
    let [message, setMessage] = useState("");

    const usernameHandler = (event: any) => {
        console.log(event.target.value);

        setLogin({ ...login, username: event.target.value });
    }

    const passwordHandler = (event: any) => {
        console.log(event.target.value);

        setLogin({ ...login, password: event.target.value });

    }
    const submitHandler = async () => {
        const url = "http://localhost:3000/users/login"
        axios.post(url, login, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <>

            <h2>Login</h2>
            <h3>{message}</h3>

            <div>
                <input type="text" placeholder='Username' onChange={usernameHandler} />
                <input type="password" placeholder='Password' onChange={passwordHandler} />
                <button onClick={submitHandler}>Submit</button>
            </div>

        </>)
}

export default Login