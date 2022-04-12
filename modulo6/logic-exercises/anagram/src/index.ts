const findAnagram = (s: string , t:string ):boolean => {
    return s.split("").sort().join("") === t.split("").sort().join("")
}

console.log(findAnagram("dama", "mada"))