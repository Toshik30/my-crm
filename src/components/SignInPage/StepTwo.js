import {Link} from 'react-router-dom';
import LeftPaneL from '../elements/LeftPanel';
const  StepTwo = () => {

    return (
      <section className="sign-page">
      <div className="container">
        <div className="sign_ctn">
          <div className="container__sml" >
            <LeftPaneL/>
          </div>
          <div className="container__lg relative">
            <div className="step-wrapper">
              <div className="step-wrapper_ctn">
                <p className="step-count">Step 2/4</p>
                <form action="" className="sign-form-wrapper">
                <h3 className="sub-heading text-center">Tell about yourself</h3> 
                  <div className="input-block">          
                    <label htmlFor="" className="label">Why will you use the service?</label>    
                      <select name="" id="" className="select w-100">
                        <option value="">Work</option>
                        <option value="">Work</option>
                      </select>                  
                  </div>
                  <div className="input-block">          
                    <label htmlFor="" className="label">What describes you best?</label>    
                      <select name="" id="" className="select w-100">
                        <option value="">Business Owner</option>
                        <option value="">Business Owner</option>
                      </select>                  
                  </div>
                  <div className="input-block flex-between">          
                    <p className="bold-grey-text">What describes you best?</p>    
                    <div className="flex">
                        <input className="check-box-custom" type="radio" id="yesAnswer" name="YesOrNo" value="yesAnswer" />
                        <label htmlFor="yesAnswer"><span></span>Yes</label>
                        <input className="check-box-custom" type="radio" id="NoAnswer" name="YesOrNo" value="NoAnswer" />
                        <label htmlFor="NoAnswer"><span></span> No</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="button-wrapper custom-sign-in ">
                <div className="button-block_sign-in flex-between">
                  <Link to="/stepOne"><button className="btn_previous">Previos</button></Link>
                  <Link to="/stepThree"><button  className="btn primary">Next Step</button></Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
export default StepTwo