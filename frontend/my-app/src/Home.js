import React from "react";
import image from "./images/images.jpg";


const Home = () => {
  return (
    <>
      <div>
        <h1>Book Tracker App</h1>
        <p>
          Welcome to the book tracker app! You can add books you have read, or
          would like to read. You can add reviews and rate books based on how
          you liked them!
        </p>
        <img
          alt="flower and books"
          src="./images/images.jpg"
        />
      </div>
    </>
  );
};

export default Home;