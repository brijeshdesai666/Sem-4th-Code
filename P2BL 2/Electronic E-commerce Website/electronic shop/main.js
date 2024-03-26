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

// function showProductPreview(card) {
//     // Get product details from the clicked card
//     var productName = card.querySelector('h3').textContent;
//     var productImageSrc = card.querySelector('img').src;
//     var productDescription = card.querySelector('p').textContent;
//     var productPrice = card.querySelector('h2').textContent;

//     // Create the HTML for the preview content
//     var previewContent = `
//       <div class="preview-content">
//         <img src="${productImageSrc}" alt="" height="200px">
//         <h3>${productName}</h3>
//         <p>${productDescription}</p>
//         <h2>${productPrice}</h2>

//         <!-- Add other product details here -->

//       <div class="text-center">
//           <button class="button buy-now" onclick="buyNow()">Buy Now</button>
//          <button class="button add-to-cart" onclick="addToCart()">Add to Cart</button>
//       </div>

//       </div>
//     `;

//     // Display the preview content in the modal
//     var productPreview = document.getElementById('productPreview');
//     var modalContent = productPreview.querySelector('.modal-content');
//     modalContent.innerHTML = previewContent;
//     productPreview.style.display = 'block';

//     var modal = document.getElementById('productPreview');
//     var html = document.documentElement;
//     var body = document.body;

//     modal.style.display = 'block';
//     body.classList.add('modal-open');

//     // Disable scrolling on the body and html elements
//     html.style.overflow = 'hidden';
//     body.style.overflow = 'hidden';

//     modal.style.overflow = 'hidden';
// }







function showProductPreview(card, rating) {
    console.log("START");
    // Get product details from the clicked card
    var productName = card.querySelector('h3').textContent;
    var productImageSrc = card.querySelector('img').src;
    var productDescription = card.querySelector('p').textContent;
    var productPrice = card.querySelector('h2').textContent;

    // Extract the filename and extension from the main image source
    var filenameParts = productImageSrc.split('/');
    var filename = filenameParts[filenameParts.length - 1];
    var extensionIndex = filename.lastIndexOf('.');
    var mainImageFilename = filename.substring(0, extensionIndex);
    var extension = filename.substring(extensionIndex);

    // Generate URLs for the additional product images
    var additionalImages = [];
    for (var i = 2; i <= 4; i++) {
        var additionalImageUrl = productImageSrc.replace(mainImageFilename, mainImageFilename.slice(0, -1) + i);
        additionalImages.push(additionalImageUrl);
    }

    // Create the HTML for the preview content
    var previewContent = `
      <div class="preview-content">
      <div class="additional-images">
        <img src="${productImageSrc}" alt="" >
          ${additionalImages.map(imageUrl => `<img src="${imageUrl}" alt="" >`).join('')}
        </div>
        <h3>${productName}</h3>
        <p>${productDescription}</p>
        <div class="star text-center js-star">
            ${getStarIcons(rating)} <!-- Use getStarIcons function to generate star icons -->
        </div>
        <h2>${productPrice}</h2>
        
        <div class="color-selector">
         <label for="color">Select Color:</label>
         <select id="color" onchange="changeSelectorBackgroundColor(this.value)">
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <!-- Add more color options if needed -->
            </select>
        </div>

        <!-- Add other product details here -->

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

    function getStarIcons(rating) {
        var starIcons = '';
        for (var i = 0; i < rating; i++) {
            starIcons += '<i class="fa-solid fa-star checked"></i>';
        }
        return `${starIcons} <span class="rating"> (${rating} star)</span> `;
    }

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
    alert("Product purchased");
}

function addToCart() {
    // Logic for Add to Cart button
    alert("Product is Sucessfully add to Cart");
}

function changeSelectorBackgroundColor(color) {
    var selectElement = document.getElementById('color');
    selectElement.style.backgroundColor = color;
}


function validateForm() {
    console.log("ksabfksa")
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;



    var nameRegex = /^[a-zA-Z ]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^[0-9]{10}$/;

    var isValid = true;

    if (!name.match(nameRegex)) {
        alert("Please enter a valid name (only characters allowed).");
        document.getElementById("name").focus(); // Set focus on the name field
        isValid = false;
    }

    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        document.getElementById("email").focus(); // Set focus on the email field
        isValid = false;
    }

    if (!phone.match(phoneRegex)) {
        alert("Please enter a valid 10-digit phone number.");
        document.getElementById("phone").focus(); // Set focus on the phone field
        isValid = false;
    }

    if (!isValid) {
        return; // If any validation fails, exit the function without clearing other fields
    }
    if (isValid) {
        // Clear input fields if all validations pass
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    }
    // Additional validation or form submission code can be added here
    // For example, submitting the form data via AJAX
}

