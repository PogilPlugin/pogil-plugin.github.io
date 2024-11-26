function showContent(sectionId) {
    // Seçilen section'u al
    const selectedSection = document.getElementById(sectionId);
    
    // Tüm section'ları gizle
    const sections = document.querySelectorAll("main .content section");
    sections.forEach((section) => {
      if (section !== selectedSection) {
        section.classList.add("hidden");
      }
    });
  
    // Seçilen section'u göster/kapat
    if (selectedSection.classList.contains("hidden")) {
      selectedSection.classList.remove("hidden");
      document.getElementById("welcome").classList.add("hidden");
    } else {
      selectedSection.classList.add("hidden");
      document.getElementById("welcome").classList.remove("hidden");
    }
  }
  