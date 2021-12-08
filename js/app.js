function getPin() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin + '').length == 4) {
        document.getElementById('display-pin').value = pin;
    }
    else {
        return getPin();
    }
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    if (isNaN(event.target.innerText)) {
        if (event.target.innerText == 'C') {
            document.getElementById('typed-numbers').value = '';
        }
    }
    else {
        document.getElementById('typed-numbers').value += event.target.innerText;
    }
})

function getVerify() {
    if (document.getElementById('display-pin').value == document.getElementById('typed-numbers').value) {
        document.getElementById('match').style.display = 'block';
        document.getElementById('not-match').style.display = 'none';
    }
    else {
        document.getElementById('not-match').style.display = 'block';
        document.getElementById('match').style.display = 'none';
    }
}