document.addEventListener('DOMContentLoaded', () => {
    const profileCards = document.querySelectorAll('.profile-card');
    const profilesContainer = document.querySelector('.profiles-container');
    const profileContentContainer = document.querySelector('.profile-content-container');

    // Placeholder data for each profile's content
    // You would replace these with actual content or fetch it dynamically
    const profileData = {
        rezwan: {
            name: "Rezwan",
            items: [
                { id: "about", title: "About Me", icon: "👤" }, // Using emojis as placeholders for icons
                { id: "resume", title: "Resume", icon: "📄" },
                { id: "github", title: "GitHub", icon: "💻" }, // You might want a GitHub logo here
                { id: "competitions", title: "Competitions", icon: "🏆" }
            ]
        },
        behrooz: {
            name: "Behrooz",
            items: [
                { id: "projects", title: "Projects", icon: "🛠️" },
                { id: "contact", title: "Contact", icon: "📧" }
            ]
        },
        "r&k": {
            name: "R&K",
            items: [
                { id: "gallery", title: "Gallery", icon: "🖼️" },
                { id: "blog", title: "Blog", icon: "✍️" }
            ]
        },
        nadia: {
            name: "Nadia",
            items: [
                { id: "portfolio", title: "Art Portfolio", icon: "🎨" },
                { id: "shop", title: "Shop", icon: "🛍️" }
            ]
        },
        moe: {
            name: "Moe",
            items: [
                { id: "music", title: "Music", icon: "🎵" },
                { id: "videos", title: "Videos", icon: "🎬" }
            ]
        }
        // Add other profiles data here
    };

    profileCards.forEach(card => {
        card.addEventListener('click', () => {
            const profileId = card.getAttribute('data-profile');
            const selectedProfile = profileData[profileId];

            if (selectedProfile) {
                profilesContainer.style.display = 'none';
                renderProfileContent(selectedProfile);
                profileContentContainer.style.display = 'flex'; // Show the content container
            } else {
                console.error("Profile data not found for:", profileId);
                // Optionally, show a default page or an error message
            }
        });
    });

    function renderProfileContent(profile) {
        profileContentContainer.innerHTML = ''; // Clear previous content

        const header = document.createElement('h2');
        header.textContent = `Browse ${profile.name}`;
        profileContentContainer.appendChild(header);

        const contentGrid = document.createElement('div');
        contentGrid.className = 'content-grid';

        profile.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'content-card';
            card.setAttribute('data-item-id', item.id);

            const icon = document.createElement('div');
            icon.className = 'icon';
            icon.textContent = item.icon; // Placeholder icon

            const title = document.createElement('span');
            title.textContent = item.title;

            card.appendChild(icon);
            card.appendChild(title);
            contentGrid.appendChild(card);

            // Add event listener for content cards if needed
            card.addEventListener('click', () => {
                // Navigate to the specific section or open a modal, etc.
                console.log(`Clicked on ${item.title} for ${profile.name}`);
                // Example: window.location.href = `#${item.id}`;
            });
        });

        profileContentContainer.appendChild(contentGrid);

        // Add a "Back" or "Switch Profile" button
        const backButton = document.createElement('button');
        backButton.textContent = 'Switch Profile';
        backButton.className = 'manage-profiles-btn'; // Re-use button style
        backButton.style.marginTop = '40px';
        backButton.addEventListener('click', () => {
            profileContentContainer.style.display = 'none';
            profilesContainer.style.display = 'flex'; // This should be 'block' or 'flex' based on your CSS for profilesContainer
             // Re-center if it was a flex container for vertical centering.
            if (getComputedStyle(profilesContainer).display === 'flex') {
                 profilesContainer.style.justifyContent = 'center';
                 profilesContainer.style.alignItems = 'center';
                 profilesContainer.style.flexDirection = 'column';
            } else {
                 // If it was block, ensure it takes up screen and centers content
                 profilesContainer.style.textAlign = 'center';
            }
        });
        profileContentContainer.appendChild(backButton);
    }
}); 