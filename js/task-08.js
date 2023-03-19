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
        alert("Усі поля повинні бути заповнені!");
    } else {
        user.email = `${email.value}`;
        user.password = `${password.value}`;
    };
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
};