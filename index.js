const toggleCheckboxState = () => {
    const checkbox = document.getElementById("mode");

    if (checkbox.classList.contains("unchecked")) {
        checkbox.classList.remove("unchecked");
        checkbox.classList.add("checked");
        document.body.classList.add('theme2');
    } else if (checkbox.classList.contains("checked")) {
        checkbox.classList.remove("checked");
        checkbox.classList.add("indeterminate");
        document.body.classList.remove('theme2');
        document.body.classList.add('theme3');
    } else {
        checkbox.classList.remove("indeterminate");
        checkbox.classList.add("unchecked");
        document.body.classList.remove('theme3');

    }
};
