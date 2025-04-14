import axios from 'axios';
import { useState } from 'react'

function Register() {

    let [register, setRegister] = useState({});
    let [message, setMessage] = useState("");

    const usernameHandler = (event: any) => {
        setRegister({ ...register, username: event.target.value });
    }

    const passwordHandler = (event: any) => {
        setRegister({ ...register, password: event.target.value });

    }
    const submitHandler = () => {
        const url = "http://3.21.127.221:3000/users";

        axios.post(url,
            register, {
            headers: { "Content-type": "application/json" }
        }
        ).then(response => setMessage(response.data.message))
            .catch(error => console.error(error));
    }


    return (
        <>

            <h2>Registration</h2>
            <h3>{message}</h3>

            <div>
                <input type="text" placeholder='Username' onChange={usernameHandler} />
                <input type="password" placeholder='Password' onChange={passwordHandler} />
                <button onClick={submitHandler}>Submit</button>
            </div>

        </>)

}

export default Register