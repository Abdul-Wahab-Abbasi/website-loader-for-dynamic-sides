// Function to show the loading bar
function showLoadingBar() {
    document.getElementById('loading-bar').style.width = '100%';
}

// Function to hide the loading bar
function hideLoadingBar() {
    document.getElementById('loading-bar').style.width = '0';
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    hideLoadingBar(); // Hide the loading bar once the DOM content is loaded
});

// Event listener for page unload (before leaving the page)
window.addEventListener('beforeunload', function () {
    showLoadingBar(); // Show the loading bar when leaving the page
});

// HTML:
// you can customize this according to your needs but keep the 'id' same!

{/* <div id="loading-bar"></div> */}



// CSS:

// you can customize this according to your needs!
// #loading-bar {
//     height: 8px; /* Increased height for better visibility */
//     background: linear-gradient(45deg,#3D64EE, #00000032, #3D64EE);
//     background-size: 400% 400%;
//     animation: gradient 3s linear infinite;
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 9999;
//     transition: width 0.5s;
//   }
  
//   @keyframes gradient {
//     0% {
//         background-position: 0% 50%;
//     }
//     100% {
//         background-position: 100% 50%;
//     }
//   }