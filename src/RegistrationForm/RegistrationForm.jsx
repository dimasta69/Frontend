import './RegistrationForm.css'

function RegistrationForm() {
    let cls = function(event) {
        event.preventDefault();
        let cls = document.getElementById('bgreg');
        cls.classList.toggle('hidden');
    }

    return(
        <div id="bgreg" className="bg hidden">
            <div id="regform" className='regform'>
                <button id="close" className='close' onClick={cls}></button>
                <h1>Регистрация</h1>
                <input className="name" type="text" placeholder='First Name'/>
                <input className="surname" type="text" placeholder='Last Name'/>
                <input className="login" type="text" placeholder='Login'/>
                <input className="email" type="text" placeholder='Email'/>
                <input className="password" type="password" placeholder='Password'/>
                <input className="confirmPassword" type="password" placeholder='Confirm password'/>
                <a href=" ">Google</a>
                <button>Confirm</button>
            </div>
        </div>
    );
}

export default RegistrationForm;