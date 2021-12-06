import { useState } from 'react';
import {Link} from 'react-router-dom';
import LeftPanel from '../elements/LeftPanel';

let count = 1;
const randomId = ()  => {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
};

const  StepFour = () => {
  const [email, setEmail] = useState('');
  // const inputsEmail = document.querySelectorAll('.input');
  // const fourStep = document.querySelector('.state-round.active')
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if(!re.test(String(e.target.value).toLowerCase())) {
    //     inputsEmail.forEach(item => {
    //       item.classList.add('box-shadow-valid');
    //       if(item.classList.contains('box-shadow-valid')) {
    //         fourStep.classList.add('complete-icon');
    //       }
    //     }); 
    //   }
    }
   
    const [members, setMembers]  = useState([{id:count, key:randomId()}]);
    const addInput = () => {
      setMembers([...members,{id:++count, key:randomId()}]);
    }
    return (
      <section className="sign-page">
      <div className="container">
        <div className="sign_ctn">
          <div className="container__sml" >
            <LeftPanel/>
          </div>
          <div className="container__lg relative">
            <div className="step-wrapper">
              <div className="step-wrapper_ctn">
                <p className="step-count">Step 4/4</p>
                <form action="" className="sign-form-wrapper">
                <h3 className="sub-heading text-center">Invite Team Members</h3>
                  <div className="input-block">
                    <label htmlFor="" className="label">Member’s Email</label>
                    {members.map((item) => 
                      <input  onChange={(e) => emailHandler(e)} value={email} type="email" id={item.id} key={item.id} value={item.value}  name="email" className="input" placeholder="youremail@gmail.com" />
                    )}
                  </div>
                  <a className="btn_previous" onClick={addInput}>Add another Member</a>
                </form>
              </div>
            </div>
            <div className="button-wrapper custom-sign-in ">
                <div className="button-block_sign-in flex-between">
                  <Link to="/StepThree"><button className="btn_previous">Previos</button></Link>
                  <Link to="/Start"><button  className="btn primary">Start</button></Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
export default StepFour