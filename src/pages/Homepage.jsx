import { useEffect } from "react";
import AOS from "aos";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/dashboard.jpg" alt="" />
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-start">
          <div className="col-lg-8 container">
            <h2>Finest - Connecting You to Blue Economy Gains</h2>
            <p>
              With Finest, we create opportunities for people to use marine
              resources wisely. Explore our solutions for developing ocean-based
              businesses that are environmentally friendly and support social
              welfare.
            </p>
            <a href="#about" className="btn-get-started">
              Start
            </a>
          </div>
        </div>
      </div>

      <div className="goals-container">
        <div className="goals-title">
          <h2>Our Goals</h2>
        </div>
        <div className="goals-cards">
          <div className="goal-card goal-card-blue">
            <h3>14</h3>
            <p>Life Below Water</p>
          </div>
          <div className="goal-card goal-card-red">
            <h3>8</h3>
            <p>Decent Work and Economic Growth</p>
          </div>
          <div className="goal-card goal-card-green">
            <h3>3</h3>
            <p>Good Health and Well-Being</p>
          </div>
        </div>
        <div className="goals-description">
          <p>
            These goals support the sustainability of marine resources (SDG 14),
            promote sustainable economic growth and job creation (SDG 8), and
            promote health and well-being for all (SDG 3). We are committed to
            delivering sustainable positive impacts through measures that
            support marine ecosystems, economic growth, and public health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
