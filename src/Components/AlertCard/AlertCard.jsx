import "./AlertCard.css";

function AlertCard({ setShowAlertCard }) {
  return (
    <div className="alertContainer">
      <p>
        <span>
          Turn agents into teammates with Agentforce in Slack.{" "}
          <strong>
            <a className="link" href="">
              Learn more &#8594;
            </a>
          </strong>{" "}
        </span>
      </p>

      <button className="clearBtn" onClick={() => setShowAlertCard(false)}>
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
    </div>
  );
}

export default AlertCard;
