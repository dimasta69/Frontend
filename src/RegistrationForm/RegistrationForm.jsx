import './RegistrationForm.css'

function RegistrationForm() {
    return(
        <div id="regform" className='regform hidden'>
            <p id="close" className='close'>Close</p>
            <h1>Registration</h1>
            <input className="name" type="text" placeholder='First Name'/>
            <input className="surname" type="text" placeholder='Last Name'/>
            <input className="login" type="text" placeholder='Login'/>
            <input className="email" type="text" placeholder='Email'/>
            <input className="password" type="password" placeholder='Password'/>
            <input className="confirmPassword" type="password" placeholder='Confirm password'/>
            <a href=" ">Google</a>
            <button>Confirm</button>
        </div>
    );
}

export default RegistrationForm;