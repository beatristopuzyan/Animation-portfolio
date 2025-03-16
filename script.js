document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");
    const options = {
        threshold: 0.5
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, options);
    projects.forEach(project => {
        observer.observe(project);
    });

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your message!");
        this.reset();
    });
});
