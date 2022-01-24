const compressionString = (string: string) => {
    
    const substrings = []
    let lastChar = string[0]
    let count = 0

    for (const char of string) {
        if (char !== lastChar) {
            substrings.push(lastChar + count)
            lastChar = char
            count = 0
        }
        count = count + 1
    }

    substrings.push(lastChar + count)

    let result = ""
    for (let char of substrings) {
        result = result + char
    }


    return result.length > string.length ? string : result
}

console.log(compressionString("aabbb"))
console.log(compressionString("accurate"))
console.log(compressionString("accuraaaaaaaaaate"))
console.log(compressionString("aabcccccaaa"))
