// Randomize carousel-items
var ul = document.querySelector('.carousel-inner');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
ul.children[0].setAttribute('class', 'carousel-item active')