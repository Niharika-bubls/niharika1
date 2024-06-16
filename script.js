document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication check (replace with real authentication in a production app)
    if (username === 'Niharika' && password === 'Niha') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content-container').style.display = 'block';
    } else {
        alert('Incorrect username or password');
    }
});
