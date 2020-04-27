const form = document.querySelector("form");

const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerText = message;
} else {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const input = document.querySelector("#message");
        const label = document.querySelector("#label");

        label.innerHTML = `<h4>Link already copied! Share link with friends!</h4>`;
        document.querySelector('button').classList.add('display');

        input.value = `${window.location}#${btoa(input.value)}`;

        input.select();
        document.execCommand("copy");

    });
}