import React from 'react';
import './DestinationDetail.css';

const cardData  = [
  {
    title: 'Descriptive Title 1',
    subtitle: 'Date and Duration 1',
    imgSrc: 'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'Descriptive Title 2',
    subtitle: 'Date and Duration 2',
    imgSrc: 'https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'Descriptive Title 3',
    subtitle: 'Date and Duration 3',
    imgSrc: 'https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Descriptive Title 4',
    subtitle: 'Date and Duration 4',
    imgSrc: 'https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    title: 'Descriptive Title 5',
    subtitle: 'Date and Duration 5',
    imgSrc: 'https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Descriptive Title 6',
    subtitle: 'Date and Duration 6',
    imgSrc: 'https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'Descriptive Title 7',
    subtitle: 'Date and Duration 7',
    imgSrc: 'https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },

  {
    title: 'Descriptive Title 1',
    subtitle: 'Date and Duration 1',
    imgSrc: 'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'Descriptive Title 2',
    subtitle: 'Date and Duration 2',
    imgSrc: 'https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'Descriptive Title 3',
    subtitle: 'Date and Duration 3',
    imgSrc: 'https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Descriptive Title 4',
    subtitle: 'Date and Duration 4',
    imgSrc: 'https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    title: 'Descriptive Title 5',
    subtitle: 'Date and Duration 5',
    imgSrc: 'https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Descriptive Title 6',
    subtitle: 'Date and Duration 6',
    imgSrc: 'https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'Descriptive Title 7',
    subtitle: 'Date and Duration 7',
    imgSrc: 'https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  // Add more items as needed
];

const DestinationDetail = () => {
  return (
    <div className="destination-background">
      <div className="destination-background-texture"></div>
      <div className="destination-carousel">
        {cardData.map((card, index) => (
          <div key={index} className="destination-carousel-item">
            <img src={card.imgSrc} alt={card.title} className="destination-carousel-item__img" />
            <div className="destination-carousel-item__details">
              <div className="destination-controls">
                <span className="destination-controls__play">Play</span>
                <span className="destination-controls__add">Add</span>
              </div>
              <h5 className="destination-carousel-item__title">{card.title}</h5>
              <h6 className="destination-carousel-item__subtitle">{card.subtitle}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationDetail;
