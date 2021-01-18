function displayData(e) {
    e.preventDefault();
    // Full name
    let fname = document.getElementById("fw-first-name").value;
    let lname = document.getElementById("fw-last-name").value
    let fullname = document.getElementById("data-fullname");
    fullname.innerHTML = "Name: " + fname + " " + lname;
    // Gender
    let male = document.getElementById("fw-male");
    let female = document.getElementById("fw-female");
    let gender = document.getElementById("gender-selected");
    if(male.checked == true){
        gender.innerHTML = "Gender: Male";
    }else{
        gender.innerHTML = "Gender: Female";
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
    
  };