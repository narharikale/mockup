import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="sectionContainer">
      <div>
        <h1 className="heroHeading">
          Slack is where the <br></br>future works
        </h1>
        <p>
          Trasform the way you work witn one place for everyone and everything
          you need to get stuff done{" "}
        </p>
        <div className="buttonContainer">
          <button className="primaryBtn">TRY FOR FREE</button>
          <button className="signInBtn">SIGN UP WITH GOOGLE</button>
        </div>
      </div>
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
    </section>
  );
}

export default HeroSection;
