import {Link} from 'react-router-dom';

const  stepFour = () => {
    return (
      <section className="sign-page">
      <div className="container">
        <div className="sign_ctn">
          <div className="container__sml" >
            <div className="get-started">
              <div className="get-started_ctn">
                <h2 className="big-tittle text-white">Get started</h2>
                <div className="checkout-validation">
                    <div className="checkout-validation_item">
                      <span className="state-round"></span>
                      <span className="description-step">Valid your phone</span>
                    </div>
                    <span className="connect-state-line"></span>
                    <div className="checkout-validation_item  ">
                      <span className="state-round "></span>
                      <span className="description-step">Tell about yourself</span>
                    </div>
                    <span className="connect-state-line"></span>
                    <div className="checkout-validation_item ">
                      <span className="state-round "></span>
                      <span className="description-step">Tell about your company</span>
                    </div>
                    <span className="connect-state-line"></span>
                    <div className="checkout-validation_item active">
                      <span className="state-round active"></span>
                      <span className="description-step">Invite Team Members</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container__lg relative">
            <div className="step-wrapper">
              <div className="step-wrapper_ctn">
                <p className="step-count">Step 4/4</p>
                <form action="" className="sign-form-wrapper">
                <h3 className="sub-heading text-center">Invite Team Members</h3>
                  <div className="input-block">
                    <label htmlFor="" className="label">Member’s Email</label>
                    <input type="text" name="text" className="input" placeholder="youremail@gmail.com" />
                  
                  </div>
                  <button className="btn_previous">Add another Member</button>
                </form>
              </div>
            </div>
            <div className="button-wrapper custom-sign-in ">
                <div className="button-block_sign-in flex-between">
                  <Link to="/stepThree"><button className="btn_previous">Previos</button></Link>
                  <Link to="/Start"><button  className="btn primary">Start</button></Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
export default stepFour