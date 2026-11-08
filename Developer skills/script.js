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
console.log(`the magnitude of this temperature readings is: ${amplitude}`)

// If the manager of the firsm says the function should recieve two arrays
// the best option will be to merge both arrays into one
// use 'concat' to concatenate two arrays

function calcAmplitudeNew(temp1, temp2){
    const temps = temp1.concat(temp2) // concatinates the two arrays 
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

const t1 = [1, 2, 3, 5, 'error']
const t2 = [7, 8, 9, 10, 1]
const amplitudeNew = calcAmplitudeNew(t1, t2)
console.log(`the magnitude of this new temperature readings is: ${amplitudeNew}`)


// Debugging is the act of finding and fixing errors in a code
// a bug is an error or defect in a computer programm


// Exercise
// Given an array of temperatures [1, 2, 3] create a function that prints out this sentence '...1degree celsius in 1 days ...2degree celsius in 2 days ...3degree celsius in 3 days' when the array is passed through it 

function printForcast(array){
    const result = []
    for(let i = 0; i < array.length; i++){
        const sentence = `...${array[i]}degree celsius in ${i + 1} days`
        result.push(sentence)
    }
    console.log(result.join(" ")) // join prints out everything in tthe array on thesame line and '" "' passed insine the join function is what separates what is in the array
}

const temp1 = [17, 21, 23]
const temp2 = [12, 5, -5, 0, 4]
const answer1 = printForcast(temp1)
const answer2 = printForcast(temp2)
console.log(answer1)
console.log(answer2)


// Exercise 2

function Report(array){
    const totalHours = 0
    const maxHour = array[0]
    const daysWorked = 0
    
    for (let i = 0; i < array.length; i++){
        totalHours = totalHours + array[i]
        // if (array[i] > maxHour){
        //     maxHour = i + 1
        // }
        // if (array[i] == '0'){
        //     continue
        // }else{
        //     daysWorked = daysWorked + i + 1
        // } 
    }
    const average = totalHours/ array.length

    // let conclusion 
    // if(totalHours >= 35){
    //      conclusion = "It was a full-time week because total number of hours for the week are 35hrs or above"
    // }else{
    //      conclusion = "It was not a full-time week because total number of hours for the week are less than 35hrs"
    // }

    console.log(`You worked a total of ${totalHours}hours with an average of ${average} this week.`)

}

const hour1 = [7.5, 8, 6.5, 0, 8.5, 4, 0]
const ans1 = Report(hour1)
console.log(ans1)
