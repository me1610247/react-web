import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components/text/text";
import { Heading } from "../../components/heading/Heading";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import "./landing.css"; // Import custom CSS file
import image1 from "../../components/assets/img/airpods.jpg";
import image2 from "../../components/assets/img/laptop.jpg";
import image3 from "../../components/assets/img/macbook.jpg";
import image4 from "../../components/assets/img/samsung.jpg";
import image5 from "../../components/assets/img/tv.jpg"
import image6 from "../../components/assets/img/watch.jpg";

const Landing = () => {
  return (
    <>
     
      <div className="landing-container">
        {/* Header section */}
        <Nav />
        <p className="title">All Products</p>
        <div className="container-xs">
          {/* Checklist section */}
          <div className="checklist-section">
            <div className="row">
              <div className="col-md-4">
                <div className="checklist-card">
                  <img src={image1} alt="" className="img-fluid" />
                  <div className="card-body">
                    <Text as="p">Name: Airpods Pro</Text>
                    <Text as="p">Price: $199.99</Text>
                    <Link to='/buy'>
                    <button className="text-center">Buy</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Add another column for the second card */}
              <div className="col-md-4">
                <div className="checklist-card">
                  <img src={image2} alt="" className="img-fluid" />
                  <div className="card-body">
                    <Text as="p">Name: Laptop</Text>
                    <Text as="p">Price: $799.99</Text>
                    <button className="text-center">Buy</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="checklist-card">
                  <img src={image4} alt="" className="img-fluid" />
                  <div className="card-body">
                    <Text as="p">Name : Samsung A24</Text>
                    <Text as="p">Price: $799.99</Text>
                    <button className="text-center">Buy</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="checklist-card">
                  <img src={image2} alt="" className="img-fluid" />
                  <div className="card-body">
                    <Text as="p">Name: Laptop</Text>
                    <Text as="p">Price: $799.99</Text>
                    <button className="text-center">Buy</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="checklist-card">
                  <img src={image2} alt="" className="img-fluid" />
                  <div className="card-body">
                    <Text as="p">Name: Laptop</Text>
                    <Text as="p">Price: $799.99</Text>
                    <button className="text-center">Buy</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="checklist-card">
                  <img src={image3} alt="" className="img-fluid" />
                  <div className="card-body">
                    <Text as="p">Name: Mac Book</Text>
                    <Text as="p">Price: $799.99</Text>
                    <button className="text-center">Buy</button>

                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="checklist-card">
                  <img src={image4} alt="" className="img-fluid" />
                  <div className="card-body">
                    <Text as="p">Name: Samsung A24</Text>
                    <Text as="p">Price: $699.99</Text>
                    <button className="text-center">Buy</button>

                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="checklist-card">
                  <img src={image5} alt="" className="img-fluid" />
                  <div className="card-body">
                    <Text as="p">Name: Tornado Tv</Text>
                    <Text as="p">Price: $1099.99</Text>
                    <button className="text-center">Buy</button>

                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="checklist-card">
                  <img src={image6} alt="" className="img-fluid" />
                  <div className="card-body">
                    <Text as="p">Name: Apple Watch</Text>
                    <Text as="p">Price: $599.99</Text>
                    <button className="text-center">Buy</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
