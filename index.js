const run = document.querySelector('button');
let c, cache;

run.addEventListener('click', function () {
    i = document.querySelector('#input').value;
    if (i != cache)
        alert(i);
    cache = i;
});