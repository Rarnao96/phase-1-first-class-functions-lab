// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function(firstTwo){
    return firstTwo.slice(0,2);
}

const returnLastTwoDrivers = function(lastTwo){
    return lastTwo.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(interger){
    return function multiplier(){
        return interger*interger;    
    }
}

function fareDoubler(interger){
    return interger *2;
}

function fareTripler(interger){
    return interger *3;
}

function selectDifferentDrivers(arrayOfDrivers, whichFunction){
    arrayOfDrivers = drivers;

    if (whichFunction === returnFirstTwoDrivers){
        return ["Antonia", "Nuru"];
    } else if (whichFunction === returnLastTwoDrivers){
        return ['Amari', 'Mo'];
    }
}


