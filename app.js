const emailCollectorForm = document.getElementById("email-collector");
const mainContent = document.querySelector(".main-content");

emailCollectorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  let emailCollectorData = new FormData(e.target);
  let userFirstName = emailCollectorData.get("firstName");
  let userEmailAddress = emailCollectorData.get("emailAddress");

  let updateHtmlContent = `
  <h2>Congratulations, ${userFirstName}!</h2>
  <p>You're on your way to becoming a BBQ Master!</p>
  <p class="info">
    We'll never share your information without your permission.
  </p>
  <button id = 'back-btn' type='submit'>back</button>
  `;

  mainContent.innerHTML = updateHtmlContent;

  const backBtn = document.getElementById("back-btn");
  backBtn.addEventListener("click", () => {
    location.reload();
  });
});
