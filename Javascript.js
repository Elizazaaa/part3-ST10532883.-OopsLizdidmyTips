// ==========================
// OopsLizdidmyTips Website
// ==========================

// Display current year in footer
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML = `&copy; ${new Date().getFullYear()} OopsLizdidmyTips`;
    }
});

// Welcome message
window.addEventListener("load", () => {
    alert("Welcome to OopsLizdidmyTips!");
});

// ==========================
// Price Calculator
// ==========================

function calculatePrice() {
    let baseLength = document.getElementById("length");
    let design = document.getElementById("design");

    if (!baseLength || !design) return;

    let total = Number(baseLength.value) + Number(design.value);

    document.getElementById("totalPrice").textContent =
        "Estimated Price: R" + total;
}

// ==========================
// Contact Validation
// ==========================

function validateContactForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// ==========================
// Promotion Popup
// ==========================

function showPromotion() {
    alert(
        "SPECIAL OFFER!\nCustom and Pre-made Press-ons are now available!"
    );
}

// Only show on News page
if (window.location.href.includes("news")) {
    setTimeout(showPromotion, 3000);
}

// ==========================
// Service Hover Effects
// ==========================

document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll("li");

    services.forEach(service => {
        service.addEventListener("mouseover", () => {
            service.style.color = "gold";
            service.style.fontWeight = "bold";
        });

        service.addEventListener("mouseout", () => {
            service.style.color = "";
            service.style.fontWeight = "";
        });
    });
});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});
