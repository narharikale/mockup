import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navContainer">
      <div className="linkContainer">
        <div>
          <img
            className="logo"
            src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black@2x.png"
          />
        </div>
        <ul className="list">
          <li>Products</li>
          <li>Enterprise</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </div>

      <div className="actionsContainer">
        <div className="actions">
          <button className="iconBtn">
            {" "}
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m18.78 17.72c.1467.1467.22.3233.22.53 0 .2133-.0733.39-.22.53-.16.1467-.3367.22-.53.22-.2067 0-.3833-.0733-.53-.22l-4.47-4.47c-.6667.54-1.4067.9567-2.22 1.25-.8067.2933-1.65.44-2.53.44-1.36 0-2.61333-.3367-3.76-1.01s-2.05667-1.5833-2.73-2.73-1.01-2.4-1.01-3.76.33667-2.61333 1.01-3.76 1.58333-2.05667 2.73-2.73 2.4-1.01 3.76-1.01 2.6133.33667 3.76 1.01 2.0567 1.58333 2.73 2.73 1.01 2.4 1.01 3.76c0 .88-.1467 1.7267-.44 2.54-.2933.8067-.71 1.5433-1.25 2.21zm-10.28-3.22c1.08667 0 2.0867-.27 3-.81.92-.54 1.65-1.2667 2.19-2.18.54-.92.81-1.92333.81-3.01s-.27-2.08667-.81-3c-.54-.92-1.27-1.65-2.19-2.19-.9133-.54-1.91333-.81-3-.81s-2.09.27-3.01.81c-.91333.54-1.64 1.27-2.18 2.19-.54.91333-.81 1.91333-.81 3s.27 2.09.81 3.01c.54.9133 1.26667 1.64 2.18 2.18.92.54 1.92333.81 3.01.81z"
                stroke="#000"
                stroke-width=".5"
              ></path>
            </svg>
          </button>
          <a className="linkBtn">Sign in</a>
        </div>
        <div className="buttons">
          <button className="secondaryBtn">TALK TO SALES</button>
          <button className="primaryBtn">TRY FOR FREE</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
