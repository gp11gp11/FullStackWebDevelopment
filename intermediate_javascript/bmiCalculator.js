function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
    if (bmi>24.9){
        var interpretation="Your BMI is " +bmi +", so you are overweight.";
    }
    if (bmi<24.9 && bmi>18.5){
     interpretation="Your BMI is " +bmi +", so you have a normal weight.";
    }
    if (bmi<18.5){
     interpretation="Your BMI is " +bmi +", so you are underweight.";
    }
    return interpretation;
}



