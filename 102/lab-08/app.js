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

// Prompt the user for a number
let p2 = prompt("How many times do you want to display the image?");
  
// Convert the user input to an integer
p2 = parseInt(p2);
  
function displayImage(src, alt) {
    let img = document.createElement("img");
    
    img.src = src;
    img.alt = alt;
    document.getElementById('imageContainer').appendChild(img);
  }
let src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.spain.info%2Fen%2Fdestination%2Fmadrid%2F&psig=AOvVaw22KWzDYiQMCRmYqZKA4dgZ&ust=1686769292314000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiHi7b3wP8CFQAAAAAdAAAAABAE.png"
let alt = "Image of Madrid CC"
  for (let i = 0; i < p2; i++) {
    displayImage(src, alt);
  }
  
  
  





// p2 = prompt("How many times do you want to display the image?")

// p2 = parseInt(p2);

// let src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.spain.info%2Fen%2Fdestination%2Fmadrid%2F&psig=AOvVaw22KWzDYiQMCRmYqZKA4dgZ&ust=1686769292314000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiHi7b3wP8CFQAAAAAdAAAAABAE.png"
// let alt = "Image of Madrid CC"

// for (let i = 0; i < p2; i++) {
//     displayImage(src, alt);
//   }

// function displayImage(src, alt){
//     let img = document.createElement("img")
//     // let node = document.createTextNode("This is an img")
//     img.src = src
//     img.alt = alt

//     // img.appendChild(node)
//     document.body.appendChild()
// }   
  


