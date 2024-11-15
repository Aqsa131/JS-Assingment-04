// // var images = [
// //     'https://images.pond5.com/slider-shot-along-sandy-beach-footage-108516919_iconl.jpeg',
// //     'https://cdn.prod.website-files.com/6564df34d1b5b455069667bf/6604ab7a7a4a1329432a5b09_slider.webp',
// //     'https://cdn.shortpixel.ai/spai/q_lossy+w_2502+to_webp+ret_img/www.sligo.ie/wp-content/uploads/slider-visit-beach-strandhill-strand.jpg',
// //     'https://dunewellnessgroup.com/tanjore-hi/wp-content/uploads/sites/25/2016/04/slider_turtleecobeach_01.jpg',
// //     'https://images.pond5.com/wide-angle-view-over-beach-footage-115920530_iconl.jpeg'
// // ]

// // currentIndex = 0
// // function next(){
// //     var slide = document.getElementById('img-slider')
// //     if(currentIndex === images.length-1){
// //         currentIndex = 0
// //     }
// //     else{
// //         currentIndex++
// //     }
// //     slide.src = images[currentIndex]
// // }

// // function prev(){
// //     var nextSlide = document.getElementById('img-slider')
// //     if (currentIndex === 0){
// //         currentIndex = images.length-1
// //     }
// //     else{
// //         currentIndex--
// //     }
// //     nextSlide.src = images[currentIndex]
// // }


// var images = [
//     'https://images.pond5.com/slider-shot-along-sandy-beach-footage-108516919_iconl.jpeg',
//     'https://cdn.prod.website-files.com/6564df34d1b5b455069667bf/6604ab7a7a4a1329432a5b09_slider.webp',
//     'https://cdn.shortpixel.ai/spai/q_lossy+w_2502+to_webp+ret_img/www.sligo.ie/wp-content/uploads/slider-visit-beach-strandhill-strand.jpg',
//     'https://dunewellnessgroup.com/tanjore-hi/wp-content/uploads/sites/25/2016/04/slider_turtleecobeach_01.jpg',
//     'https://images.pond5.com/wide-angle-view-over-beach-footage-115920530_iconl.jpeg'
// ]

// var getImages = document.getElementById('img-slider').src
// console.log(getImages);


// currentIndex = 0
// function image1(){
//     // document.getElementById('img1').src
//     console.log(image1);
    
// }


function image1(){
    var changeImage = event.target
    document.getElementById('img-slider').src = changeImage.src
}

