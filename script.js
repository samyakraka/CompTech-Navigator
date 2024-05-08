document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sign-in-btn').addEventListener('click', function() {
        window.location.href = 'login.html'; // Replace 'login.html' with the path to your login page
        toggleProfileIcon(); // Call the function to toggle the profile icon
    });
});

function toggleProfileIcon() {
    var profileIcon = document.getElementById('profile-icon');
    if (profileIcon.style.display === "none") {
        profileIcon.style.display = "block";
    } else {
        profileIcon.style.display = "none";
    }
}
