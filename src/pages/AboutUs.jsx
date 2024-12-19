export const AboutUs = () => {
  return (
    <>
      <>
        {/* about Section */}
        <section id="about" className="about section " data-aos="zoom-out">
          <img src="assets/img/hero-bg.jpg" alt="" className="about-bg" />
          <div className="container">
            <div className="row gy-4 justify-content-between">
              <div className="col-lg-4 order-lg-last about-img">
                <img
                  src="assets/img/finest-full.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
              <div className="col-lg-6  d-flex flex-column justify-content-center">
                <h1>
                  <span>Kenalan yuk!</span>
                </h1>
                <p>
                  Kami percaya bahwa lautan adalah sumber daya yang harus digunakan dengan bijak untuk masa depan yang berkelanjutan bagi generasi penerus kita. 
                </p>
                <div className="d-flex">
                  <a href="#about" className="btn-get-started">
                    Meluncur
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <svg
            className="about-waves"
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


        <>
          {/* About Section */}
          <section
            id="aboutmore"
            className="aboutmore section"
          >
            {/* Section Title */}
            <div className="container section-title">
              <h2>Tentang Finest</h2>
            </div>
            {/* End Section Title */}
            <div className="container">
              <div className="row gy-3">
                <div className="col-lg-12 d-flex flex-column justify-content-center">
                  <div className="aboutmore-content ps-0 ps-lg-3">
                    <p className="fst-italic">
                    <b>Finest</b> didirikan dengan visi untuk memberdayakan komunitas pesisir dan mendukung keberlanjutan ekonomi biru. Kami percaya bahwa laut adalah sumber daya yang berharga dan harus dikelola dengan bijak demi keberlanjutan generasi masa depan. Melalui pendidikan, inovasi, dan kolaborasi, kami berusaha menghubungkan komunitas dengan manfaat ekonomi dari laut, sambil menjaga keberlanjutannya. Cerita kami adalah cerita tentang sebuah komunitas yang bekerja bersama untuk membangun masa depan yang berkelanjutan dan sejahtera untuk semua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>

        {/* /about Section */}

        {/* Team Section */}
        <section id="team" className="team section light-background">
          {/* Section Title */}
          <div className="container section-title mb-4">
            <h2>Tim Kami</h2>
            <p>
              
              <span className="description-title">Kenalan sama kita yuk!</span>
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div
              className="row gy-4"
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/narita.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Narita</h4>
                    <span>Project Manager</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/soraya.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Soraya</h4>
                    <span>Scrum Master</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
            </div>
            <div className="row gy-4 mt-3">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/rafiqa.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Rafiqa</h4>
                    <span>Hipster</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/zahra.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Zahra</h4>
                    <span>Hipster</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/rizki.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Rizki</h4>
                    <span>Hacker</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/risna.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Risna</h4>
                    <span>Hacker</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
            </div>
          </div>
        </section>
        {/* /Team Section */}

        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" >
            <h2>Ayo Tanyain!</h2>
            <p style={{marginBottom:"30px"}}>
              <span>Butuh bantuan?</span>{" "}
              <span className="description-title">Ingin bertanya sesuatu yang kamu ragukan? dengan senang hati kami bantu!</span>
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="info-wrap">
                  <div
                    className="info-item d-flex"
                  >
                    <i className="bi bi-geo-alt flex-shrink-0" />
                    <div>
                      <h3>Alamat</h3>
                      <p>Infinite Learning, Nongsa Digital Park, Kota Batam</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div
                    className="info-item d-flex"
                  >
                    <i className="bi bi-telephone flex-shrink-0" />
                    <div>
                      <h3>Hubungi Kami</h3>
                      <p>+628 1211111</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div
                    className="info-item d-flex"
                  >
                    <i className="bi bi-envelope flex-shrink-0" />
                    <div>
                      <h3>Email</h3>
                      <p>info@plis.com</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9646979271192!2d104.0994175739594!3d1.1852274988034512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da2900514d61f3%3A0xc5c787a8b72c6356!2sInfinite%20Learning%20Indonesia!5e0!3m2!1sid!2sid!4v1731170124970!5m2!1sid!2sid"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 270 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label htmlFor="name-field" className="pb-2">
                        Nama Kamu
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name-field"
                        className="form-control"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email-field" className="pb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email-field"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="subject-field" className="pb-2">
                        Subjek
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject-field"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="message-field" className="pb-2">
                        Pesan
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows={10}
                        id="message-field"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit">Kirim Pesan</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </>
    </>
  );
};
