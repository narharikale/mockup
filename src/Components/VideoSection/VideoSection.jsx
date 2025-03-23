import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="sectionContainer">
      <div className="videoContainer">
        <video
          autoplay=""
          loop=""
          tabindex="0"
          muted=""
          playsinline=""
          title="A GIF shows how people collaborate using channels in Slack."
        >
          <source
            type="video/webm"
            src="https://a.slack-edge.com/bb974f1/marketing/img/features/hero/refresh/01-channels.IN@2x.webm"
          />
        </video>
      </div>

      <div>
        <h2 className="smallHeroHeading">
          Now is your moment to build a <br /> better tomorrow
        </h2>
        <p>
          We have seen what the future can be now its time to decide <br /> what
          it will be{" "}
        </p>
        <div className="buttonContainer">
          <button className="secondaryBtn">WATCH DEMO</button>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
