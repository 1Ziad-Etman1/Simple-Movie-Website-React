import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div
            className="card shadow-lg"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.35)", color:"white" }}
          >
            <div className="card-body">
              <h1 className="card-title text-center mb-4">About Us</h1>
              <p className="lead">
                Welcome to our application! We are dedicated to providing the
                best movie management experience. Our platform allows users to
                add, view, and manage movies with ease. Whether you are a movie
                enthusiast or just looking for an easy way to keep track of your
                favorite films, we've got you covered.
              </p>
              <hr />
              <h3>Our Mission</h3>
              <p>
                Our mission is to create a seamless and user-friendly experience
                for managing and exploring movies. We aim to offer a
                comprehensive platform where users can discover new movies, add
                their favorites, and enjoy a rich visual experience.
              </p>
              <hr />
              <h3>Contact Us</h3>
              <p>
                If you have any questions or feedback, feel free to reach out to
                us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> support@ourapp.com
                </li>
                <li>
                  <strong>Phone:</strong> (123) 456-7890
                </li>
                <li>
                  <strong>Address:</strong> 123 Movie Lane, Film City, CA 12345
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
