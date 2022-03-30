const form = document.getElementById('form');
const user = document.getElementById('user');
const pass = document.getElementById('pass');

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const userValue = user.value.trim();
    const passValue = pass.value.trim();
    
    let userValueL = userValue.toLowerCase();

    if(userValueL === ''&&passValue === ''){
        setErrorFor(user,'Username is required');
        setErrorFor(pass,'Password is required');
    }
    else{
        if(userValueL=='admin'&&passValue=='admin'){
            setSuccessFor(pass);
            setSuccessFor(user);
            alert("Welcome! You are now signed in as Admin");
            window.location="contents/Admin/admin.html";
            
        }
        else if(userValueL=='student1'&&passValue=='1234'){
            setSuccessFor(pass);
            setSuccessFor(user);
            alert("Welcome! You are now signed in as Student.");
            window.location="contents/Student/student.html";
        }
        else if(userValueL=='teacher1'&&passValue=='1234'){
            setSuccessFor(pass);
            setSuccessFor(user);
            alert("Welcome! You are now signed in as Teacher.");
            window.location="contents/Teacher/teacher.html";
        }
        else{
            setErrorFor(user,'Username is Invalid');
            setErrorFor(pass,'Password is Invalid');    
        }
    }

}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'input-box error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = 'input-box success';
}