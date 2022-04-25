window.onload = function () {
    let btn = document.getElementById('submit');
    let error = document.getElementById('error');
    let input = document.getElementById('email');
    input.addEventListener('keyup', function (e) {
        error.classList.add('hidden');
    });
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let form = document.getElementById('form');
        let formData = new FormData(form);
        let email = formData.get('email');
        if (!validateEmail(email)) {
            error.classList.remove('hidden');
        }
    });

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
};

