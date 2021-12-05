import { useEffect, useState } from 'react';
import classNames from 'classnames';
import infoImg from '../../assets/img/info.svg';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { ENTER_KEY, PHONE_CODES, STEPS } from './constants';
import Component from './PhoneInput';

const StepOne = () => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [iso, setIso] = useState('+3');
	const [isPhoneSubmitted, setIsPhoneSubmitted] = useState(false);
	const handleInputIso = ({ target: { value } }) => setIso(value);
	const [seconds, setSeconds] = useState(12);

	const handleChangePhoneNumber = ({ target }) => setPhoneNumber(target.value);

	const handleSubmitPhoneNumber = ({ code }) => {
		if (code === ENTER_KEY && phoneNumber.match(/[\d]/gm).length === 10) {
			setIsPhoneSubmitted(true);
		}
	}

	useEffect(() => {
		if (isPhoneSubmitted && seconds > 0) {
			setTimeout(() => setSeconds(seconds - 1), 1000);
		}
	}, [seconds, isPhoneSubmitted])


	return (
		<section className="sign-page">
			<div className="container">
				<div className="sign_ctn">
					<div className="container__sml">
						<div className="get-started">
							<div className="get-started_ctn">
								<h2 className="big-tittle text-white">Get started</h2>
								<div className="checkout-validation">
									{STEPS.map((stepName, i) => <div key={i} className="checkout-validation_item active">
										<span className="state-round active"></span>
										<span className="description-step">{stepName}</span>
									</div>)}
									<div className="checkout-validation_item active">
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
								<form className="sign-form-wrapper">
									<div className="input-block">
										<label htmlFor="" className="label">Phone Number</label>
										<div className="flex">
											<select name="" id="select-iso" className="select" value={iso} onChange={handleInputIso}>
												{PHONE_CODES.map((code) => <option key={code} value={code}>{code}</option>)}
											</select>
											<InputMask
												mask="(099)-999-99-99"
												className="input"
												value={phoneNumber}
												onKeyDown={handleSubmitPhoneNumber}
												onChange={handleChangePhoneNumber}
											/>
										</div>
									</div>
									<div className="input-block">
										<label className="label">Code from SMS</label>
										<input type="text" maxLength={1} className={classNames('input sms-code', { 'box-shadow-valid': isPhoneSubmitted && seconds === 0 })} />
										<input type="text" maxLength={1} className={classNames('input sms-code', { 'box-shadow-valid': isPhoneSubmitted && seconds === 0 })} />
										<input type="text" maxLength={1} className={classNames('input sms-code', { 'box-shadow-valid': isPhoneSubmitted && seconds === 0 })} />
										<input type="text" maxLength={1} className={classNames('input sms-code', { 'box-shadow-valid': isPhoneSubmitted && seconds === 0 })} />
									</div>
									<div className="information-about-code">
										<div className="attention-blue-icon">
											<img src={infoImg} alt="" />
										</div>
										<p className="blue-context">SMS was sent to your number {iso} {phoneNumber} It will be valid for
											00:{seconds}</p>
									</div>
									<div className="input-block">
										<label htmlFor="" className="label">Email Address</label>
										<input o type="email" name="email" className="input" />
									</div>
									<div className="input-block password">
										<label htmlFor="" className="label">Password</label>
										<input type="password" name="password" className="input" />
									</div>
								</form>
							</div>
						</div>
						<div className="button-wrapper flex-end">
							<Link to="/stepTwo">
								<button className="btn primary">Next Step</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Component />
		</section>
	);
};
export default StepOne;
