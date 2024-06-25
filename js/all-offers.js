document.addEventListener('DOMContentLoaded', function () {
    const titles = document.querySelectorAll('.all-offers__title');

    titles.forEach(function (title) {
        title.addEventListener('click', function (event) {
            const clickedTitle = event.currentTarget;
            const description = clickedTitle.nextElementSibling;

           
            description.style.display = description.style.display === 'block' ? 'none' : 'block';

            titles.forEach(function (t) {
                if (t !== clickedTitle) {
                    t.nextElementSibling.style.display = 'none';
                }
            });

            
            if (description.style.display === 'block') {
                const yOffset = -200; 
                const y = clickedTitle.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });
});
