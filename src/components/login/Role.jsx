import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

export const Role = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (roleId) => {
    navigate('/signin', { state: { role_id: roleId } });
};

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Pilih tipe akun dulu yuk!</h2>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div
              className="service-item item-cyan position-relative"
              onClick={() => handleRoleSelection(3)} 
            >
              <h3>Investor</h3>
              <i className="fa-solid fa-chart-line icon" />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <div
              className="service-item item-orange position-relative"
              onClick={() => handleRoleSelection(2)} 
            >
              <h3>Fish Farmers</h3>
              <i className="fa-solid fa-fish icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
