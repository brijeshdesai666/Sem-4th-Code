document.addEventListener('DOMContentLoaded', function () {
    var scrollArrow = document.getElementById('scrollArrow');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            scrollArrow.classList.add('visible'); // Show the arrow when scrolled down
        } else {
            scrollArrow.classList.remove('visible'); // Hide the arrow when at the top
        }
    });
});

// function showProductPreview() {
//     var modal = document.getElementById("productPreview");
//     modal.style.display = "block";
// }

// function closeProductPreview() {
//     var modal = document.getElementById("productPreview");
//     modal.style.display = "none";
// }

function showProductPreview(card) {
    // Get product details from the clicked card
    var productName = card.querySelector('h3').textContent;
    var productImageSrc = card.querySelector('img').src;
    var productDescription = card.querySelector('p').textContent;
    var productPrice = card.querySelector('h2').textContent;

    // Create the HTML for the preview content
    var previewContent = `
      <div class="preview-content">
        <img src="${productImageSrc}" alt="" height="200px">
        <h3>${productName}</h3>
        <p>${productDescription}</p>
        <h2>${productPrice}</h2>
        
        <!-- Add other product details here -->
        <div class="color-selector">
        <label for="color">Select Color:</label>
        <select id="color">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <!-- Add more color options if needed -->
        </select>
      </div>
      <div class="text-center">
          <button class="button buy-now" onclick="buyNow()">Buy Now</button>
         <button class="button add-to-cart" onclick="addToCart()">Add to Cart</button>
      </div>

      </div>
    `;

    // Display the preview content in the modal
    var productPreview = document.getElementById('productPreview');
    var modalContent = productPreview.querySelector('.modal-content');
    modalContent.innerHTML = previewContent;
    productPreview.style.display = 'block';

    var modal = document.getElementById('productPreview');
    var html = document.documentElement;
    var body = document.body;

    modal.style.display = 'block';
    body.classList.add('modal-open');

    // Disable scrolling on the body and html elements
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    modal.style.overflow = 'hidden';
}


function closeProductPreview(event) {
    if (event.target === event.currentTarget) {
        var modal = document.getElementById('productPreview');
        var html = document.documentElement;
        var body = document.body;

        modal.style.display = 'none';
        body.classList.remove('modal-open');

        // Enable scrolling on the body and html elements
        html.style.overflow = '';
        body.style.overflow = '';
    }
}

function buyNow() {
    // Logic for Buy Now button
    alert("Buy Now button clicked!");
}

function addToCart() {
    // Logic for Add to Cart button
    alert("Add to Cart button clicked!");
}