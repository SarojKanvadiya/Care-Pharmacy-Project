// JavaScript code to implement image slider functionality
const slider = document.querySelector('.slider');
const images = slider.getElementsByTagName('img');
let currentIndex = 0;


function showImage(index) {
    // Hide all images
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        // console.log(images.length)
    }
    
    // Show the selected image
    images[index].style.display = 'block';
}

// Initial display of the first image
showImage(currentIndex);

// Interval to automatically move to the next image every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000);


const prev = document.getElementById('leftBtn')
const next = document.getElementById('rightBtn')
const list = document.getElementById('item-list')

const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})



// console.log(cards.length)


