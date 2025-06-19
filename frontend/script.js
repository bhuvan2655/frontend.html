document.addEventListener('DOMContentLoaded', () => {
    // --- Loader Functionality (from loader.mp4) ---
    const loaderWrapper = document.getElementById('loader-wrapper');
    window.addEventListener('load', () => {
        loaderWrapper.style.opacity = '0';
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 500); // Hide after fade out
    });

    // --- Dark/Light Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.classList.add(currentTheme);

    const toggleTheme = () => {
        if (htmlElement.classList.contains('light')) {
            htmlElement.classList.remove('light');
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    };

    themeToggle.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);


    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- Features Section Tabs (from features-services.mp4) ---
    const featureTabs = document.querySelectorAll('.feature-tab');
    const featurePanels = document.querySelectorAll('.feature-panel');

    featureTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active state from all tabs and hide all panels
            featureTabs.forEach(t => {
                t.classList.remove('bg-blue-500', 'text-white');
                t.classList.add('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-200', 'dark:hover:bg-gray-700');
            });
            featurePanels.forEach(panel => panel.classList.add('hidden'));

            // Add active state to clicked tab and show corresponding panel
            tab.classList.add('bg-blue-500', 'text-white');
            tab.classList.remove('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-200', 'dark:hover:bg-gray-700');
            document.getElementById(tab.dataset.tab).classList.remove('hidden');
        });
    });

    // --- Showcase Carousel (from showcase work.mp4) ---
    const showcaseCarousel = document.getElementById('showcase-carousel');
    const carouselInner = showcaseCarousel.querySelector('.carousel-inner');
    const carouselItems = showcaseCarousel.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    let currentIndex = 0;

    const updateCarousel = () => {
        carouselItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    });

    updateCarousel(); // Initial display


    // --- Video Pop-up Modal (from scroll and pop up.mp4) ---
    const playReelButton = document.getElementById('play-reel-button');
    const videoModal = document.getElementById('video-modal');
    const closeModal = document.getElementById('close-modal');
    const reelVideo = document.getElementById('reel-video');

    playReelButton.addEventListener('click', () => {
        videoModal.classList.remove('hidden');
        // Set your desired video URL here (e.g., YouTube embed link)
        // For this example, I'm using a placeholder. Replace with your actual video.
        reelVideo.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'; // Rick Astley for example
    });

    closeModal.addEventListener('click', () => {
        videoModal.classList.add('hidden');
        reelVideo.src = ''; // Stop video playback
    });

    // Close modal if clicking outside the video
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.add('hidden');
            reelVideo.src = 'https://youtube.com/shorts/zaBDyEfhrnk?si=bEYly88OuBpkWoGi';
        }
    });

    // --- Testimonials Carousel (from testimonials.mp4) ---
    const testimonialsCarousel = document.getElementById('testimonials-carousel');
    const testimonialTrack = testimonialsCarousel.querySelector('.carousel-track');
    const testimonialSlides = testimonialsCarousel.querySelectorAll('.carousel-slide');
    const testimonialPrev = document.getElementById('testimonial-prev');
    const testimonialNext = document.getElementById('testimonial-next');

    let testimonialIndex = 0;
    // const slidesPerView = window.innerWidth >= 768 ? 2 : 1; // Removed as it complicates simple translation without full recalculation

    const updateTestimonialsCarousel = () => {
        const slideWidth = testimonialSlides[0].offsetWidth; // Assuming all slides have same width
        testimonialTrack.style.transform = `translateX(-${testimonialIndex * slideWidth}px)`;
    };

    testimonialPrev.addEventListener('click', () => {
        testimonialIndex = (testimonialIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
        updateTestimonialsCarousel();
    });

    testimonialNext.addEventListener('click', () => {
        testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
        updateTestimonialsCarousel();
    });

    // Handle responsiveness for testimonial carousel on resize
    window.addEventListener('resize', () => {
        updateTestimonialsCarousel(); // Recalculate and update position
    });

    updateTestimonialsCarousel(); // Initial load


    // --- Customer Logos Animation (from customer-section.mp4) ---
    const customerLogos = document.querySelectorAll('.customer-logo');
    let currentLogoIndex = 0;

    const animateLogos = () => {
        // Reset opacity for all logos
        customerLogos.forEach(logo => logo.style.opacity = '0');

        // Make current logo visible
        customerLogos[currentLogoIndex].style.opacity = '1';

        currentLogoIndex = (currentLogoIndex + 1) % customerLogos.length;
    };

    // Animate every 2 seconds
    setInterval(animateLogos, 2000);
    animateLogos(); // Show first logo immediately

    // --- Product Item Hover for "ADD TO BAG" (from caraousel switch.mp4) ---
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const addButton = item.querySelector('.add-to-bag-btn');
        item.addEventListener('mouseenter', () => {
            addButton.classList.remove('hidden');
        });
        item.addEventListener('mouseleave', () => {
            addButton.classList.add('hidden');
        });
    });

    // --- Brand Kits Checkbox Functionality (from cards.png) ---
    const brandCheckboxes = document.querySelectorAll('#brand-kits input[type="checkbox"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const card = checkbox.closest('.bg-gray-800'); // Assuming the card is the parent with this class
            if (checkbox.checked) {
                card.classList.add('border-purple-600');
            } else {
                card.classList.remove('border-purple-600');
            }
        });
    });

    // --- Ripple Effect on Buttons (simplified from ripple effect.mp4) ---
    // Applies to all elements with class 'ripple-button'
    document.querySelectorAll('.ripple-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const circle = document.createElement('span');
            const diameter = Math.max(this.clientWidth, this.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - (this.offsetLeft + radius)}px`;
            circle.style.top = `${e.clientY - (this.offsetTop + radius)}px`;
            circle.classList.add('ripple');

            const ripple = this.getElementsByClassName('ripple')[0];

            if (ripple) {
                ripple.remove();
            }

            this.appendChild(circle);
        });
    });

});