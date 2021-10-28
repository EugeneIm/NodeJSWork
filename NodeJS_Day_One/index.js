function poop(input)
{
    return `:)${input}:)`
}

let data = ["rabbit", "whale", "cat"]

let outputs = data.map(word => poop(word))

console.log(outputs)