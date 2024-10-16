// Header
function Header() {
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="logo">
          <a onclick="switchToHomePage()" href="#">
        <img
            src="assets/logo.png"
            alt="logo" />
          </a>
        </div>
  `;
    return header;
}
document.body.prepend(Header());
