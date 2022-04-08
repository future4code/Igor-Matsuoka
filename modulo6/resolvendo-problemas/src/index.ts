//EX 1

import { forEachTrailingCommentRange } from "typescript"

function isOneEdit  (string1: string, string2: string) {
    if(Math.abs(string2.length - string1.length) > 1){
        return false
    }

    if (string1.length > string2.length) return string1.includes(string2)

    if (string2.length > string1.length) return string2.includes(string1)

    let charsDiffCount = 0
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) charsDiffCount++
    }
    return charsDiffCount === 1
}

console.log(isOneEdit("pananas","banana"))

//EX 2

const stringCompression = (input:any) =>{
    const substrings = []
    let lastChar = input[0]
    let charCount = 0

    for(const char of input){
        if(char !== lastChar){
            substrings.push(lastChar + charCount)
            lastChar = char
            charCount = 0
        }
        charCount++
    }

    substrings.push(lastChar + charCount)
    let result = ""
    for(const key of substrings){
        result += key
    }

    return result.length > input.length ? input : result;
}

console.log(stringCompression("aabbb"))