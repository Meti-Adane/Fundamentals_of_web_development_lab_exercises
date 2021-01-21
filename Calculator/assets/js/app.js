

add = (numbers)=>{
    sum = 0
    numbers.forEach((number)=>{
        sum = sum + number
    })
    return sum
}
mul = (numbers)=>{
    sum = 1
    numbers.forEach((number)=>{
        sum = sum * number
    })
    return sum
}
sub = (a , b)=>{
    return a - b
}
divide = (a, b) =>{
    if (b == 0){
        console.log("Divison by zero in inhibited!!")
        return 
    }else{
        return a / b
    }
}

(()=>{
    let res = document.querySelector(".result")
    console.log("1. Addition \n 2.Subtraction \n 3.Multiplication \n 4. Divide")    
    operations = prompt("What operation do you want to perfom:")
    let numbers = new Array();
    
    
    if (operations == 1 || operations == 3){
        let size = parseInt(prompt("how many numbers do you want to enter ?"))
        for (let i =0; i < size; i ++){
            numbers[i] = parseInt(prompt("enter the number here: "))
        }
        if (operations == 1){
            res.innerHTML = add(numbers)
            console.log(add(numbers))
        }
        else {
            res.innerHTML = mul(numbers)
            console.log(mul(numbers))
        }
    }
    else{
        let a = parseInt(prompt("Enter the first number: "))
        let b = parseInt(prompt("Enter the second number: "))

        if (operations == 2){
            res.innerHTML = sub(a, b)
            console.log(sub(a, b))
        } 
        else{
            res.innerHTML = divide(a, b)
            console.log(divide(a, b))
        }
    }


})();
