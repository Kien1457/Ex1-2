// sidebar
function Sidebar() {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.innerHTML = `
          <nav>
          <ul>
            <li>
              <a onclick="switchToHomePage()" href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a onclick="switchToCartPage()" href="#" > Cart
                <img style="  display: inline-block; vertical-align: middle;"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjE5ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTY2NCAxNDA4Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02NDAgMTI4MHEwIDUyLTM4IDkwdC05MCAzOHQtOTAtMzh0LTM4LTkwdDM4LTkwdDkwLTM4dDkwIDM4dDM4IDkwbTg5NiAwcTAgNTItMzggOTB0LTkwIDM4dC05MC0zOHQtMzgtOTB0MzgtOTB0OTAtMzh0OTAgMzh0MzggOTBtMTI4LTEwODh2NTEycTAgMjQtMTYuNSA0Mi41VDE2MDcgNzY4TDU2MyA4OTBxMTMgNjAgMTMgNzBxMCAxNi0yNCA2NGg5MjBxMjYgMCA0NSAxOXQxOSA0NXQtMTkgNDV0LTQ1IDE5SDQ0OHEtMjYgMC00NS0xOXQtMTktNDVxMC0xMSA4LTMxLjV0MTYtMzZ0MjEuNS00MFQ0NDUgOTUxTDI2OCAxMjhINjRxLTI2IDAtNDUtMTlUMCA2NHQxOS00NVQ2NCAwaDI1NnExNiAwIDI4LjUgNi41VDM2OCAyMnQxMyAyNC41dDggMjZ0NS41IDI5LjV0NC41IDI2aDEyMDFxMjYgMCA0NSAxOXQxOSA0NSIvPjwvc3ZnPg==" width="15px" 
              alt="cart-icon" />
              </a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="switchToLoginPage()">Login</a>
            </li>
          </ul>
        </nav>
  `;
    return sidebar;
}
document.body.prepend(Sidebar());
