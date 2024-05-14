import React from 'react'
import Banner from './PageComponents/Banner'
import SignupForm from './PageComponents/SignupForm'

const SignUp = () => {
    return (
        <div className='signup-page gap-8 h-screen flex justify-between'>
            <div className='banner w-[60%] h-full'>
                <Banner />
            </div>
            <div className='signup-form  w-[40%]'>
                <SignupForm />
            </div>
        </div>
    )
}

export default SignUp
