'use strict'
// given an array of temperatures, find the aplitude of the temperatures keeping in mind that there may be errors

// First we need to understand the task
// amplitude is the difference between the largest and smallest temperature values

// we now break down the task into smaller tasks

// errors are usually ignored 
// find the max value 
// find the minimum value 
// find the difference

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

function calcAmplitude(temps){
    // Initializing the max value to the first value of the array soit can compare with the rest
    let max = temps[0]
    // Initializing the min value to the first value of the array soit can compare with the rest
    let min = temps[0]

    for (let i = 0; i < temps.length; i++){
        const currentTemp = temps[i]
        // ignoring errors
        if(typeof currentTemp !== 'number') continue

        //finding max
        if(currentTemp > max) max = currentTemp

        //finding min
        if(currentTemp < min) min = currentTemp
    }
    
    return (max - min)
}

const amplitude = calcAmplitude(temperatures)
console.log(`the magnitude of this temperature readings is ${amplitude}`)