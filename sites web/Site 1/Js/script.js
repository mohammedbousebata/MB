document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        // Toggle the "showing" class on the navigation links
        navLinks.classList.toggle('showing');
        // Toggle the "active" class on the nav-toggle button
        navToggle.classList.toggle('active');
    });
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const nav_x = document.querySelector('.nav-x')
    const nav_toggle = document.querySelector('.nav-toggle')
    sidebar.style.display = 'flex';
    nav_x.style.display = 'flex';
    nav_toggle.style.display = 'none';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const nav_x = document.querySelector('.nav-x')
    const nav_toggle = document.querySelector('.nav-toggle')
    sidebar.style.display = 'none';
    nav_x.style.display = 'none';
    nav_toggle.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');

    function handleScroll() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.8) {
            aboutSection.classList.add('animate');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Adjust scroll position for visibility
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Smooth scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const designGrid = document.getElementById('designGrid');

    // Assuming you have a predefined array of image names
    const imageNames = [
        'Design 1.jpeg',
        'Design 2.jpeg',
        'Design 3.jpeg',
        'Design 4.jpeg',
        'Design 5.jpeg',
        'Design 6.jpeg',
        'Design 7.jpeg',
        'Design 8.jpeg',
        'Design 9.jpeg',
        'Design 10.jpeg',
        'Design 11.jpeg',
        'Design 12.jpeg',
        'Design 13.jpeg',
        // Add more image names as needed
    ];

    imageNames.forEach(function(imageName) {
        const designDiv = document.createElement('div');
        designDiv.classList.add('design');

        const img = document.createElement('img');
        img.src = `Design/${imageName}`;
        img.alt = imageName.replace('.jpeg', ''); // Optional: better alt text

        img.classList.add('design-image');

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const buyButton = document.createElement('a');
        buyButton.href = '#';
        buyButton.classList.add('view-details', 'buy');
        buyButton.textContent = 'Buy';

        const basketButton = document.createElement('a');
        basketButton.href = '#';
        basketButton.classList.add('view-details', 'add-to-basket');
        basketButton.textContent = 'Add to basket';

        buttonContainer.appendChild(buyButton);
        buttonContainer.appendChild(basketButton);

        designDiv.appendChild(img);
        designDiv.appendChild(buttonContainer);

        designGrid.appendChild(designDiv);
    });
});
