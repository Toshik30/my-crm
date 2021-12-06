const SmsCode = (props) => {
    return(
        <p className="blue-context">SMS was sent to your number {props.iso} {props.phoneNumber} It will be valid for00:{props.seconds}</p>
    );
}
export default SmsCode;