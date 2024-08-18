// This is JS File

const height = document.getElementById("height");
const weight = document.getElementById("weight");

function bmiCalculator() {
    var heightInCms = height.value / 100;
    // var bmi = Math.floor((weight.value/(heightInCms*heightInCms)));
    var bmi = (weight.value/(heightInCms*heightInCms)).toFixed(2);
    console.log(bmi)
    if (bmi <= 18.5) {
        document.getElementById("bmi-msg").innerHTML = "Your BMI is "+bmi+", you are Under-weight. Eat well🥦";
    }
    if (bmi > 18.5 && bmi <= 24.9) {
        document.getElementById("bmi-msg").innerHTML = "Your BMI is "+bmi+", Wow you're on perfect weight. Keep going!";
    }
    if (bmi > 24.9 && bmi <= 29.9) {
        document.getElementById("bmi-msg").innerHTML = "Your BMI is "+bmi+", you are Over-weight. Go for exercises and maintain diet 🍎";
    }
    if (bmi >= 30) {
        document.getElementById("bmi-msg").innerHTML = "Your BMI is "+bmi+", Ohhh No! you need to start going for workout right away 🏃🏽";
    }
    
}

function clearVal(){
    height.value = "";
    weight.value = "";
}

document.getElementById("submit").addEventListener("click", bmiCalculator);
// document.getElementById("submit").addEventListener("click", clearVal);
