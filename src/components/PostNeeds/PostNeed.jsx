import "./PostNeed.css";

const postNeed = () => {
  return (
    <div className={"post-need"}>
      <h1>Houddy, your house best buddy</h1>
      <div className="subtitle">Find right tradie as simple as three three steps</div>
      <div className="card-container">
        <div className="card">
          <img src="../src/images/postNeed01.PNG" alt="Step one picture" />
          <h3>1. Tell us what you need</h3>
          <p>Post your need and postcode to receive local free quotes</p>
        </div>
        <div className="card">
          <img src="../src/images/postNeed02.PNG" alt="Step two picture" />
          <h3>2. Compare your quotes</h3>
          <p>Chat with local tradies who respond and discuss details</p>
        </div>
        <div className="card">
          <img src="../src/images/postNeed03.PNG" alt="Step three picture" />
          <h3>3. Hire the best buddy</h3>
          <p>Select the best buddy and leave reviews and rewards.</p>
        </div>
      </div>
      <div>
        <button type="submit">Post Your Need</button>
      </div>
    </div>
  );
};

export default postNeed;
