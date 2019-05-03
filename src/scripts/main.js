// const audrey = document.getElementById("audrey")

// document.addEventListener("scroll", function (event) {
//     console.log("the page is scrolling")

//     window.onscroll = function() {scrollFunction()};

//     function scrollFunction() {
//       if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("audrey").style.fontSize = "20px";
//       } else {
//         document.getElementById("audrey").style.fontSize = "700px";
//       }
//     }


/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */

// })

const audrey = document.getElementById("audrey")

document.addEventListener("scroll", function (event) {
  if (window.scrollY < 100) {
    audrey.style.height = 100
    audrey.style.width = 100
  } else {
    if (window.scrollY >= 100) {
      audrey.style.height = (window.scrollY) / 3 + "px"
      audrey.style.width = (window.scrollY) / 4 + "px"
    }

    console.log(event)

  }
})