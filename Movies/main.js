// MOVIES ARRAY

var movies = [
    {
        name: "Gladiator",
        img: "img/Gladiator.jpg"
    },
    {
        name: "Airplane",
        img: "img/Airplane.jpg"
    },
    {
        name: "Amadeus",
        img: "img/Amadeus.jpg"
    },
    {
        name: "Die Hard",
        img: "img/Die_Hard.jpg"
    },
    {
        name: "Ghostbusters",
        img: "img/Ghostbusters.jpg"
    },
    {
        name: "Inception",
        img: "img/inception.jpg"
    },
    {
        name: "The Deer Hunter",
        img: "img/The_Deer_Hunter.jpg"
    },
    {
        name: "The Seven Samurai",
        img: "img/The_Seven_Samurai.jpg"
    },
    {
        name: "Up",
        img: "img/Up.jpg"
    },
    {
        name: "Vertigo",
        img: "img/Vertigo.jpg"
    },
    {
        name: "Wall-E",
        img: "img/wall_e.jpg"
    },
    {
        name: "Avatar",
        img: "img/Avatar.jpg"
    }
];

//ALERT

// function beginSearch (){
//     alert ("Please type a movie name from the list below in the input field for bigger screen");
// }

// setTimeout(beginSearch, 2000);

//MAKING A PICK UP LIST ON PAGE

movies.forEach(function(element, index) {
    var image = document.createElement("img");
    var title = document.createElement('h4');
    title.innerHTML = movies[index].name;
    image.setAttribute("src", movies[index].img);
    image.className = "photo";
    document.querySelector('.movie-screen').appendChild(title);
    document.querySelector('.movie-screen').appendChild(image);
    
});


// SEARCH AND REMOVE FUNCTION

var input = document.querySelector('input');
var button = document.getElementById('remove');
var search = document.querySelector('button');

//remove function which will reload the page

button.addEventListener('click', clearPage);

function clearPage () {
    window.location.reload();
};


//casesensitive search and creating elements

search.addEventListener("click", listMovie);

function listMovie () {

    movies.forEach(function(element, index){
        if (element.name.toLowerCase().includes(input.value.toLowerCase()) && input.value.length!=0){
            var show = document.createElement('h3');
            show.innerHTML = element.name;
            document.querySelector('.big-screen').appendChild(show);
            
            var img = document.createElement('img');
            img.setAttribute("src", element.img );
            document.querySelector('.big-screen').appendChild(img);
        }else{
            input.value = "";
          
        }
    });
}







