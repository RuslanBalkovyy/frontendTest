import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <>
            <h1>Homepage</h1>
            <Link to="/login">Login</Link >
            <br />
            <br />
            <Link to="/register">Register</Link >

        </>
    )
}

export default Homepage