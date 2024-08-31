var columns = document.getElementsByClassName('grid-medium-half');

// function isOdd(num) {
//     return (num % 2) == 1;
// }

for (i = 0; i < columns.length; i++) {
    if ((i % 2) == 1) {
        columns[i].classList.add('reverse');
    }
}