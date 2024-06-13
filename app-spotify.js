
document.addEventListener('DOMContentLoaded', () => {
    let caseBtn = document.getElementById('github-btn');
    function projectRedirect() {
        window.location.href = 'https://github.com/shivam-khode01/Spotify-clone-webdev';
    }
    if (caseBtn) {
        caseBtn.addEventListener('click', projectRedirect);
    }
  });




// Wait for the DOM to fully load before executing
document.addEventListener('DOMContentLoaded', () => {

    // Function to redirect to the GitHub project page
    let caseBtn = document.getElementById('github-btn');
    function projectRedirect() {
        window.location.href = 'https://github.com/shivam-khode01/Spotify-clone-webdev';
    }
    if (caseBtn) {
        caseBtn.addEventListener('click', projectRedirect);
    }

    // Function to toggle the sidebar visibility

  // Function to toggle the sidebar visibility
  function showsidebar() {
    const sidebar = document.querySelector('#sidebar');
    if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'flex';
    }
}

// Function to hide the sidebar
function hidesidebar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'none';
}
document.querySelector('.nav-item-bar5').addEventListener('click', hidesidebar);


    // Function to handle navigation and redirection
    function handleNavClick(targetSection) {
        // Store the target section in localStorage
        localStorage.setItem('scrollToSection', targetSection);
        // Redirect to index.html
        window.location.href = 'index.html';
    }

    // Function to navigate to specific section on the current page
    function navigateTo(sectionId) {
        // Get the target section based on the provided ID
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            // Scroll smoothly to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Check if there is a target section to scroll to on page load
    window.onload = function () {
        // Get the stored target section
        const sectionId = localStorage.getItem('scrollToSection');
        if (sectionId) {
            // Scroll to the target section
            navigateTo(sectionId);
            // Clear the stored value
            localStorage.removeItem('scrollToSection');
        }
    }

    // Add event listeners to the navigation buttons for redirection
    document.querySelector('.nav-item1').addEventListener('click', function () {
        handleNavClick('middle');
    });

    document.querySelector('.nav-item-bar1').addEventListener('click', function () {
        handleNavClick('middle');
    });

    document.querySelector('.nav-item2').addEventListener('click', function () {
        handleNavClick('contact-section');
    });

    document.querySelector('.nav-item-bar2').addEventListener('click', function () {
        handleNavClick('contact-section');
    });

    // Add event listeners for sidebar show/hide buttons
    document.querySelector('.nav-item5').addEventListener('click', showsidebar);

    // Optionally handle clicks outside the sidebar to close it
    document.addEventListener('click', function (event) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar.style.visibility === 'visible' && !sidebar.contains(event.target) && !event.target.closest('.nav-item5')) {
            hidesidebar();
        }
    });
});








// Function to handle navigation and redirection
function handleNavClick(targetSection) {
    // Store the target section in localStorage
    localStorage.setItem('scrollToSection', targetSection);
    // Redirect to index.html
    window.location.href = 'index.html';
}

// Function to navigate to specific section on the current page
function navigateTo(sectionId) {
    // Get the target section based on the provided ID
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Check if there is a target section to scroll to on page load
window.onload = function() {
    // Get the stored target section
    const sectionId = localStorage.getItem('scrollToSection');
    if (sectionId) {
        // Scroll to the target section
        navigateTo(sectionId);
        // Clear the stored value
        localStorage.removeItem('scrollToSection');
    }
}

// Add event listeners to the navigation buttons for redirection
document.querySelector('.nav-item1').addEventListener('click', function() {
    handleNavClick('.middle');
});

document.querySelector('.nav-item-bar1').addEventListener('click', function() {
    handleNavClick('.middle');
});

document.querySelector('.nav-item2').addEventListener('click', function() {
    handleNavClick('.aboutme');
});

document.querySelector('.nav-item-bar2').addEventListener('click', function() {
    handleNavClick('.aboutme');
});

document.querySelector('.nav-item-bar3').addEventListener('click', function() {
    handleNavClick('.project-section');
});

document.querySelector('.nav-item3').addEventListener('click', function() {
    handleNavClick('.project-section');
});

document.querySelector('.nav-item-bar4').addEventListener('click', function() {
    handleNavClick('.contact-section');
});
document.querySelector('.nav-item4').addEventListener('click', function() {
    handleNavClick('.contact-section');
});
// Add event listeners for sidebar show/hide buttons
document.querySelector('.nav-item5').addEventListener('click', showsidebar);
document.querySelector('.nav-item-bar5').addEventListener('click', hidesidebar);

// Optionally handle clicks outside the sidebar to close it
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.visibility === 'visible' && !sidebar.contains(event.target)) {
        hidesidebar();
    }
});
