// Your JS code here

// select elements
var subTypeElement = document.querySelector("#subscription") ;
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

// change event listeners
subTypeElement.addEventListener("change", function (e){
    subType = e.target.value
    console.log(subType);
});

subDurationElement.addEventListener("change", function (e){
    Number(subDuration = e.target.value)
    console.log(subDuration);
});

// Use a Function to Calculate the Cost
