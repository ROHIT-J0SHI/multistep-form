const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const submit = document.getElementById("submit");

const progressEl = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Function to update progress bar
function updateProgress() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    progressEl.style.width = `${(currentActive - 1) / (circles.length - 1) * 100}%`;
}

// Validation function
function validateStep1() {
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.getElementById("gender").value.trim();

    if (name === "" || dob === "" || gender === "") {
        alert("Please fill all fields in Step 1.");
        return false;
    }
    return true;
}

function validateStep2() {
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }
    if (address === "") {
        alert("Address cannot be empty.");
        return false;
    }
    return true;
}

// Move to Step 2 (if valid)
next1.addEventListener("click", () => {
    if (validateStep1()) {
        form1.style.left = "-450px";
        form2.style.left = "25px";
        currentActive = 2;
        updateProgress();
    }
});

// Move to Step 3 (if valid)
next2.addEventListener("click", () => {
    if (validateStep2()) {
        // Fetch user input values
        document.getElementById("summary-name").textContent = document.getElementById("name").value;
        document.getElementById("summary-dob").textContent = document.getElementById("dob").value;
        document.getElementById("summary-gender").textContent = document.getElementById("gender").value;
        document.getElementById("summary-email").textContent = document.getElementById("email").value;
        document.getElementById("summary-phone").textContent = document.getElementById("phone").value;
        document.getElementById("summary-address").textContent = document.getElementById("address").value;

        form2.style.left = "-450px";
        form3.style.left = "25px";
        currentActive = 3;
        updateProgress();
    }
});

// Go back to Step 1
back1.addEventListener("click", () => {
    form2.style.left = "450px";
    form1.style.left = "25px";
    currentActive = 1;
    updateProgress();
});

// Go back to Step 2
back2.addEventListener("click", () => {
    form3.style.left = "450px";
    form2.style.left = "25px";
    currentActive = 2;
    updateProgress();
});

// Submit button (for demonstration, just log data)
submit.addEventListener("click", () => {
    alert("Form submitted successfully!");
});
