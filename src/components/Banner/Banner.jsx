import "./banner.css";

const banner = () => {
  return (
    <div className={"banner"}>
      <div className={"info"}>
        <h1>One-stop solution for your house.</h1>
        <input type="text" placeholder="Tell us what service do you need? e.g.Plumber" />
        <div>
          <button type="submit">Get Free Quotes</button>
        </div>
      </div>
    </div>
  );
};

export default banner;
