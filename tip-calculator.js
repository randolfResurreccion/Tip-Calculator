
document.querySelector("#calculate").addEventListener("click", function() {
    console.log("Calculate this!!");

    calculateTip();
});



// hide this div onload
// document.querySelector(".totalTip").style.display = "none";


function calculateTip() {

    // variable
    let amountOfBill = document.querySelector(".bill-amount").value;
    console.log(`amount of the bill: ${amountOfBill}`);
    let numberOfPeople = document.querySelector(".number-of-people").value;
    console.log(`number of People: ${numberOfPeople}`);
    let tipOption = document.querySelector("#tip-options").value;
    console.log(`tip option: ${tipOption}`);

    // dom
    let each = document.querySelector("#each");
    let warning = document.querySelector(".warning");
    let warningText = document.querySelector(".warning-text");
    let closeBtn = document.querySelector(".close");
    let totalTip = document.querySelector(".totalTip");

    // validate bill 
    if ((amountOfBill <= 0 || amountOfBill == "") || tipOption == "0") {
        console.log("try again");
        warning.style.display = "block";
        
    }

    // validate if amountOfBill is a number 
    if (isNaN(amountOfBill)) {
        console.log("bill is not a number");
        warning.style.display = "block";
    }

    // validate the number of people 
    if (numberOfPeople == "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        each.style.display = "none";
    }
    else {
        each.style.display = "block";
    }

    // close warning window
    closeBtn.addEventListener("click", function() {
        console.log("close this");
        warning.style.display = "none";
        document.querySelector(".totalTip").style.display = "none";
        document.getElementById("tipForm").reset();
    });

    // close result window
    document.querySelector(".close-result").addEventListener("click", function() {
        totalTip.style.display = "none";
        document.getElementById("tipForm").reset();
    })

    // calculate and show the total
    let total = amountOfBill / numberOfPeople * tipOption;
    total = total.toFixed(2)
    console.log(`${total} each`)
    
    document.querySelector(".display-tip").innerHTML = total;

    document.querySelector(".totalTip").style.display = "block";


 
       


}





