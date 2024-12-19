import { useEffect } from "react";
import AOS from "aos";
import { Tab1 } from "./ToogleFinance/Tab1";
import { Tab2 } from "./ToogleFinance/Tab2";


export const Finance = () => {
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
          <h2>Finance</h2>
          
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
                  <h4>Pencairan</h4>
                </a>
              </li>
              {/* End tab nav item */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-2"
                >
                  <h4>Pengembalian</h4>
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
          </div>
        </div>
      </section>
      {/* /Features Section */}
      
    </>
  );
};
