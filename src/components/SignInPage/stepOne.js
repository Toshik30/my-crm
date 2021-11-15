import infoImg from '../../assets/img/info.svg';
import {verificationPhone} from './verificationPhone.js';
import {Link} from 'react-router-dom';

const stepOne = () => {
 
    return (
      <section className="sign-page">
        <div className="container">
          <div className="sign_ctn">
            <div className="container__sml" >
              <div className="get-started">
                <div className="get-started_ctn">
                  <h2 className="big-tittle text-white">Get started</h2>
                  <div className="checkout-validation">
                      <div className="checkout-validation_item  active">
                        <span className="state-round  active"></span>
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
                        <select name="" id="" className="select">
                          <option value="">+3</option>
                          <option value="">+4</option>
                          <option value="">+5</option>
                          <option value="">+6</option>
                          <option value="">+7</option>
                          <option value="">+8</option>
                        </select>
                        <input type="phone" onChange={(e) => verificationPhone(e)}  name="phone" className="input" />
                      </div>
                    </div>
                    <div className="input-block">
                      <label htmlFor="" className="label">Code from SMS</label>
                      <input type="text" className="input sms-code" />
                      <input type="text" className="input sms-code" />
                      <input type="text" className="input sms-code" />
                      <input type="text" className="input sms-code" />
                    </div>
                    <div className="information-about-code">
                      <div className="attention-blue-icon">
                        <img src={infoImg} alt="" />
                      </div>
                      <p className="blue-context">SMS was sent to your number +1 345 673-56-67 It will be valid for 01:25</p>
                    </div>
                      <div className="input-block">
                          <label htmlFor="" className="label">Email Address</label>
                          <input o type="email" name="email" className="input"/>
                      </div>
                      <div className="input-block password">
                          <label htmlFor="" className="label">Password</label>
                          <input type="password" name="password" className="input"  />
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
  export default stepOne