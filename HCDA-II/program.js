function valid(){
    const name = document.forms.reg.name.value;
    const add = document.forms.reg.address.value;
    const email = document.forms.reg.email.value;
    const ph_no = document.forms.reg.ph_no.value;
    const password = document.forms.reg.password.value;
    const course = document.forms.reg.course.value;

    if(name===""){
        window.alert("Plese enter valid name");
        name.focus();
        return false;
    }
    if(add===""){
        window.alert("Plese enter valid address");
        name.focus();
        return false;
    }
    if(email===""){
        window.alert("Plese enter valid email");
        name.focus();
        return false;
    }
    if(ph_no===""){
        window.alert("Plese enter valid phone number");
        name.focus();
        return false;
    }
    if(course===""){
        window.alert("Plese enter valid course");
        name.focus();
        return false;
    }
    if(password===""){
        window.alert("Plese enter valid password");
        name.focus();
        return false;
    }
}