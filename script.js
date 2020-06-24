// request to get data from the API
let request = new XMLHttpRequest();
request.open('GET', 'https://swapi.dev/api/films/');
request.send();
request.onload = function () {
    let allTitles = [];
    if (request.status == 200) {
        let data = JSON.parse(request.responseText)
        let titleOne = data.results[0].title;
        let titleTwo = data.results[1].title;
        let titleThree = data.results[2].title;
        let titleFour = data.results[3].title;
        let titleFive = data.results[4].title;
        let titleSix = data.results[5].title;

        let movieOne = document.getElementById('textOne');
        movieOne.innerHTML = (titleOne);

        let movieTwo = document.getElementById('textTwo');
        movieTwo.innerHTML = (titleTwo);

        let movieThree = document.getElementById('textThree');
        movieThree.innerHTML = (titleThree);

        let movieFour = document.getElementById('textFour');
        movieFour.innerHTML = (titleFour);

        let movieFive = document.getElementById('textFive');
        movieFive.innerHTML = (titleFive);

        let movieSix = document.getElementById('textSix');
        movieSix.innerHTML = (titleSix);
        
    } else {
        console.log('error')
    }
}

// saving selections to local storage
jQuery(function () {
    if (localStorage.input) {
        var hearts = JSON.parse(localStorage.input);
        jQuery(':checkbox').prop('checked', function (i) {
            return hearts[i];
        });
    }
});

jQuery(':checkbox').on('change', function () {
    localStorage.input = JSON.stringify(jQuery(':checkbox').map(function () {
        return this.checked;
    }).get());
});
