import "./CookiesPopup.css";

function CookiesPopup() {
  return (
    <div className="cookiesContainer">
      <button className="clearBtn">
        <svg
          aria-hidden=""
          width="18"
          height="18"
          color="#fff"
          class=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-255 347 100 100"
          fill="#fff"
        >
          <title>Hide announcement</title>
          <path d="M-160.4 434.2l-37.2-37.2 37.1-37.1-7-7-37.1 37.1-37.1-37.1-7 7 37.1 37.1-37.2 37.2 7.1 7 37.1-37.2 37.2 37.2"></path>
        </svg>
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        recusandae cumque doloremque voluptatem eligendi amet et in non iste
        natus obcaecati! Suscipit cumque aliquam accusamus ipsam in ex. Nisi,
        illo?
      </p>

      <button className="primaryBtn">Accept all cookies</button>
    </div>
  );
}

export default CookiesPopup;
