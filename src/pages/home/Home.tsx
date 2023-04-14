import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <div className="top-container">
        <h2>Make the best choice for your car</h2>
        <div className="top-search-container">
          <div>
            <h3>Looking for something specific?</h3>
          </div>
          <div>
            <div>Pick what suits you the best</div>
            <input className="searchbar" placeholder="Search" />
            <a href="">To the autoshop &gt;</a>
          </div>
        </div>
      </div>
      <div className="mid-container">
        <div className="autoshop card">
          <h2>Autoshop</h2>
        </div>
        <div className="rentacar card">
          <h2>Rent a car</h2>
        </div>
      </div>
      <div className="new-vehicles-container">
        <h2>New vehicles</h2>
        <div className="new-vehicles">
          <div className="card">
            <div className="card-section">section</div>
          </div>
          <div className="card">
            <div className="card-section">section</div>
          </div>
          <div className="news-vehicles-more-btn">See more</div>
        </div>
      </div>
      <div className="new-vehicles-container">
        <h2>Mostly viewed</h2>
        <div className="new-vehicles">
          <div className="card">
            <div className="card-section">section</div>
          </div>
          <div className="card">
            <div className="card-section">section</div>
          </div>
          <div className="news-vehicles-more-btn">See more</div>
        </div>
      </div>
      <div className="rent-vehicles-container">
        <h2>Rent vehicles</h2>
        <div className="new-vehicles">
          <div className="card">
            <div className="card-section">section</div>
          </div>
          <div className="card">
            <div className="card-section">section</div>
          </div>
          <div className="news-vehicles-more-btn">See more</div>
        </div>
      </div>
      <div className="status-news-container">
        <h2>Recent activities</h2>
        <div className="status-news">
          <a href="">Audi RS7</a>
          <div>Sold</div>
        </div>
        <div className="status-news">
          <a href="">Audi RS7</a>
          <div>Sold</div>
        </div>
        <div className="status-news">
          <a href="">Audi A4</a>
          <div>Rented</div>
        </div>
        <div className="status-news">
          <a href="">Audi RS7</a>
          <div>Sold</div>
        </div>
        <div className="status-news">
          <a href="">Audi RS7</a>
          <div>Sold</div>
        </div>
        <div className="status-news">
          <a href="">Audi RS6</a>
          <div>New</div>
        </div>
      </div>
      <div className="reviews-container">
        <h2>Reviews</h2>
        <div className="review">
          <div className="review-top-section">
            <div className="avatar" />
            <div>5 stars</div>
          </div>
          <div>Review comment</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
