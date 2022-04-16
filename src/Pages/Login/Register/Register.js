import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }
    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.target.email.value)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Enter name' />
                <input type="email" name="email" id="" placeholder='Enter email' required />
                <input type="password" name="password" id="" placeholder='Enter password' required />
                <input type="submit" value="Register" />

            </form>
            <p>Already have an account ? <Link to='/login' className='text-danger text-decoration-none ' onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default Register;