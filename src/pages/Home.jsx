import { useEffect } from "react";
import AOS from "aos";
export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section id="hero-home" className="hero-home section dark-background">
        <img src="/assets/img/home.png" alt="" className="hero-bg" data-aos="zoom-out"/>
        <div className="container" data-aos="zoom-out">
          <div className="row gy-4 justify-content-between">
            <div
              className="col-lg-6  d-flex flex-column justify-content-center"
              data-aos="fade-in"
            >
              <h1>Finest - Connecting You to Blue Economic Gains</h1>
              <p>
                Dengan <b>Finest</b>, kami menciptakan peluang bagi masyarakat
                untuk menggunakan sumber daya laut secara bijak. Jelajahi solusi
                kami untuk mengembangkan bisnis berbasis kelautan yang ramah
                lingkungan dan mendukung kesejahteraan sosial.
              </p>
              <div className="d-flex">
                <a href="#features-cards" className="btn-get-started">
                  Jelajahi
                </a>
              </div>
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

      <section id="features-cards" className="features-cards section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Target Kami</h2>
        </div>
        <div className="container">
          <div className="row gy-4 justify-content-center align-items-center">
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="feature-box orange">
                <i className="bi bi-award" />
                <h4>14</h4>
                <p>Kehidupan di Bawah Air</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="feature-box blue">
                <i className="bi bi-patch-check" />
                <h4>8</h4>
                <p>Pekerjaan Layak dan Pertumbuhan Ekonomi</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="feature-box green">
                <i className="bi bi-sunrise" />
                <h4>3</h4>
                <p>Kesehatan dan Kesejahteraan yang Baik</p>
              </div>
            </div>

            <div className="feature-box">
              <p style={{ textAlign: "center" }}>
                Tujuan-tujuan ini mendukung keberlanjutan sumber daya kelautan
                (SDG 14), mendorong pertumbuhan ekonomi berkelanjutan dan
                penciptaan lapangan kerja (SDG 8), serta meningkatkan kesehatan
                dan kesejahteraan bagi semua (SDG 3). Kami berkomitmen untuk
                memberikan dampak positif yang berkelanjutan melalui
                langkah-langkah yang mendukung ekosistem laut, pertumbuhan
                ekonomi, dan kesehatan masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Layanan Kami</h2>
        </div>
        {/* End Section Title */}
        <div className="container" style={{ marginTop: "35px" }}>
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="pricing-item">
                <i className="fa-solid fa-seedling"></i>
                <h3>Perencanaan Investasi</h3>
                <p>
                  Mulai cari tahu tentang investasi yang cocok buat kamu, yuk!
                </p>

                <div className="btn-wrap">
                  <a href="#" className="btn-buy" style={{ marginTop: "3px" }}>
                    Pelajari
                  </a>
                </div>
              </div>
            </div>
            {/* End Pricing Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="pricing-item">
                <i className="fa-solid fa-comment-dollar"></i>
                <h3>Modal Pembudidaya Ikan</h3>
                <p>Urusan modal jangan khawatir, kamu bisa baca disini dulu!</p>

                <div className="btn-wrap">
                  <a href="#" className="btn-buy" style={{ marginTop: "3px" }}>
                    Pelajari
                  </a>
                </div>
              </div>
            </div>
            {/* End Pricing Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="pricing-item">
                <i className="fa-solid fa-book-open-reader"></i>
                <h3>Edukasi dan Artikel</h3>
                <p>
                  Lihat-lihat dulu? Kami punya berbagai tulisan menarik agar
                  kamu paham investasi!
                </p>

                <div className="btn-wrap">
                  <a href="#" className="btn-buy" style={{ marginTop: "3px" }}>
                    Pelajari
                  </a>
                </div>
              </div>
            </div>
            {/* End Pricing Item */}
          </div>
        </div>
      </section>
      {/* /Pricing Section */}

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="assets/img/rizki.png"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Rizki</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    <span>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                    </span>
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    <span>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                    </span>
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-3.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    <span>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                    </span>
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    <span>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                    </span>
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-5.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    <span>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                    </span>
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* /Testimonials Section */}
    </>
  );
};
