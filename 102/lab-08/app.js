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

// let output
// let rating
// function imageDisplay(){ 
//     rating = prompt("How many times do you want me to display an image for? please choose between 1-5")
//     while(rating = true){
//         if (rating == 1 || rating == 2 || rating == 3  || rating == 4 || rating == 5 ){
//             for (let i = 0; i < rating; i++) 
//             output += "<img src='madrid-CC-pic.jpg' alt='Image of madrid CC' class='img--class'/>"
            
//             break
//         } else{
//             alert("This is not a valid answer")
//             rating = prompt("How many times do you want me to display an image for? please choose between 1-5")
//         }
         
//     }
//     document.write(output)
// }


 function displayRating() {
    let output = "";
    let rating = prompt("On a scale of 1 - 5, how much do you rate chris's haircut?");
    for (let i = 0; i < rating; i++) {
      output += "<img class='star-img' src='madrid-CC-pic.jpg' alt='pic of madrid CC'>";
    }
    return document.write(output);
  }

