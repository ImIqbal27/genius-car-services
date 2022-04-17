import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/g-logo.png'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElment;

    if (error || error1) {

        errorElment = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>


    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user || user1) {
        navigate('/home')


    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ height: '30px' }} src={google} alt="" />
                    <span className='px-2'> Google Sign In</span>
                </button>
                {errorElment}
                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ height: '30px' }} src={google} alt="" />
                    <span className='px-2'> Facebook Login</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ height: '30px' }} src={google} alt="" />
                    <span className='px-2'> Github Login</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;