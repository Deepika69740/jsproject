
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-item img');
        images.forEach(image => {
        image.addEventListener('click', () => {
            const mainBody = document.getElementById('mainbody');
            if (mainBody) {
                mainBody.innerHTML = ''; 
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const explore = document.querySelectorAll('#explore');
        explore.forEach(e => {
        e.addEventListener('click', () => {
            const mainBody = document.getElementById('mainbody');
            if (mainBody) {
                mainBody.innerHTML = ''; 
                
            }
        });
    });
});


