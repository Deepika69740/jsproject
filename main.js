document.addEventListener('DOMContentLoaded', () => {
    const exploreButtons = document.querySelectorAll('#explore');
    exploreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            document.body.innerHTML = '';
            const newContent = document.createElement('div');
            newContent.innerHTML = `
                <h1>New Content After Explore</h1>
                <p>This is the new page content after clicking explore.</p>
            `;
            document.body.appendChild(newContent);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelectorAll('#container');
    container.forEach(button => {
        button.addEventListener('click', (event) => {
            document.body.innerHTML = '';
            const newContent = document.createElement('div');
            newContent.innerHTML = `
                <h1>New Content After Explore</h1>
                <p>This is the new page content after clicking explore.</p>
            `;
            document.body.appendChild(newContent);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const logoutLink = document.querySelector('.nav-item');
    
    if (logoutLink) {
        logoutLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            window.location.href = 'navbar.html'; 
        });
    }
});