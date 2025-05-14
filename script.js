document.addEventListener('DOMContentLoaded', () => {
    const profileCards = document.querySelectorAll('.profile-card');
    const profilesContainer = document.querySelector('.profiles-container');
    const profileContentContainer = document.querySelector('.profile-content-container');
    const cursorShadow = document.getElementById('cursor-shadow'); // Get the shadow element

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

    // Cursor shadow logic
    let mouseMoveTimeout;
    document.addEventListener('mousemove', (e) => {
        if (cursorShadow) {
            // Make shadow visible immediately on first move, then rely on opacity transition
            if (cursorShadow.style.opacity === '0' || cursorShadow.style.opacity === '') {
                cursorShadow.style.opacity = '1';
            }
            cursorShadow.style.left = e.clientX + 'px';
            cursorShadow.style.top = e.clientY + 'px';

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