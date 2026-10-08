// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    /* ===================================================
       Feature 1: Theme Switcher (Light / Dark Mode)
       =================================================== */
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            themeToggleBtn.textContent = "Switch to Light Theme";
        } else {
            themeToggleBtn.textContent = "Switch to Dark Theme";
        }
    });

    /* ===================================================
       Feature 2: Expandable Project Details
       =================================================== */
    const expandButtons = document.querySelectorAll(".expand-btn");

    expandButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;
            details.classList.toggle("hidden");

            if (details.classList.contains("hidden")) {
                button.textContent = "View Details";
            } else {
                button.textContent = "Hide Details";
            }
        });
    });

    /* ===================================================
       Feature 3: Study Hours Calculator
       =================================================== */
    const calcBtn = document.getElementById("calc-btn");
    const calcOutput = document.getElementById("calc-result");

    calcBtn.addEventListener("click", () => {
        const hours = parseFloat(document.getElementById("hours-per-day").value);
        const days = parseInt(document.getElementById("days-per-week").value, 10);

        if (isNaN(hours) || isNaN(days) || hours <= 0 || days < 1 || days > 7) {
            calcOutput.style.color = "#e11d48";
            calcOutput.textContent = "Please enter valid numbers (Hours > 0, Days between 1 and 7).";
            return;
        }

        const totalHours = hours * days;
        calcOutput.style.color = "#16a34a";
        calcOutput.textContent = `Target Study Time: ${totalHours} total hours per week.`;
    });

    /* ===================================================
       Feature 4: Compulsory Contact Form Validation & Summary
       =================================================== */
    const contactForm = document.getElementById("contact-form");
    const summaryCard = document.getElementById("form-summary");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Stop page reload

        // Reset previous error messages
        document.getElementById("name-error").textContent = "";
        document.getElementById("email-error").textContent = "";
        document.getElementById("message-error").textContent = "";
        summaryCard.classList.add("hidden");

        // Fetch form values
        const nameInput = document.getElementById("user-name").value.trim();
        const emailInput = document.getElementById("user-email").value.trim();
        const messageInput = document.getElementById("user-message").value.trim();

        let isValid = true;

        // Name Validation
        if (nameInput === "") {
            document.getElementById("name-error").textContent = "Name cannot be blank or whitespace only.";
            isValid = false;
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailEmail => emailInput) || emailInput === "") {
            document.getElementById("email-error").textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Message Validation
        if (messageInput === "") {
            document.getElementById("message-error").textContent = "Message field cannot be left empty.";
            isValid = false;
        }

        // If form is valid, show local summary
        if (isValid) {
            summaryCard.classList.remove("hidden");
            summaryCard.textContent = `Data was validated locally! Thank you, ${nameInput}. Your demonstration input was processed successfully (No message was sent).`;
            contactForm.reset();
        }
    });
});