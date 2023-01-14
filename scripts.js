// Select all of the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add a click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        // Prevent the default link behavior
        e.preventDefault();

        // Get the target element to scroll to
        const target = document.querySelector(link.getAttribute('href'));

        // Calculate the distance from the top of the page to the target element
        const distance = target.offsetTop;

        // Scroll to the target element
        window.scrollTo({
            top: distance,
            behavior: 'smooth'
        });
    });
});

// Select all of the elements that should be animated
const animatedElements = document.querySelectorAll('.animated');

// Set up a scroll event listener
window.addEventListener('scroll', e => {
    // Get the current scroll position
    const scrollTop = window.pageYOffset;

    // Loop through the animated elements
    animatedElements.forEach(element => {
        // Get the element's distance from the top of the page
        const elementTop = element.offsetTop;

        // Check if the element is in the viewport
        if (scrollTop > elementTop - window.innerHeight) {
            // If it is, add the "fadeInUp" class to the element
            element.classList.add('fadeInUp');
        }
    });
});


// Select the portfolio section
const portfolio = document.querySelector('#portfolio');

// Select the image container
const imageContainer = portfolio.querySelector('.image-container');

// Select the next and previous buttons
const nextBtn = portfolio.querySelector('.next');
const prevBtn = portfolio.querySelector('.prev');

// Set the initial image index
let currentIndex = 0;

// Set the total number of images
const totalImages = imageContainer.children.length;

// Set up a click event listener for the next button
nextBtn.addEventListener('click', e => {
    // Increment the current index
    currentIndex++;

    // If the current index is greater than the total number of images, reset it to 0
    if (currentIndex > totalImages - 1) {
        currentIndex = 0;
    }

    // Update the image container's margin-left property to show the next image
    imageContainer.style.marginLeft = `-${currentIndex * 100}%`;
});

// Set up a click event listener for the previous button
prevBtn.addEventListener('click', e => {
    // Decrement the current index
    currentIndex--;

    // If the current index is less than 0, set it to the total number of images minus 1
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    // Update the image container's margin-left property to show the previous image
    imageContainer.style.marginLeft = `-${currentIndex * 100}%`;
});

