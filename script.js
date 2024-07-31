document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleAnnouncement");
  const announcementBar = document.getElementById("announcementBar");
  const expandButton = document.getElementById("expandAnnouncement");
  const backToTopButton = document.getElementById("backToTop");
  const diskProgress = document.getElementById("diskProgress");
  const diskUsageText = document.getElementById("diskUsageText");

  // Update disk usage percentage
  function updateDiskUsage() {
    const used = diskProgress.value;
    const max = diskProgress.max;
    const percent = (used / max) * 100;
    diskUsageText.textContent = percent.toFixed(1) + "%";
  }
  updateDiskUsage();

  // Toggle announcement bar
  toggleButton.addEventListener("click", function() {
    announcementBar.classList.toggle("collapsed");
    expandButton.classList.toggle("show");
  });

  expandButton.addEventListener("click", function() {
    announcementBar.classList.remove("collapsed");
    expandButton.classList.remove("show");
  });

  // Back to top button functionality
  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      backToTopButton.classList.add("show");
    }
    else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click",
    function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  // Navigation buttons functionality
  const navButtons = document.querySelectorAll(".nav-button");
  navButtons.forEach(button => {
    button.addEventListener("click", function() {
      const targetId = this.getAttribute("data-target");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});