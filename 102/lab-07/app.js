function capital(p1){
    loop:
    while (true){
        if (p1 == "madrid"){
            alert("Correct!")
            break
        } else if (p1 == "barcelona"){
            alert("Your answer is incorrect")
            p1 = prompt("What is the capital of Spain? Please choose between Madrid or Barcelona")
        } else{
            alert("This is not a valid answer")
            p1 = prompt("What is the capital of Spain? Please choose between Madrid or Barcelona")
        }

    }
    
}
 
p1 = prompt("What is the capital of Spain? Please choose between Madrid or Barcelona")
