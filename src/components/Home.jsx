//Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Destinations.css';

const cardData = [
  {
    type: 'city',
    title: 'City break',
    price: 'From £29',
    heading: 'For urban lovers',
    text: 'As cities never sleep, there are always something going on, no matter what time!',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'ski',
    title: 'Ski break',
    price: 'From £99',
    heading: 'For adventure seekers',
    text: 'Enjoy the thrill of skiing in beautiful, snowy landscapes.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'beach',
    title: 'Beach holiday',
    price: 'From £79',
    heading: 'For sun lovers',
    text: 'Relax on sunny beaches and enjoy the ocean.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'adventure',
    title: 'Adventure trip',
    price: 'From £149',
    heading: 'For thrill seekers',
    text: 'Experience adrenaline-pumping activities and rugged landscapes.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'cruise',
    title: 'Cruise holiday',
    price: 'From £299',
    heading: 'For sea enthusiasts',
    text: 'Set sail on luxurious cruise ships and explore multiple destinations.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'nature',
    title: 'Nature escape',
    price: 'From £69',
    heading: 'For nature lovers',
    text: 'Reconnect with nature in beautiful, serene environments.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'cultural',
    title: 'Cultural tour',
    price: 'From £89',
    heading: 'For culture enthusiasts',
    text: 'Immerse yourself in different cultures and historical sites.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'luxury',
    title: 'Luxury holiday',
    price: 'From £499',
    heading: 'For luxury seekers',
    text: 'Indulge in luxury at premium resorts and destinations.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'wellness',
    title: 'Wellness retreat',
    price: 'From £159',
    heading: 'For wellness enthusiasts',
    text: 'Relax and rejuvenate at wellness retreats.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'family',
    title: 'Family holiday',
    price: 'From £199',
    heading: 'For families',
    text: 'Enjoy fun-filled activities for the whole family.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'romantic',
    title: 'Romantic getaway',
    price: 'From £229',
    heading: 'For couples',
    text: 'Experience romantic moments with your loved one.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'roadtrip',
    title: 'Road trip',
    price: 'From £99',
    heading: 'For road trip enthusiasts',
    text: 'Explore new destinations on an adventurous road trip.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
  {
    type: 'historical',
    title: 'Historical exploration',
    price: 'From £129',
    heading: 'For history buffs',
    text: 'Discover historical landmarks and explore ancient ruins.',
    videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
  },
];

const Destinations = () => {
  return (
    <div className="main">
      <div className="card-area">
        {cardData.map((card, index) => (
          <div key={index} className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className={`card-front__tp card-front__tp--${card.type}`}>
                      <img
                        src={`https://via.placeholder.com/60x60.png?text=${card.type}`}
                        alt="Icon"
                        className="card-front__icon"
                      />
                      <h2 className="card-front__heading">{card.title}</h2>
                      <p className="card-front__text-price">{card.price}</p>
                    </div>
                    <div className="card-front__bt">
                      <Link to={`/destination-detail/${card.type}`} className="card-front__text-view">
                        View more
                      </Link>
                    </div>
                  </div>

                  <div className="card-back">
                    <div className="video__container">
                      <video src={card.videoSrc} autoPlay loop muted />
                    </div>
                  </div>
                </div>
              </div>
              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading">{card.heading}</h3>
                  <p className="inside-page__text">{card.text}</p>
                  <Link to={`/destination-detail/${card.type}`} className={`inside-page__btn inside-page__btn--${card.type}`}>
                    View deals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
