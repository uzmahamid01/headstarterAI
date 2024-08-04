document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxS2f1qfdER6GzpctHJEJj3a_-fVW_z-IQhDnFySRbu0dVwZc2wTNrTXsSmpM0zCG2PBA/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');

    form.addEventListener('submit', e => {
        e.preventDefault();

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    msg.innerHTML = "Message sent successfully";
                    setTimeout(function () {
                        msg.innerHTML = "";
                    }, 5000);
                    form.reset();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                msg.innerHTML = "An error occurred. Please try again later.";
            });
    });
});