import { useState } from 'react';
import {Link} from 'react-router-dom';

const  StepThree = () => {
  const [email, setEmail] = useState('');
  const inputEmail = document.querySelector('.input');
  const threeStep = document.querySelector('.state-round.active');

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^((([a-zA-Z\-0-9]+\.)))$/;
    if(!re.test(String(e.target.value).toLowerCase())) {
        console.log(inputEmail)
          if(inputEmail) {
            threeStep.classList.add('complete-icon');
            inputEmail.classList.add('box-shadow-valid');
        }
      }
    }
    return (
      <section className="sign-page">
      <div className="container">
        <div className="sign_ctn">
          <div className="container__sml" >
            <div className="get-started">
              <div className="get-started_ctn">
                <h2 className="big-tittle text-white">Get started</h2>
                <div className="checkout-validation">
                    <div className="checkout-validation_item active">
                      <span className="state-round complete-icon"></span>
                      <span className="description-step">Valid your phone</span>
                    </div>
                    <span className="connect-state-line"></span>
                    <div className="checkout-validation_item active ">
                      <span className="state-round complete-icon"></span>
                      <span className="description-step">Tell about yourself</span>
                    </div>
                    <span className="connect-state-line"></span>
                    <div className="checkout-validation_item active">
                      <span className="state-round active"></span>
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
          <div className="container__lg relative">
            <div className="step-wrapper">
              <div className="step-wrapper_ctn">
                <p className="step-count">Step 3/4</p>
                <form action="" className="sign-form-wrapper">
                <h3 className="sub-heading text-center">Tell about your company</h3>
                  <div className="input-block">
                    <label htmlFor="" className="label">Your Company`s Name</label>
                    <input type="text" onChange={e => emailHandler(e)} value={email} name="text" className="input"  placeholder="Company`s Name" />
                  </div>
                  <div className="input-block">          
                    <label htmlFor="" className="label">Business Direction</label>    
                      <select name="" id="" className="select w-100">
                        <option value="">IT and programming</option>
                        <option value="">QA</option>
                      </select>                  
                  </div>
                  <div className="input-block">          
                    <label htmlFor="" className="label">How many people in your team?</label>    
                    <div className="teams-wrapper">
                      <label htmlFor="teams1" className="label-team">
                        <span className="checkmark"></span>
                        <input className="check-box-team" type="radio" id="teams1" name="teams" value="onlyMe"  />Only me
                      </label>
                      <label htmlFor="teams2" className="label-team">
                        <span className="checkmark"></span> 
                        <input className="check-box-team " type="radio" id="teams2" name="teams" value="2-5" />2 - 5
                      </label>
                      <label htmlFor="teams3" className="label-team">
                        <span className="checkmark"></span>
                        <input className="check-box-team " type="radio" id="teams3" name="teams" value="6-10" />6 - 10
                      </label>
                      <label htmlFor="teams4" className="label-team">
                        <span className="checkmark"></span> 
                        <input className="check-box-team " type="radio" id="teams4" name="teams" value="11-20" />11 - 20
                      </label>
                      <label htmlFor="teams5" className="label-team">
                        <span className="checkmark"></span>
                        <input className="check-box-team " type="radio" id="teams5" name="teams" value="21-40" />21 - 40
                      </label>
                      <label htmlFor="teams6" className="label-team">
                        <span className="checkmark"></span>
                        <input className="check-box-team " type="radio" id="teams6" name="teams" value="41-50" />41 - 50
                      </label>
                      <label htmlFor="teams7" className="label-team">
                        <span className="checkmark"></span>
                        <input className="check-box-team " type="radio" id="teams7" name="teams" value="51-100" />51 - 100
                      </label>
                      <label htmlFor="teams8" className="label-team">
                        <span className="checkmark"></span>
                        <input className="check-box-team " type="radio" id="teams8" name="teams" value="101-500" />101 - 500
                      </label>
                    </div>     
                  </div>
                </form>
              </div>
            </div>
            <div className="button-wrapper custom-sign-in ">
                <div className="button-block_sign-in flex-between">
                  <Link to="/stepTwo"><button className="btn_previous">Previos</button></Link>
                  <Link to="/stepFour"><button  className="btn primary">Sign In</button></Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
export default StepThree