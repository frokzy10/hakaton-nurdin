
export const AuthUtil = (
    password: string,
    email: string,
    setEmailError: (error: string) => void,
    setPasswordError: (error: string) => void,

) => {
    const isEmailValid = (email: string) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
        return passwordRegex.test(password);
    };

    const emailValid = isEmailValid(email);
    const passwordValid = isPasswordValid(password);

    setEmailError(emailValid ? "" : "Неправильный формат email");
    setPasswordError(
        password.length < 6 ? "Пароль должен иметь 6 символов и цифры" :
            !passwordValid ? "Неправильно введен пароль" : ""
    );

    if (!emailValid || !passwordValid) {
        return;
    }
}
