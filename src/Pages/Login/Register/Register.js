import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        console.log('User :', user)

    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        // console.log(e.target.email.value)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast('Updated profile');
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Enter name' />
                <input type="email" name="email" id="" placeholder='Enter email' required />
                <input type="password" name="password" id="" placeholder='Enter password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'} `} htmlFor="terms">Accept Genius Car  Terms and Conditions ?</label>
                <input
                    disabled={!agree}
                    className='mt-3 w-50 btn-primary mx-auto '
                    type="submit"
                    value="Register" />

            </form>
            <p>Already have an account ? <Link to='/login' className='text-primary text-decoration-none ' onClick={navigateLogin}>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;