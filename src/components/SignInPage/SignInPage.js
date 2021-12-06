import { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import logo from '../../assets/img/logo.svg';


const SignInPage = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty ] = useState(false);
    const [passwordDirty, setPasswordDirty ] = useState(false);
    const [emailError, setEmailError] = useState('Email error');
    const [passwordError, setPasswordError] = useState('Password error');
    const [formValid, setFormValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        if(emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('try again');
        } else {
            setEmailError('');
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('incorect password')
            if(!e.target.value) {
                setPasswordError('Password error')
            }
        } else {
            setPasswordError('')
        }
    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                console.log('leave email')
                setEmailDirty(true);
                break;

            case 'password':
                setPasswordDirty(true);
                break;
        }
    }

    const handleClickBtn = () => {
        let history = createBrowserHistory();
        history.push('/stepOne')
    }
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
    
    return(
        <section className="sign-page">
            <div className="container h-100">
                <div className="sign_ctn h-100">
                    <div className="block_bg"></div>
                    <div className="block">
                        <div className="logo-wrapper text-center">
                            <img src={logo} alt="logo"  /> 
                        </div>
                        <div className="sign-form-wrapper">
                            <h3 className="sub-heading text-center">Sign in to</h3>
                            <form className="sign-in-form">
                                <div className="input-block">
                                    {(emailDirty && emailError) && <div className="error_message"> {emailError}</div>}
                                    <label htmlFor="" className="label">Email Address</label>
                                    <input onChange={e => emailHandler(e)} value={email} type="email" onBlur={e => blurHandler(e)} name="email" className="input" placeholder="@gmail.com" />
                                </div>
                                <div className="input-block password">
                                    {(passwordDirty && passwordError) && <div  className="error_message"> {passwordError}</div>}
                                    <label htmlFor="" className="label">Password</label>
                                    <input onChange={e => passwordHandler(e)} value={password} type={showPassword ? 'text' : 'password'} onBlur={e => blurHandler(e)} name="password" className="input"/>
                                    <span className="open-password" onClick={togglePassword}></span>
                                </div>
                                <div className="checkbox-wrapper">
                                    <label htmlFor="" className="label">
                                        <input type="checkbox" id="check" className="checkbox" />
                                        <label htmlFor="check"></label>
                                        Remember me
                                    </label>
                                    <a className="grey-context">Forgot Password?</a>
                                </div>
                                <div className="button-wrapper">
                                    <button  onClick={handleClickBtn} disabled={!formValid} className="btn primary">Sign In</button>
                                </div>
                                <button className="blue-context-medium m-auto mt-25 d-block">Don’t have an account?</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SignInPage;
