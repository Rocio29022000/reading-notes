function capital(p1){
    loop:
    while (true){
        if (p1 == "madrid"){
            alert("Correct!")
            break
        } else if (p1 == "barcelona"){
            alert("Your answer is incorrect")
            break
        } else{
            alert("This is not a valid answer")
            p1 = prompt("What is the capital of Spain? Please choose between Madrid or Barcelona")
        }

    }
    
}
 
p1 = prompt("What is the capital of Spain? Please choose between Madrid or Barcelona")


function imageDisplay(){ 
    let output = ""
    let rating = prompt("How many times do you want me to display an image for? please choose between 1-5")
    while(rating){
        if (rating == 1 || rating == 2 || rating == 3  || rating == 4 || rating == 5 ){
            for (let i = 0; i < rating; i++) 
            output += "<img src='madrid-CC-pic.jpg' alt='Image of madrid CC' class='img--class'/>"
            
            break
        } else{
            alert("This is not a valid answer")
            rating = prompt("How many times do you want me to display an image for? please choose between 1-5")
        }
        
    }
    return document.write(output)
}


