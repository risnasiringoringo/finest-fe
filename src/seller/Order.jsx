import { useEffect } from "react";
import AOS from "aos";
import { Tab1 } from "./ToogleOrder/Tab1";
import { Tab2 } from "./ToogleOrder/Tab2";
import { Tab3 } from "./ToogleOrder/Tab3";


export const Order = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
  return (
    <>
      {/* Features Section */}
      <section id="features" className="features section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Order</h2>
          
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="d-flex justify-content-center">
            <ul
              className="nav nav-tabs"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-1"
                >
                  <h4>Kontrak Investasi</h4>
                </a>
              </li>
              {/* End tab nav item */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-2"
                >
                  <h4>Fish Farmer</h4>
                </a>
                {/* End tab nav item */}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-3"
                >
                  <h4>Pembagian Profit</h4>
                </a>
                {/* End tab nav item */}
              </li>
              
            </ul>
          </div>
          <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
            <div className="tab-pane fade active show" id="features-tab-1">
              <Tab1/>
            </div>
            {/* End tab content item */}
            <div className="tab-pane fade" id="features-tab-2">
              <Tab2/>
            </div>
            {/* End tab content item */}
            <div className="tab-pane fade" id="features-tab-3">
              <Tab3/>
            </div>
            {/* End tab content item */}
            <div className="tab-pane fade" id="features-tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Voluptatibus commodi accusamu</h3>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all" />{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all" />{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all" />{" "}
                      <span>
                        Provident mollitia neque rerum asperiores dolores quos
                        qui a. Ipsum neque dolor voluptate nisi sed.
                      </span>
                    </li>
                  </ul>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-illustration-3.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* End tab content item */}
          </div>
        </div>
      </section>
      {/* /Features Section */}
      
    </>
  );
};
