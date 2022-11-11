let promptsArray = [];

for (let i = 1 ; promptsArray.length < 10; i++){
    let response = prompt("Question number " + i)
    promptsArray.push(response)
}
console.log(promptsArray)