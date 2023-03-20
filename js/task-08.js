const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const user = {
        name: "Max",
    };

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Усі поля повинні бути заповнені!");
    } else {
        console.log({email: email.value, password: password.value});
    };
    
    event.currentTarget.reset();
};