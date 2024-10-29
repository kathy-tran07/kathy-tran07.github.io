/* Home Page Scroll */
window.addEventListener('scroll', () => {
    const scrollText = document.querySelector('.scroll');
    
    if (window.scrollY > 400) {
        scrollText.style.opacity = '0';
    } else if (window.scrollY > 300) {
        scrollText.style.opacity = '0.25';
    } else if (window.scrollY > 200) {
        scrollText.style.opacity = '0.5';
    } else if (window.scrollY > 200) {
        scrollText.style.opacity = '0.75';
    } else {
        scrollText.style.opacity = '1';
    }
});

/* Experience Descriptions */
function changeExperience(button) {
    if (button === "Education") {
        const lines = ["Georgia Institute of Technology", "Bachelors' of Science in Computer Science",
             "Expected Graduation: May 2026", "Concentration in Information-Internetwork and Media",
             "Minors: Computation & Cognition and Film & Media Studies"];
        document.getElementById("description").innerHTML = lines.join("<br>");
    } else if (button === "Work") {
        const lines = ["Undergrad Teaching Assistant for Data Structures and Algorithms (May 2023 - Present)",
            "Student Assistant for the Ivan Allen College Dean's Administration (October 2022 - May 2023)"];
        document.getElementById("description").innerHTML = lines.join("<br>");
    } else if (button === "Research") {
        const lines = ["Georgia Tech's Vertically Integrated Project: AI and Art (August 2024 - Present)"];
        document.getElementById("description").innerHTML = lines.join("<br>");
    } else if (button === "Volunteer") {
        const lines = ["Georgia Tech Vietnamese Student Association: Lion Dance Director (August 2023 - May 2024)",
            "VGDev: Technical Artist (August 2024 - Present)"];
        document.getElementById("description").innerHTML = lines.join("<br>");
    }
}

const btnList = document.querySelectorAll('.exp_button');

btnList[0].classList.add('pushed_button');

btnList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.pushed_button')?.classList.remove('pushed_button');
        btnEl.classList.add('pushed_button');
    }) 
})
