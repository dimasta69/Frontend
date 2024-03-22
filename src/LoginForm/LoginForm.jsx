import './LoginForm.css'

function LoginForm() {
    return(
        <div id="logform" className='logform hidden'>
            <p id="close" className='close'>Close</p>
            <h1>Login</h1>
            <input className="login" type="text" placeholder='Login'/>
            <input className="password" type="password" placeholder='Password'/>
            <a href=" ">Google</a>
            <button>Confirm</button>
        </div>
    );
}

export default LoginForm;