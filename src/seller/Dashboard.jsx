import { useEffect } from "react";
import AOS from "aos";

export const Dashboard = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
  return (
    <>
      <section
        id="hero-seller"
        className="hero-seller section light-background"
      >
        <div
          id="hero-carousel"
          data-bs-interval={5000}
          className="container carousel carousel-fade"
          data-bs-ride="carousel"
          data-aos="fade-up"
        >
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Welcome Assa Group!
              </h2>
              <a
                href="#features-details"
                className="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <svg
          className="hero-waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use xlinkHref="#wave-path" x={50} y={3} />
          </g>
          <g className="wave2">
            <use xlinkHref="#wave-path" x={50} y={0} />
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x={50} y={9} />
          </g>
        </svg>
      </section>
      {/* /Hero Section */}

      <section id="features-details" className="features-details section">
        <div className="container">
          <div className="row gy-4 justify-content-between features-item">
            <div
              className="col-lg-5 d-flex align-items-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="content">
                <h3>Assa Group</h3>
                <p>
                  Bersenang senang dahulu, berakit-rakit kehulu. Bersakit-sakit dahulu, nanti kita ke penghulu.
                </p>
                <ul>
                  <li>
                  <i className="fa-solid fa-location-dot" style={{marginRight:"15px"}}/> Lokasi : Sumatera Selatan
                  </li>
                  <li>
                  <i className="fa-solid fa-phone"/>{" "}
                    KOntak : +62821111111
                  </li>
                  <li>
                  <i className="fa-solid fa-envelope" /> Email : assa@group.com
                  </li>
                </ul>
                <p />
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <img
                src="/assets/img/3.png"
                className="img-fluid"
                alt=""
                style={{objectFit: "cover", height: "600px", width: "auto",}}
              />
            </div>
          </div>
          {/* Features Item */}
        </div>
      </section>
      {/* /Features Details Section */}

      <section id="portfolio" className="portfolio section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up" style={{paddingTop:"60px", paddingBottom:"30px"}}>
          <h2>Produk Terkait</h2>
          
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4" data-aos="fade-up">
            {/* Portfolio Item */}
            <div className="col-lg-3 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <a
                  href="/catalog-detail"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src="/assets/img/2.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href="/catalog-detail" title="More Details">
                      Shrimp Investment
                    </a>
                  </h4>
                  <p> <i className="fa-solid fa-user" style={{marginRight:"5px"}}/> 100+ customers</p>
                  </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-3 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <a
                  href="/catalog-detail"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src="/assets/img/3.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href="/catalog-detail" title="More Details">
                      Product 1
                    </a>
                  </h4>
                  <p> <i className="fa-solid fa-user" style={{marginRight:"5px"}}/> 70+ customers</p>
                  </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-3 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <a
                  href="/catalog-detail"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src="/assets/img/1.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href="/catalog-detail" title="More Details">
                      Branding 1
                    </a>
                  </h4>
                  <p> <i className="fa-solid fa-user" style={{marginRight:"5px"}}/> 250 customers</p>
                  </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-3 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <a
                  href="/catalog-detail"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src="/assets/img/4.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href="/catalog-detail" title="More Details">
                      Branding 1
                    </a>
                  </h4>
                  <p> <i className="fa-solid fa-user" style={{marginRight:"5px"}}/> 500+ customers</p>
                  </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            {/* Add more portfolio items similarly */}
          </div>
        </div>
      </section>
    </>
  );
};
