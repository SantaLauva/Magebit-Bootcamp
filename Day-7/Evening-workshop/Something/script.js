function showPass(event){
    event.target.setAttribute('type', 'text');
}

function hidePass(event){
    event.target.setAttribute('type', 'password');
}

function checkPhone(event){
    let val = event.target.value;
    let IsValid = true;

    let pattern = new RegExp('^2[0-9]{7}$','gi');
    IsValid = pattern.test(val);

    console.log(IsValid);

    if (!IsValid){
        event.target.classList.add('invalid');
    }else{
        event.target.classList.remove('invalid');
    }
    
    console.log(IsValid);
}

function validateZip(event){
    let val = event.target.value;
    let IsValid = true;

    let pattern = new RegExp('^LV\-[1-9][0-9]{3}$','gi');
    IsValid = pattern.test(val);
    
    console.log(IsValid);

    if (!IsValid){
        event.target.classList.add('invalid');
    }else{
        event.target.classList.remove('invalid');
    }
}