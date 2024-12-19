import { useEffect } from "react";
import AOS from "aos";

export const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <main className="main">
        {/* Section Title */}
        <div
          className="page-title dark-background"
          data-aos="zoom-out"
          style={{ backgroundImage: "url(assets/img/dashboard.jpg)" }}
        >
          <div className="container position-relative">
            <h1>Portfolio</h1>
            <p>
              Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
              placeat quibusdam quia assumenda numquam molestias.
            </p>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current">Portfolio</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* End Page Title */}
        {/* Service Details Section */}
        <section id="service-details" className="service-details section">
          <div className="container">
            <div className="row gy-5">
              
              <div className="col-lg-12 ps-lg-5">
                <div className="row">
                  <div className="col-lg-6">
                    <h3>Evaluation</h3>
                  </div>
                  <div className="col-lg-6 text-end">
                    <h5>30 Days</h5>
                  </div>
                </div>
                
                <p className="mb-0 mt-3">Total Assets</p>
                <h3><b>Rp. 500.000</b></h3>
                
                <p className="mb-0 mt-3">Margin</p>
                <h3><b>Rp. 10.000</b></h3>
              </div>
            </div>
          </div>

          <div className="mt-3 container" id="chart">
            

            <div className="chart-porto card mt-3" id="chart-porto">
            <form className="search-form d-flex flex-grow-1" role="search">
              <div className="input-group search-input-group">
                <span className="input-group-text search-icon">
                  <i className="bi bi-search" />
                </span>
                <input
                  className="form-control roboto-font search-input"
                  type="search"
                  placeholder="Marina Fresh"
                  aria-label="Search"
                />
              </div>
            </form>
            <hr />
              <div className="chart-detail">
                ini isi chart
              </div>
              <div className="chart-subdetail">
                <h4>
                  Marina Fresh
                </h4>

                <div className="row">
                  <div className="col-lg-6">
                    <p>On Progress</p>
                    <p>Waiting for porcessing</p>
                    <p>Finished</p>
                  </div>
                  <div className="col-lg-6 text-end">
                    <p>6 fish pond</p>
                    <p>5 fish pond</p>
                    <p>4 fish pond</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
          
        </section>
        {/* /Service Details Section */}
      </main>
    </>
  );
};
