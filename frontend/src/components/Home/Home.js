import "./Home.css";

const Home = () => {
  return (
    <div className="body">
      <div className="body-container">
        <div className="card-container">
          <div>
            <p className="title-text">Today</p>
            <p className="sort pop">Popular</p>
            <p className="sort">Newest</p>
          </div>
          <div className="head-card">
            <div className="card">Gundam Product #1</div>
            <div className="card">Gundam Product #2</div>
            <div className="card">Gundam Product #3</div>
            <div class="last-card">Show more...</div>
          </div>
        </div>
        <div className="side-container">
          <p className="title-text">Upcoming Products</p>
          <div className="upcoming-container">
            <div className="side-card">Product#1</div>
            <div className="side-card">Product#2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
