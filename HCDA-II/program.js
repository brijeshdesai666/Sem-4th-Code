function valid() {
    const name = document.forms.reg.name.value;
    const add = document.forms.reg.address.value;
    const email = document.forms.reg.email.value;
    const ph_no = document.forms.reg.ph_no.value;
    const password = document.forms.reg.password.value;
    const course = document.forms.reg.course.value;

    if (name === "" || name.includes('0') || name.includes('1') || name.includes('2') || name.includes('3') || name.includes('4') || name.includes('5') || name.includes('6') || name.includes('7') || name.includes('8') || name.includes('9')) {
        window.alert("Plese enter valid name");
        name.focus();
        return false;
    }
    if (add === "") {
        window.alert("Plese enter valid address");
        name.focus();
        return false;
    }
    if (email === "" || !email.includes('@') || !email.includes('.')) {
        window.alert("Plese enter valid email");
        name.focus();
        return false;
    }
    if (ph_no === "") {
        window.alert("Plese enter valid phone number");
        name.focus();
        return false;
    }
    if (!course.selectedIndex == -1) {
        window.alert("Plese enter valid course");
        name.focus();
        return false;
    }
    if (password === "" || !password > 10) {
        window.alert("Plese enter valid password");
        name.focus();
        return false;
    }
}