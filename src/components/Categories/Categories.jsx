import "./categories.css";
import brust from "../../image/brust.png";
import lock from "../../image/lock.png";
import short from "../../image/short.png";
import removal from "../../image/removal.png";
import builder from "../../image/builder.png";
import electrician from "../../image/electrican.png";
import plumber from "../../image/plumber.png";
import handyman from "../../image/handyman.png";
import fenceing from "../../image/fenceing.png";
import painting from "../../image/painting.png";
import gardening from "../../image/gardening.png";
import cleaning from "../../image/cleaning.png";

const Categories = () => {
  return (
    <div>
      <div className="categories-0">
        <h2>Explore categories to see what you need.</h2>
      </div>
      <div className="categories-1">
        <h3>Emergency</h3>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={brust} alt="OMG something wrong" />
          <a href="#">Burst Pipe</a>
        </div>
        <div className="card">
          <img src={lock} alt="OMG something wrong" />
          <a href="#">Locked Out</a>
        </div>
        <div className="card">
          <img src={short} alt="OMG something wrong" />
          <a href="#">Short Out</a>
        </div>
        <div className="card">
          <img src={removal} alt="OMG something wrong" />
          <a href="#">Removal</a>
        </div>
      </div>
      <div></div>
      <div className="categories-2">
        <h3>Most popular</h3>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={builder} alt="OMG something wrong" />
          <a href="#">Builder</a>
        </div>
        <div className="card">
          <img src={electrician} alt="OMG something wrong" />
          <a href="#">Electrician</a>
        </div>
        <div className="card">
          <img src={plumber} alt="OMG something wrong" />
          <a href="#">Plumber</a>
        </div>
        <div className="card">
          <img src={handyman} alt="OMG something wrong" />
          <a href="#">Handyman</a>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={fenceing} alt="OMG something wrong" />
          <a href="#">Fencing</a>
        </div>
        <div className="card">
          <img src={painting} alt="OMG something wrong" />
          <a href="#">Painting</a>
        </div>
        <div className="card">
          <img src={gardening} alt="OMG something wrong" />
          <a href="#">Gardening</a>
        </div>
        <div className="card">
          <img src={cleaning} alt="OMG something wrong" />
          <a href="#">Cleaning</a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
