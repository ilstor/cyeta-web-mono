function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hello awesome ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
}
