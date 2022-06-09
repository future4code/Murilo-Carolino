const isOneEdit = (stringA: string, stringB: string): boolean => {

    if (Math.abs(stringA.length - stringB.length) > 1) {
        return false
    }

    if (stringA.length > stringB.length) {
        return stringA.includes(stringB)
    }
    
    if (stringB.length > stringA.length) {
        return stringB.includes(stringA)
    }

    let differentsChars = 0

    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) {
            differentsChars = differentsChars + 1
        }
    }

    return differentsChars === 1
}


console.log(isOneEdit("charmander", "charmander"))     // false
console.log(isOneEdit("charmande", "charmander"))      // true
console.log(isOneEdit("charmander", "charmanderr"))    // true
console.log(isOneEdit("charmander", "xharmander"))     // true
