function emptyInput(){
    const emptyMessage = document.createElement("p");
    emptyMessage.classList.add('emptyMessage');
    FIXME:emptyMessage.appendChild("loginForm");
};

function checkIsNotEmpty() {
    //console.log('on est dans la fonction');//ok
    const form = document.querySelector("form");
    //console.log(form);//ok
    const email = form.elements.email.value;
    //console.log(email);//ok, adresse bien récupérée
    const password = form.elements.password.value;
    let Oemail = "test@test.com"
    let Opassword = "password";

    if(email !== "" && password !== "") {
        if(email === Oemail && password === Opassword)
        {
            alert('Thank you for login in !!')
        }
        if(email === "" || password === "")
        {
            console.log('deuxième if ok');
            emptyInput();
            document.getElementsByClassName("emptyMessage").innerHTML = "Check if one input is empty and fill it";
        }
    }else
    emptyInput()
    console.log('else activé');
    document.getElementsByClassName("emptyMessage").innerHTML = "Both email and password have to be filled";
};