function calculation(input) {
    if (form.displayResult.value === "0") {
        form.displayResult.value = input;

    } else {
        form.displayResult.value = form.displayResult.value + input;
        console.log(form.displayResult.value);
    }

}

function clearInput() {
    form.displayResult.value = eval(form.displayResult.value - form.displayResult.value);

}