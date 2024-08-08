//Destination.jsx
import React from 'react';
import './Home.css'

const cities = [
  { name: 'Mumbai', className: 'card-front__tp--mumbai', btnClass: 'inside-page__btn--mumbai', contentClass: 'inside-page__content--mumbai' },
  { name: 'Pune', className: 'card-front__tp--pune', btnClass: 'inside-page__btn--pune', contentClass: 'inside-page__content--pune' },
  { name: 'Nagpur', className: 'card-front__tp--nagpur', btnClass: 'inside-page__btn--nagpur', contentClass: 'inside-page__content--nagpur' },
  { name: 'Nashik', className: 'card-front__tp--nashik', btnClass: 'inside-page__btn--nashik', contentClass: 'inside-page__content--nashik' },
  { name: 'Aurangabad', className: 'card-front__tp--aurangabad', btnClass: 'inside-page__btn--aurangabad', contentClass: 'inside-page__content--aurangabad' },
  { name: 'Solapur', className: 'card-front__tp--solapur', btnClass: 'inside-page__btn--solapur', contentClass: 'inside-page__content--solapur' },
  { name: 'Sangli', className: 'card-front__tp--sangli', btnClass: 'inside-page__btn--sangli', contentClass: 'inside-page__content--sangli' },
  { name: 'Kolhapur', className: 'card-front__tp--kolhapur', btnClass: 'inside-page__btn--kolhapur', contentClass: 'inside-page__content--kolhapur' },
  { name: 'Amravati', className: 'card-front__tp--amravati', btnClass: 'inside-page__btn--amravati', contentClass: 'inside-page__content--amravati' },
  { name: 'Jalgaon', className: 'card-front__tp--jalgaon', btnClass: 'inside-page__btn--jalgaon', contentClass: 'inside-page__content--jalgaon' },
  { name: 'Nanded', className: 'card-front__tp--nanded', btnClass: 'inside-page__btn--nanded', contentClass: 'inside-page__content--nanded' },
  { name: 'Latur', className: 'card-front__tp--latur', btnClass: 'inside-page__btn--latur', contentClass: 'inside-page__content--latur' },
  { name: 'Dhule', className: 'card-front__tp--dhule', btnClass: 'inside-page__btn--dhule', contentClass: 'inside-page__content--dhule' },
  { name: 'Satara', className: 'card-front__tp--satara', btnClass: 'inside-page__btn--satara', contentClass: 'inside-page__content--satara' },
  { name: 'Akola', className: 'card-front__tp--akola', btnClass: 'inside-page__btn--akola', contentClass: 'inside-page__content--akola' },
  { name: 'Ahmednagar', className: 'card-front__tp--ahmednagar', btnClass: 'inside-page__btn--ahmednagar', contentClass: 'inside-page__content--ahmednagar' },
  { name: 'Chandrapur', className: 'card-front__tp--chandrapur', btnClass: 'inside-page__btn--chandrapur', contentClass: 'inside-page__content--chandrapur' },
  { name: 'Yavatmal', className: 'card-front__tp--yavatmal', btnClass: 'inside-page__btn--yavatmal', contentClass: 'inside-page__content--yavatmal' },
  { name: 'Beed', className: 'card-front__tp--beed', btnClass: 'inside-page__btn--beed', contentClass: 'inside-page__content--beed' },
  { name: 'Parbhani', className: 'card-front__tp--parbhani', btnClass: 'inside-page__btn--parbhani', contentClass: 'inside-page__content--parbhani' },
  { name: 'Jalna', className: 'card-front__tp--jalna', btnClass: 'inside-page__btn--jalna', contentClass: 'inside-page__content--jalna' },
  { name: 'Osmanabad', className: 'card-front__tp--osmanabad', btnClass: 'inside-page__btn--osmanabad', contentClass: 'inside-page__content--osmanabad' },
  { name: 'Bhandara', className: 'card-front__tp--bhandara', btnClass: 'inside-page__btn--bhandara', contentClass: 'inside-page__content--bhandara' },
  { name: 'Buldhana', className: 'card-front__tp--buldhana', btnClass: 'inside-page__btn--buldhana', contentClass: 'inside-page__content--buldhana' },
  { name: 'Ratnagiri', className: 'card-front__tp--ratnagiri', btnClass: 'inside-page__btn--ratnagiri', contentClass: 'inside-page__content--ratnagiri' },
  { name: 'Gondia', className: 'card-front__tp--gondia', btnClass: 'inside-page__btn--gondia', contentClass: 'inside-page__content--gondia' },
  { name: 'Washim', className: 'card-front__tp--washim', btnClass: 'inside-page__btn--washim', contentClass: 'inside-page__content--washim' },
  { name: 'Wardha', className: 'card-front__tp--wardha', btnClass: 'inside-page__btn--wardha', contentClass: 'inside-page__content--wardha' },
  { name: 'Palghar', className: 'card-front__tp--palghar', btnClass: 'inside-page__btn--palghar', contentClass: 'inside-page__content--palghar' },
  { name: 'Raigad', className: 'card-front__tp--raigad', btnClass: 'inside-page__btn--raigad', contentClass: 'inside-page__content--raigad' },
  { name: 'Jalgaon', className: 'card-front__tp--jalgaon', btnClass: 'inside-page__btn--jalgaon', contentClass: 'inside-page__content--jalgaon' },
  { name: 'Thane', className: 'card-front__tp--thane', btnClass: 'inside-page__btn--thane', contentClass: 'inside-page__content--thane' },
  { name: 'Sindhudurg', className: 'card-front__tp--sindhudurg', btnClass: 'inside-page__btn--sindhudurg', contentClass: 'inside-page__content--sindhudurg' },
  { name: 'Nagaput', className: 'card-front__tp--nagaput', btnClass: 'inside-page__btn--nagaput', contentClass: 'inside-page__content--nagaput' },
  { name: 'Pune', className: 'card-front__tp--pune', btnClass: 'inside-page__btn--pune', contentClass: 'inside-page__content--pune' }
];


const Home = () => {
  return (
    <div className="main">
      <div className="card-area">
        {cities.map((city, index) => (
          <div key={index} className="card-section">
            <div className={`card ${city.className}`}>
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className={`card-front__tp ${city.className}`}>
                      <img src={`path-to-icon-${city.name.toLowerCase()}.png`} alt={city.name} className="card-front__icon" />
                      <div className="card-front__heading">{city.name}</div>
                      <div className="card-front__text-price">Starting at $xx</div>
                      <div className="card-front__bt">
                        <span className={`card-front__text-view`}>View</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className={`inside-page ${city.contentClass}`}>
                      <div className="inside-page__container">
                        <div className="inside-page__heading">Explore {city.name}</div>
                        <div className="inside-page__text">Discover the beauty and culture of {city.name}.</div>
                        <a href={`/${city.name.toLowerCase()}`} className={`inside-page__btn ${city.btnClass}`}>Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
