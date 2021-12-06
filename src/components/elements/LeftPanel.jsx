import {STEPS} from '../SignInPage/constants';

const LeftPanel = () => {
return(
    <div className="get-started">
        <div className="get-started_ctn">
            <h2 className="big-tittle text-white">Get started</h2>
            <div className="checkout-validation">
                {console.log(STEPS[0])}
                {STEPS.map((stepName, i) => <div key={i} className="checkout-validation_item ">
                    
                    <span className='state-round'></span>
                    <span className="description-step">{stepName}</span>
                </div>)}
            </div>
        </div>
    </div>
    );
};
export default LeftPanel