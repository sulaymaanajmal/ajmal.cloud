const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const aboutImages = document.querySelectorAll('.aboutImages');
aboutImages.forEach((el) => observer.observe(el));