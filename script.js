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

    // Data for Rezwan's profile content
    // Replace placeholder image URLs with actual paths to your 150x150px images
    const profileData = {
        rezwan: {
            name: "Rezwan Sadeqi",
            items: [
                { id: "about", title: "About Me", icon: "👤" },
                { id: "github", title: "GitHub", icon: "💻" },
                { id: "competitions", title: "Competitions", icon: "🏆" },
                { id: "hobbies", title: "Hobbies", icon: "🎮" }
            ]
        },
    };

    // Function to render Rezwan's profile content with avatar cards
    function renderProfileContent(profile) {
        profileContentContainer.innerHTML = ''; // Clear previous content

        const header = document.createElement('h2');
        header.textContent = profile.name;
        profileContentContainer.appendChild(header);

        const contentGrid = document.createElement('div');
        contentGrid.className = 'content-grid';

        profile.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'avatar-card'; // Use the new avatar card style
            card.setAttribute('data-item-id', item.id);

            const img = document.createElement('img');
            img.src = item.iconSrc || "placeholder-avatar.png"; // Image source for the avatar
            img.alt = item.title;

            const title = document.createElement('span');
            title.textContent = item.title;

            card.appendChild(img);
            card.appendChild(title);
            contentGrid.appendChild(card);

            card.addEventListener('click', () => {
                console.log(`Clicked on ${item.title} for ${profile.name}`);
                // Add navigation logic here, e.g.:
                // window.location.href = `#${item.id}`;
                // Or display content in a modal, etc.
            });
        });

        const backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', () => {
            renderProfileContent(profileData.rezwan);
        });
        contentGrid.appendChild(backButton);

        profileContentContainer.appendChild(contentGrid);
    }

    // Directly render Rezwan's content on page load
    renderProfileContent(profileData.rezwan);

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

    // Cursor shadow logic
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
}); 