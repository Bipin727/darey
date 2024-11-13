// Scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = "Top";
scrollTopBtn.style.display = "none";
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
