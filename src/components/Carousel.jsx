//carousel.jsx
import React from 'react';
import './Carousel.css'; // Ensure you create and style this CSS file

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478079.jpg?t=st=1723093859~exp=1723097459~hmac=f84d6208d14c27660ec4fede415ce5c4ba1d5863b16f67dedbd6e0294ab4a592&w=740" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slider One Item</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://img.freepik.com/premium-photo/rear-view-people-sitting-by-plants-forest_1048944-21051124.jpg?w=740" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slider Two Item</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?t=st=1723093557~exp=1723097157~hmac=0323a5332f99875faf3b2fd61080444367089e3b5b3426363f3e7b10c607aef9&w=740" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slider Three Item</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
