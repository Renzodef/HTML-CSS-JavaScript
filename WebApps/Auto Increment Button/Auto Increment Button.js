let counter = 0;
function count() {
    counter++;
    // # is needed if we are referring to an id of an HTML's element
    document.querySelector("#counter").textContent = counter;
}     