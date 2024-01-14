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
    //console.log(subType);
    updateSubscriptionDiv()
});

subDurationElement.addEventListener("change", function (e){
    Number(subDuration = e.target.value)
    //console.log(subDuration);
    updateSubscriptionDiv()
});

// Use a Function to Calculate the Cost

var updateSubscriptionDiv = function () {
    monthlyCost = 5
    if (subType === "standard") {
        monthlyCost = 7    
    } else if (subType === "premium") {
        monthlyCost = 10
    }
    var total = subDuration * monthlyCost
    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`
};