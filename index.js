// Calculator
let previousValue;
let currentValue;
let inputValue;
function output(button) {
    inputValue = button.value;
    currentValue = document.querySelector('#current-value');
    currentValue.innerHTML += inputValue;     
}
function operator(operand) {
    inputValue = operand.value;
    previousValue = document.querySelector('#previous-value');
    previousValue.innerHTML = currentValue.innerHTML + inputValue;
    currentValue.innerHTML = "";
}
function allClear() {
    currentValue = document.querySelector('#current-value');
    currentValue.innerHTML = "";
    previousValue = document.querySelector('#previous-value');
    previousValue.innerHTML = "";
}
function inputClear() {
    currentValue = document.querySelector('#current-value');
    currentValue.innerHTML = currentValue.innerHTML.substr(0,currentValue.innerHTML.length-1);
}

// checkout form
function displayData(e) {
    e.preventDefault();
    // Full name
    let fname = document.getElementById("fw-first-name").value;
    let lname = document.getElementById("fw-last-name").value
    let fullname = document.getElementById("data-fullname");
    fullname.innerHTML = "Name: " + fname + " " + lname;
    // Email
    let email = document.getElementById("fw-email").value;
    let displayEmail = document.getElementById("data-email");
    displayEmail.innerHTML = "Email: " + email;
    // Address
    let address = document.getElementById("fw-address").value;
    let dataAddress = document.getElementById("data-address");
    dataAddress.innerHTML = "Address: " + address;
    // Gender
    let red = document.getElementById("fw-red");
    let blue = document.getElementById("fw-blue");
    let color = document.getElementById("color-selected");
    if(red.checked == true){
        color.innerHTML = "Color: Red";
    }else if(blue.checked == true){
        color.innerHTML = "Color: Blue";
    }else {
        color.innerHTML = "Color: Black";
    };
    // Dropdown product selection
    let productSelection = document.getElementById("fw-dropdown").value;
    let numberItem = document.getElementById("fw-countItems").value;
    let itemSelected = document.getElementById("product-total");
    itemSelected.innerHTML = "Total: P" + productSelection * numberItem;
    if(productSelection == 100){
        let bracelet = document.getElementById("product-selected");
        bracelet.innerHTML = "Product: Bracelet " + numberItem + " pcs. (P100 each)";
    }else if(productSelection == 200){
        let cap = document.getElementById("product-selected");
        cap.innerHTML = "Product: Cap " + numberItem + " pcs. (P200 each)";
    }else{
        let watch = document.getElementById("product-selected");
        watch.innerHTML = "Product: Watch " + numberItem + " pcs. (P500 each)";
    }
  }