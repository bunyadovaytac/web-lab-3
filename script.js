// Skill əlavə et
function addSkill() {
    const skillInput = document.getElementById("new-skill");
    const skillValue = skillInput.value.trim();
    if (skillValue !== "") {
      const li = document.createElement("li");
      li.textContent = skillValue;
      document.getElementById("skills-list").appendChild(li);
      skillInput.value = "";
    }
  }
  
  // Education əlavə et
  function addEducation() {
    const eduInput = document.getElementById("new-edu");
    const eduValue = eduInput.value.trim();
    if (eduValue !== "") {
      const li = document.createElement("li");
      li.textContent = eduValue;
      document.getElementById("education-list").appendChild(li);
      eduInput.value = "";
    }
  }
  
  // Work təcrübəsi əlavə et
  function addWork() {
    const workInput = document.getElementById("new-work");
    const workValue = workInput.value.trim();
    if (workValue !== "") {
      const li = document.createElement("li");
      li.textContent = workValue;
      document.getElementById("work-list").appendChild(li);
      workInput.value = "";
    }
  }
  
