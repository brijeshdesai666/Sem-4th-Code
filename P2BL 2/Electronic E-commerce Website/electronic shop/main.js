document.addEventListener('DOMContentLoaded', function() {
    var scrollArrow = document.getElementById('scrollArrow');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            scrollArrow.classList.add('visible'); // Show the arrow when scrolled down
        } else {
            scrollArrow.classList.remove('visible'); // Hide the arrow when at the top
        }
    });
});

function showProductPreview() {
    var modal = document.getElementById("productPreview");
    modal.style.display = "block";
}

function closeProductPreview() {
    var modal = document.getElementById("productPreview");
    modal.style.display = "none";
}

