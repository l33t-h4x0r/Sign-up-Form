let pass = document.querySelector("#pass");
let confirmPass = document.querySelector("#confirm");

pass.addEventListener('input', checkPass);
confirmPass.addEventListener('input', checkPass);

function checkPass(){
    if(pass.value != confirmPass.value){
        pass.classList.add('error');
        confirmPass.classList.add('error');
    }
    else {
        pass.classList.remove('error');
        confirmPass.classList.remove('error');
    }
}