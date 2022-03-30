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
    let n = 0;
    let m = 0;
    let l = 0;
    let e = 0;

    if(userValue === ''&&passValue === ''){
        setErrorFor(user,'Username is required');
        setErrorFor(pass,'Password is required');
        n = 0;
    }
    else{
        if(userValue=='admin'&&passValue=='admin'){
            setSuccessFor(pass);
            setSuccessFor(user);
            alert("Welcome! You are now signed in as Admin");
            window.location="contents/Admin/admin.html";
        }
        else if(userValue=='student1'&&passValue=='1234'){
            setSuccessFor(pass);
            setSuccessFor(user);
            alert("Welcome! You are now signed in as Student.");
            window.location="contents/Student/student.html";
        }
        else if(userValue=='teacher1'&&passValue=='1234'){
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