function toggleDiv1() {
    const div1 = document.getElementById("div1");
    div1.classList.toggle("hidden");
  }
  
  const button2 = document.getElementById("button2");
  const div2 = document.getElementById("div2");
  
  button2.addEventListener("click", () => {
    div2.classList.toggle("hidden");
  });
