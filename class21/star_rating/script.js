/**
 * 1.Get all the stars
 * 2.add a click event on each star
 * 3. when the star is clicked
 *   3.1-> get the data-attribute of the star
 *   3.2 -> update the rating based on the data-attribute
 *   3.3-> update the stars based on the rating - change the colors the colors of the stars
 */



const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('rating');


//add a click event listener on each star
stars.forEach(function(star){
    star.addEventListener("click",function(){
        //get the data-attribute of the star
        const value = parseInt(star.getAttribute('data-value'));

        updateRating(value);
    })
})

function updateRating(value){
    stars.forEach(function(star){
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled',starValue<=value);
    })
    ratingDisplay.textContent = value;
}



