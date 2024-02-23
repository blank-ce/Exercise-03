let Username;
let password1;
let password2;
const Info = {
}
//const pass1 = "mapagmahal01";
//const pass2 = "MAPAGMAHAL01";
//const pass3 = "012345";

function atleastEight(pass){//checks if the password has atleast 8 characters
    return pass.length >= 8;
}

function hasNumber(pass){
    for(let i = 0; i<pass.length; i++){//checks if the password has atleas 1 number
        if(!isNaN(parseInt(pass[i]))){
            return true;
        }
    }
    return false;
}

function hasUpperCase(pass){//checks if the password has atleas 1 Upper Case letter
    for(let i = 0; i<pass.length; i++){
        if(pass[i] === pass[i].toUpperCase() && pass[i] !== pass[i].toLowerCase()){
            return true;
        }
    }
    return false;
}

function hasLowerCase(pass){//checks if the password has atleas 1 Lower Case letter
    for(let i = 0; i<pass.length; i++){
        if(pass[i] === pass[i].toLowerCase() && pass[i] !== pass[i].toUpperCase()){
            return true;
        }
    }
    return false;
}

function validatePassword(pass1, pass2){//Validates the password
    if (pass1 === pass2){
        if(atleastEight(pass1) === true && atleastEight(pass2) === true){
            if (hasNumber(pass2) === true){
                if (hasLowerCase(pass2) === true){
                    if (hasUpperCase(pass2) === true){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function reverse(pass){//returns a reverse password
    var passlength = pass.length-1;
    var reversepass = "";
    for (passlength; passlength>=0; passlength--){
        reversepass += pass[passlength];
    }
    return reversepass;
}

function storedObject(name, pass1, pass2){ //stores the name and the two passwords
    if(validatePassword(pass1, pass2) === true){
        Info.Username = name;
        Info.Password = reverse(pass2); //returns the reverse pass if valid
    }
    else{
        Info.Username = name;
        Info.Password = pass1; //returns the first password if not valid
    }
}

document.getElementById("login").addEventListener("submit", function(event) {
    Username = document.getElementById("username").value;
    password1 = document.getElementById("pass1").value;
    password2 = document.getElementById("pass2").value;

    if(validatePassword(Username, password1, password2) === true){
        storedObject(Username, password1, password2);
        alert("Username: " + Info.Username + "\nPassword: " + Info.Password);
    }else{
        storedObject(Username, password1, password2);
        alert("Username: " + Info.Username + "\nPassword: " + Info.Password);
    }
});