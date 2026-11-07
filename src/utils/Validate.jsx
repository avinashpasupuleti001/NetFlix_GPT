export default function ValidateEmail(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if (!emailRegex) {
        return "InValid Email";
    } 
    if (!passwordRegex) {
        return "InValid Password";
    } 
    // if (emailRegex && passwordRegex) {
    //     return "Valid Email and Password";
    // }
}
    