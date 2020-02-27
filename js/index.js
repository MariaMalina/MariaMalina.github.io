const backgroundImages = [
    '../images/project-page-1.jpg',
    '../images/project-page-1.jpg',
    '../images/project-page-1.jpg',
    '../images/project-page-1.jpg',
    '../images/project-page-1.jpg',
    '../images/project-page-1.jpg',
    '../images/project-page-1.jpg',
    '../images/project-page-1.jpg',
    '../images/project-page-1.jpg',
    '../images/project-page-1.jpg',
]

window.addEventListener("scroll", function() {showFunction()});

function showFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("portfolio-description").style.display = "block";
    } else {
        document.getElementById("portfolio-description").style.display = "none";
    }
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("aboutMe-leftPanel").style.display = "block";
        document.getElementById("aboutMe-rightPanel").style.display = "block";
        
    } else {
        document.getElementById("aboutMe-leftPanel").style.display = "none";
        document.getElementById("aboutMe-rightPanel").style.display = "none";
        
    }
}

// let parIndex = 0;

// window.setInterval(() => {
//     const headline = document.getElementById('headline');
//     if (parIndex % 2 === 0) {
//         headline.innerText = "Hi! I'm Maria";
//     } else {
//         headline.innerText = 'Nice to meet you!';
//     }
//     parIndex ++;
// }, 8000);

let imageIndex = 0;
checkIndex();
showImage();

function setImageIndex(value) {
    imageIndex = value;
}

function nextImage() {
    imageIndex++;
    checkIndex();
    changeImageRight();
}

function prevImage() {
    imageIndex--;
    checkIndex()
    changeImageLeft();
}

function showImage() {
    const selectedImage = document.getElementById('selectedImg');
    if (selectedImage) {
        selectedImage.src = backgroundImages[imageIndex];
    }
}

function changeImageRight() {
    const selectedImage = document.getElementById('selectedImg');
    if (selectedImage) {
        selectedImage.classList.add('slide-right');
    } else {
        return;
    }
    
    setTimeout(function () {
        selectedImage.classList.remove('slide-right');
        selectedImage.src = backgroundImages[imageIndex];
        selectedImage.classList.add('slide-from-left');
    }, 990);

    setTimeout(function () {
        selectedImage.classList.remove('slide-from-left');
    }, 1980);
}

function changeImageLeft() {
    const selectedImage = document.getElementById('selectedImg');
    selectedImage.classList.add('slide-left');
    
    setTimeout(function () {
        selectedImage.classList.remove('slide-left');
        selectedImage.src = backgroundImages[imageIndex];
        selectedImage.classList.add('slide-from-right');
    }, 990);

    setTimeout(function () {
        selectedImage.classList.remove('slide-from-right');
    }, 1980);
}

function checkIndex() {
    if (imageIndex === 0) {
        if (document.getElementById('left')) {
            document.getElementById('left').style.display = "none";
        }
    } else {
        if (document.getElementById('left')) {
            document.getElementById('left').style.display = 'block';
        }
    }

    if (imageIndex === 9) {
        if (document.getElementById('right')) {
            document.getElementById('right').style.display = 'none';
        }
    } else {
        if (document.getElementById('right')) {
            document.getElementById('right').style.display = 'block';
        }
    }
}

let frontImages = 0;

function nextSlide() {
    frontImages++;
    if (frontImages < 8) {
        slideRight();
    } else {
        frontImages = 7;
    }
}

function prevSlide() {
    if (frontImages >= 1) {
        slideLeft();
    } else {
        frontImages = 1;
    }
    frontImages--;
}

function slideRight() {
    const images = document.getElementsByClassName('photo-wrapper');
    const classNameAdd = 'images-slide-right-' + frontImages;

    for (let i = 0; i < images.length; i++) {
        images[i].classList.add(classNameAdd);
    }
    
    for (let i = 0; i < images.length; i++) {
        images[i].classList.value = 'photo-wrapper ' + classNameAdd;
    }
}

function slideLeft() {
    const images = document.getElementsByClassName('photo-wrapper');
    const classNameAdd = 'images-slide-left-' + frontImages;

    for (let i = 0; i < images.length; i++) {
        images[i].classList.add(classNameAdd);
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.value = 'photo-wrapper ' + classNameAdd;
    }
}