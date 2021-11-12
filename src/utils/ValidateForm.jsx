// function Validator() {
//     useEffect(() => {
//         if(emailError || passwordError) {
//             setFormValid(false)
//         } else {
//             setFormValid(true)
//         }
//     }, [emailError, passwordError]);
    
//     const emailHandler = (e) => {
//         setEmail(e.target.value);
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(!re.test(String(e.target.value).toLowerCase())) {
//             setEmailError('try again');
//         } else {
//             setEmailError('');
//         }
//     }
//     const passwordHandler = (e) => {
//         setPassword(e.target.value)
//         if(e.target.value.length < 3 || e.target.value.length > 8) {
//             setPasswordError('incorect password')
//             if(!e.target.value) {
//                 setPasswordError('Password error')
//             }
//         } else {
//             setPasswordError('')
//         }
//     }
//     const blurHandler = (e) => {
//         switch (e.target.name) {
//             case 'email':
//                 console.log('leave email')
//                 setEmailDirty(true);
//                 break;
    
//             case 'password':
//                 setPasswordDirty(true);
//                 break;
//         }
//     }
    
    
//     const handleClickBtn = () => {
//         let history = createBrowserHistory();
//         history.push('/stepOne')
//     }
     
// }