// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}

// Function to set a cookie
function setCookie() {
    const name = prompt("Please enter your name for the cookie:");
    if (name) {
        const expiryDate = new Date();
        expiryDate.setTime(expiryDate.getTime() + 1 * 60 * 60 * 1000); // 1-hour expiry
        document.cookie = `username=${name}; expires=${expiryDate.toUTCString()}; path=/`;
        alert(`Cookie set for ${name}`);
        displayCookie();
    } else {
        alert("No name entered. Cookie was not set.");
    }
}

// Function to display the cookie
function displayCookie() {
    const username = getCookie('username');
    const cookieDisplay = document.getElementById('cookieDisplay');
    if (username) {
        cookieDisplay.innerHTML = `<p><strong>Welcome back, ${username}!</strong></p>
                                   <p>Your cookie is active. Reload to see this message persist.</p>`;
    } else {
        cookieDisplay.innerHTML = `<p>No cookie found. Click OK to set your cookie.</p>`;
        setCookie();
    }
}

// Display cookie when page loads
window.onload = displayCookie;