document.addEventListener('DOMContentLoaded', () => {
    const profileCards = document.querySelectorAll('.profile-card');
    const profilesContainer = document.querySelector('.profiles-container');
    const profileContentContainer = document.querySelector('.profile-content-container');
    const cursorShadow = document.getElementById('cursor-shadow'); // Get the shadow element
    const manageProfilesBtn = document.querySelector('.manage-profiles-btn');
    const netflixModal = document.getElementById('netflix-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const mainContentWrapper = document.getElementById('main-content-wrapper');
    const body = document.body;


    // Add event listeners to initial profile cards
    profileCards.forEach(card => {
        card.addEventListener('click', () => {
            const profileName = card.getAttribute('data-profile');
            let targetPage = '';

            switch (profileName) {
                case 'About Me':
                    targetPage = 'about.html';
                    break;
                case 'Projects':
                    targetPage = 'projects.html';
                    break;
                case 'Competitions':
                    targetPage = 'competitions.html';
                    break;
                case 'Passions':
                    targetPage = 'passions.html';
                    break;
                default:
                    targetPage = 'index.html'; // Fallback or error page
            }
            window.location.href = targetPage;
        });
    });

    // Function to show the modal
    function showModal() {
        if (netflixModal) {
            netflixModal.classList.remove('hidden');
            netflixModal.classList.add('flex'); // Use flex to center it as per Tailwind setup
        }
        if (mainContentWrapper) {
            // mainContentWrapper.classList.add('blur-sm'); // Using custom CSS class for more control
            body.classList.add('modal-active');
        }
    }

    // Function to hide the modal
    function hideModal() {
        if (netflixModal) {
            netflixModal.classList.add('hidden');
            netflixModal.classList.remove('flex');
        }
        if (mainContentWrapper) {
            // mainContentWrapper.classList.remove('blur-sm');
            body.classList.remove('modal-active');
        }
    }

    if (manageProfilesBtn) {
        manageProfilesBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default button action if it were a submit type
            showModal();
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            hideModal();
        });
    }

    // Close modal if user clicks outside of the modal content (on the overlay)
    if (netflixModal) {
        netflixModal.addEventListener('click', (event) => {
            // Check if the click is on the modal overlay itself, not on its children
            if (event.target === netflixModal) {
                hideModal();
            }
        });
    }

    // Cursor shadow logic - only apply on index.html
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        let mouseMoveTimeout;
        document.addEventListener('mousemove', (e) => {
            if (cursorShadow) {
                // Make shadow visible immediately on first move, then rely on opacity transition
                if (cursorShadow.style.opacity === '0' || cursorShadow.style.opacity === '') {
                    cursorShadow.style.opacity = '1';
                }
                cursorShadow.style.left = e.clientX - 50 + 'px';
                cursorShadow.style.top = e.clientY - 50 + 'px';

                // Optional: Hide shadow if mouse stops moving for a bit
                clearTimeout(mouseMoveTimeout);
                mouseMoveTimeout = setTimeout(() => {
                    if (cursorShadow) {
                        // cursorShadow.style.opacity = '0'; // Uncomment to hide when mouse stops
                    }
                }, 300); // Adjust timeout as needed
            }
        });

        document.addEventListener('mouseleave', () => {
            if (cursorShadow) {
                cursorShadow.style.opacity = '0'; // Hide shadow when mouse leaves the document
            }
        });

        document.addEventListener('mouseenter', () => {
            if (cursorShadow) {
                cursorShadow.style.opacity = '1'; // Show shadow when mouse enters the document
            }
        });
    }
}); 