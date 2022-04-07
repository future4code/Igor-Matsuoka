const indexOf = (source:string, query: string) => {
    const stringArray = source.split("")

    const found = stringArray.find(element => element === query)

    if(found){
        let index = stringArray.findIndex(i => i === query);
        return index
    }

    if(found === undefined){
        return -1
    }
}


console.log(indexOf("cazaquistão", "q"))
