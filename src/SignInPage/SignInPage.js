import React from "react";

import logo from '../img/logo.svg';
const SignInPage = () => {
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
                            <h3 className="sub-heading text-center">Sign in</h3>
                            <form action="" className="sign-in-form">
                                <div className="input-block">
                                    <label htmlFor="" className="label">Email Address</label>
                                    <input type="email" className="input" placeholder="memberemail@gmail.com" />
                                </div>
                                <div className="input-block password">
                                    <label htmlFor="" className="label">Password</label>
                                    <input type="password" className="input" placeholder="***************" />
                                </div>
                                <div className="checkbox-wrapper">
                                    <label htmlFor="" className="label">
                                        <input type="checkbox" id="check" className="checkbox"  />
                                        <label htmlFor="check"></label>
                                        Remember me !
                                    </label>
                                    <a href="" className="helping-link">Forgot Password?</a>
                                </div>
                                <div className="button-wrapper">
                                    <button disabled className="btn primary">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SignInPage;
