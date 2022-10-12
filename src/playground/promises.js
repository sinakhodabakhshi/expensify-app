
const promise = new Promise((resolve , reject) => {
    reject('error1')
});
console.log('before')

promise.then((solve) => {
    console.log(solve)
}).catch((error) => {
    console.log(error)
})

console.log('after')