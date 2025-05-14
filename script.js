document.addEventListener('DOMContentLoaded', () => {
    const profileContentContainer = document.querySelector('.profile-content-container');

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
        behrooz: {
            name: "Behrooz",
            items: [
                { id: "about", title: "About Me", iconSrc: "placeholder-avatar-about.png" }, 
                { id: "resume", title: "Resume", iconSrc: "placeholder-avatar-resume.png" },
                { id: "github", title: "GitHub", iconSrc: "images/github.png" }, 
                { id: "competitions", title: "Competitions", iconSrc: "placeholder-avatar-competitions.png" }
            ]
        }
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

        profileContentContainer.appendChild(contentGrid);
    }

    // Directly render Rezwan's content on page load
    renderProfileContent(profileData.rezwan);
}); 