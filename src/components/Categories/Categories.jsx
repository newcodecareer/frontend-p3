import { Category, Heading, SubHeading, CardContainer, Card, Img, Text } from "./categories.style";

const Categories = () => {
  return (
    <Category>
      <Heading>Explore categories to see what you need.</Heading>
      <SubHeading>Emergency</SubHeading>
      <CardContainer>
        <Card>

          <Img src="/images/brust.png" alt="OMG something wrong" />
          <Text>Burst Pipe</Text>
        </Card>
        <Card>
          <Img src="/images/lock.png" alt="OMG something wrong" />
          <Text>Locked Out</Text>
        </Card>
        <Card>
          <Img src="/images/short.png" alt="OMG something wrong" />
          <Text>Short Out</Text>
        </Card>
        <Card>
          <Img src="/images/removal.png" alt="OMG something wrong" />
          <Text>Removal</Text>
        </Card>
      </CardContainer>
      <SubHeading>Most Popular</SubHeading>
      <CardContainer>
        <Card>
          <Img src="/images/builder.png" alt="OMG something wrong" />
          <Text>Builder</Text>
        </Card>
        <Card>
          <Img src="/images/electrican.png" alt="OMG something wrong" />
          <Text>Electrician</Text>
        </Card>
        <Card>
          <Img src="/images/plumber.png" alt="OMG something wrong" />
          <Text>Plumber</Text>
        </Card>
        <Card>
          <Img src="/images/handyman.png" alt="OMG something wrong" />
          <Text>Handyman</Text>
        </Card>
      </CardContainer>
      <CardContainer>
        <Card>
          <Img src="/images/fenceing.png" alt="OMG something wrong" />
          <Text>Fencing</Text>
        </Card>
        <Card>
          <Img src="/images/painting.png" alt="OMG something wrong" />
          <Text>Painting</Text>
        </Card>
        <Card>
          <Img src="/images/gardening.png" alt="OMG something wrong" />
          <Text>Gardening</Text>
        </Card>
        <Card>
          <Img src="/images/cleaning.png" alt="OMG something wrong" />
          <Text>Cleaning</Text>
        </Card>
      </CardContainer>
    </Category>
  );
};

export default Categories;

// import "./categories.css";
// import brust from "../../image/brust.png";
// import lock from "../../image/lock.png";
// import short from "../../image/short.png";
// import removal from "../../image/removal.png";
// import builder from "../../image/builder.png";
// import electrician from "../../image/electrican.png";
// import plumber from "../../image/plumber.png";
// import handyman from "../../image/handyman.png";
// import fenceing from "../../image/fenceing.png";
// import painting from "../../image/painting.png";
// import gardening from "../../image/gardening.png";
// import cleaning from "../../image/cleaning.png";

// const categoriesOne = [
//   { image: brust, linkLabel: "Burst Pipe", href: "brust" },
//   { image: lock, linkLabel: "Locked Out", href: "#" },
//   { image: short, linkLabel: "Short Out", href: "#" },
//   { image: removal, linkLabel: "Removal", href: "#" },
// ];

// const categoriesTwo = [
//   { image: builder, linkLabel: "Builder", href: "#" },
//   { image: electrician, linkLabel: "Electrician", href: "#" },
//   { image: plumber, linkLabel: "Plumber", href: "#" },
//   { image: handyman, linkLabel: "Handyman", href: "#" },
// ];

// const categoriesThree = [
//   { image: fenceing, linkLabel: "Fencing", href: "#" },
//   { image: painting, linkLabel: "Painting", href: "#" },
//   { image: gardening, linkLabel: "Gardening", href: "#" },
//   { image: cleaning, linkLabel: "Cleaning", href: "#" },
// ];

// const listItems = categoriesOne.map((category) => (
//   <div className="card">
//     <img src={category.image} alt="OMG something wrong" />
//     <a href={category.href}>{category.linkLabel}</a>
//   </div>
// ));

// const listItemsTwo = categoriesTwo.map((category) => (
//   <div className="card">
//     <img src={category.image} alt="OMG something wrong" />
//     <a href={category.href}>{category.linkLabel}</a>
//   </div>
// ));

// const listItemsThree = categoriesThree.map((category) => (
//   <div className="card">
//     <img src={category.image} alt="OMG something wrong" />
//     <a href={category.href}>{category.linkLabel}</a>
//   </div>
// ));

// <div>
//   <div className="categories-0">
//     <h2>Explore categories to see what you need.</h2>
//   </div>
//   <div className="categories-1">
//     <h3>Emergency</h3>
//   </div>

//   <ul className="card-container">{listItems}</ul>

//   <div className="categories-2">
//     <h3>Most popular</h3>
//   </div>

//   <ul className="card-container">{listItemsTwo}</ul>
//   <ul className="card-container">{listItemsThree}</ul>
// </div>
