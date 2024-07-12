function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const agency = document.getElementById('agency').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || agency === '' || message === '') {
        alert('Tous les champs doivent être remplis.');
        return false;
    }

    // Add more validation if needed
    return true;
}
