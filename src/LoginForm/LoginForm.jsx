import './LoginForm.css'

function LoginForm() {
    let leave = function() {
        let cls = document.getElementById('bglog');
        cls.classList.toggle('hidden');
        let form = document.getElementById('logreg');
        form.innerHTML = '';
        let html = `
            <a id="enter" href=" " onClick={enter}>Войти</a>
            <a id="register" href=" " onClick={register} >Регистрация</a>
        `;
        form.insertAdjacentHTML('beforeend',html);
    }

    let cls = function(event) {
        event.preventDefault();
        let cls = document.getElementById('bglog');
        cls.classList.toggle('hidden');
    }

    let enter = function(event) {
        let cls = document.getElementById('bglog');
        cls.classList.toggle('hidden');
        let form = document.getElementById('logreg');
        form.innerHTML = '';
        let html = `
            <a id="cabinet" className="cabinet" href=" ">Личный кабинет</a>
            <a id="my-photos" className="my-photos" href=" ">Мои фото</a>
            <a id="leave" className="leave" href=" " onClick={leave}>Выйти</a>
        `;
        form.insertAdjacentHTML('beforeend',html);
    }
    
    return(
        <div id="bglog" className="bg hidden">
            <div id="logform" className='logform'>
                <button id="close" className='close' onClick={cls}></button>
                <h1>Login</h1>
                <input className="login" type="text" placeholder='Login'/>
                <input className="password" type="password" placeholder='Password'/>
                <a href=" ">Google</a>
                <button onClick={enter}>Confirm</button>
            </div>
        </div>
    );
}

export default LoginForm;