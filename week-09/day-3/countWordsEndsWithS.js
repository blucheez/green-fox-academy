function countWordsEndsWithS(string) {
    const arr = string.split(" ")
    let counter = 0
    arr.forEach((word)=>{
        word.endsWith('s') && counter++
    })
    return counter
}

console.log(countWordsEndsWithS("ends with s characters sss s"))
