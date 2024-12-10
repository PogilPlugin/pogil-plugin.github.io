function showContent(sectionId) {
  // Select all sections inside the content area
  const sections = document.querySelectorAll(".content section");

  // Loop through and hide all sections
  sections.forEach((section) => section.classList.add("hidden"));

  // Display the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove("hidden");
  } else {
    console.error(`Section with id "${sectionId}" not found.`);
  }
}
