//document.getElementById('ratingOptions').classList.add('hidden');
function Hide1(){
    var rateButton = document.getElementsByClassName('rateButton')[0];
    var ratingOptions = document.getElementsByClassName('ratingOptions')[0];
    console.log(rateButton);
    console.log(ratingOptions);
    rateButton.classList.add('hidden');
    ratingOptions.classList.remove('hidden');
}
function Hide2(){
    var rateButton = document.getElementsByClassName('rateButton')[1];
    var ratingOptions = document.getElementsByClassName('ratingOptions')[1];
    console.log(rateButton);
    console.log(ratingOptions);
    rateButton.classList.add('hidden');
    ratingOptions.classList.remove('hidden');
}

const publish = document.querySelectorAll('.publishButton');

publish.forEach(publish => {
    publish.addEventListener('click', function () {
        var ratingOptions = document.getElementById('ratingOptions');
        ratingOptions.classList.add('hidden');
        alert("Publishing your ratings!"); // Replace with your publish logic
    });
    
});


