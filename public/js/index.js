const login = async (event) => {
    //delcaring email and password on page
    const password = document.querySelector('#password').value.trim();
    const email = document.querySelector('#email').value.trim();

    if(password && email) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json'},
        }
   );//response for email and password 
if (response.ok) {
    document.location.replace('/');
    window.alert('Login Successful!');
} }
};
