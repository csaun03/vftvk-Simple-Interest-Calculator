

//range slider function

function rangeSlider (){

   let rangeNum = document.getElementById("rate").value;

   document.getElementById("showRate").innerHTML = rangeNum + "%";

}

 

//results

 



function compute()

{

    //variables

const principal = document.getElementById("principal").value;

const rate = document.getElementById("rate").value;

const years = document.getElementById("years").value;

const interest = principal * years * rate/100

 

//logic for future year

const calcYears = document.getElementById("years");

const yearSelected = calcYears.value;

const futureYear = parseInt(yearSelected)  + 2021;

//console.log(futureYear);

 //innerhtml
    
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br>" + " at an interest rate of <mark>" + rate + "%</mark>.<br> You will receive an amount of <mark>" +  interest + "</mark>,<br> in the year <mark>" + futureYear + "</mark>";

   //principal validation

   if (principal <= 0){
       
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
        
   }




   

}

    
 