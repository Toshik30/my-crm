import infoImg from '../../assets/img/info.svg';
import {Link} from 'react-router-dom';
import InputMask from 'react-input-mask';
import React, { useState, useEffect } from 'react';


const StepOne = (props) => {

  const [phone, setPhone] = useState('');
  const [iso, setIso] = useState('+3');
  const handleInput = ({target: {value}}) => setPhone(value);
  const handleInputIso = ({target: {value}}) => setIso(value);
  const [seconds, setSeconds] = useState(12);

  const randomCode = () => {
    return  Math.floor(Math.random() * (10 - 1)) + 1;
  }

  const smsCodes = document.querySelectorAll('.sms-code');
  const boxShadowDone = document.querySelectorAll('input');
  const completeFillIn = document.querySelector('.state-round.active')
  useEffect(() => {
    if(phone.length === 15) {
      if(seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds('00');
        smsCodes.forEach(item => item.value = randomCode())
      }
      boxShadowDone.forEach(item => item.value.length !== 0 ? item.classList.add('box-shadow-valid') : item.classList.remove('box-shadow-valid'));
      boxShadowDone.forEach(item => item.classList.contains('box-shadow-valid') ? completeFillIn.classList.add('complete-icon') : completeFillIn.classList.remove('complete-icon'));
    }
  });

 
    return (
      <section className="sign-page">
        <div className="container">
          <div className="sign_ctn">
            <div className="container__sml" >
              <div className="get-started">
                <div className="get-started_ctn">
                  <h2 className="big-tittle text-white">Get started</h2>
                  <div className="checkout-validation">
                      <div className='checkout-validation_item active'>
                        <span className="state-round active"></span>
                        <span className="description-step">Valid your phone</span>
                      </div>
                      <span className="connect-state-line"></span>
                      <div className="checkout-validation_item">
                        <span className="state-round"></span>
                        <span className="description-step">Tell about yourself</span>
                      </div>
                      <span className="connect-state-line"></span>
                      <div className="checkout-validation_item">
                        <span className="state-round"></span>
                        <span className="description-step">Tell about your company</span>
                      </div>
                      <span className="connect-state-line"></span>
                      <div className="checkout-validation_item">
                        <span className="state-round"></span>
                        <span className="description-step">Invite Team Members</span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container__lg">
              <div className="step-wrapper">
                <div className="step-wrapper_ctn">
                  <p className="step-count">Step 1/4</p>
                  <form action="" className="sign-form-wrapper">
                    <div className="input-block">          
                      <label htmlFor="" className="label">Phone Number</label>
                      <div className="flex">
                        <select name="" id="select-iso" className="select" onChange={handleInputIso}>
                          <option value="+3">+3</option>
                          <option value="+4">+4</option>
                          <option value="+5">+5</option>
                          <option value="+6">+6</option>
                          <option value="+7">+7</option>
                          <option value="+8">+8</option>
                        </select>
                        {/* <input type="phone"  name="phone" className="input" /> */}
                        <InputMask  mask='(099)-99-99-999'className="input"value={props.value} onChange={handleInput}/>
                       
                        
                      </div>
                    </div>
                    <div className="input-block">
                      <label htmlFor="" className="label">Code from SMS</label>
                      <input type="text" className="input sms-code"  />
                      <input type="text" className="input sms-code"  />
                      <input type="text" className="input sms-code"  />
                      <input type="text" className="input sms-code"  />
                    </div>
                    <div className="information-about-code">
                      <div className="attention-blue-icon">
                        <img src={infoImg} alt="" />
                      </div>
                      <p className="blue-context">SMS was sent to your number {iso} {phone} It will be valid for 00:{seconds}</p>
                    </div>
                      <div className="input-block">
                          <label htmlFor="" className="label">Email Address</label>
                          <input o type="email" name="email" className="input"/>
                      </div>
                      <div className="input-block password">
                          <label htmlFor="" className="label">Password</label>
                          <input type="password" name="password"  className="input"  />
                      </div>  
                  </form>
                </div>
              </div>
              <div className="button-wrapper flex-end">
                <Link to="/stepTwo"><button  className="btn primary">Next Step</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default StepOne