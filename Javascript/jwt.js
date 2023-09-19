let arr = [1,2,3,4]
let fval = arr.filter((value) => {
    if (isNaN(Number(value))) {
        console.log(value)
        return !isNaN(Number(value))
    }
    else 
    console.log("aqwec")
})