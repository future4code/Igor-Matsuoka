const checkBrackets = (string: string) => {
    if(string.length % 2 !== 0){
        return false
    } else if(string.length === 0){
        return true
    }

    console.log(string.length)
}

console.log(checkBrackets("{}"))