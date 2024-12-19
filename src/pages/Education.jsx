import { useEffect } from "react";
import AOS from "aos";

export const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Blog Section */}
      <section id="blog" className="blog section">
        {/* Section Title */}
        <div
          className="page-title dark-background"
          data-aos="zoom-out"
          style={{ backgroundImage: "url(assets/img/dashboard.jpg)" }}
        >
          <div className="container position-relative">
            <h1>Article</h1>
            <p>
              Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
              placeat quibusdam quia assumenda numquam molestias.
            </p>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current">Article</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* End Page Title */}
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>
                    Trenggono ungkap potensi pasar perikanan global 269,3 miliar
                    dolar AS
                  </h4>
                  <span className="post-date">Tue, December 12</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa quod, ullam quasi nesciunt molestiae alias nihil cumque
                    dicta pariatur laboriosam, fugiat atque neque vero nemo
                    commodi ducimus temporibus, et rem!
                  </p>
                  <a
                    href="/education-detail"
                    className="readmore stretched-link"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span className="post-date">Tue, December 12</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, autem quae? In deleniti natus adipisci numquam
                    suscipit officiis aperiam quisquam dolores blanditiis!
                    Dolore suscipit natus commodi, rem necessitatibus officia
                    sed.
                  </p>
                  <a
                    href="/education-detail"
                    className="readmore stretched-link"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* End Team Member */}
          </div>
        </div>
      </section>
      {/* /Blog Section */}

      <section id="blog-posts" className="blog-posts section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3">
              <article>
                <a href="/education-detail">
                <div className="post-img">
                  <img
                    src="assets/img/3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Tips</p>
                <h2 className="title">
                  <a href="/education-detail">
                    Dolorum optio tempore voluptas dignissimos
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  
                  <div className="post-meta">
                    <p className="post-author">kompas.com</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
                </a>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-lg-3">
              <article>
                <a href="/education-detail">
                <div className="post-img">
                  <img
                    src="assets/img/4.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Tips</p>
                <h2 className="title">
                  <a href="/education-detail">
                    Dolorum optio tempore voluptas dignissimos
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  
                  <div className="post-meta">
                    <p className="post-author">kompas.com</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
                </a>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-lg-3">
              <article>
                <a href="/education-detail">
                <div className="post-img">
                  <img
                    src="assets/img/1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Tips</p>
                <h2 className="title">
                  <a href="/education-detail">
                    Dolorum optio tempore voluptas dignissimos
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  
                  <div className="post-meta">
                    <p className="post-author">kompas.com</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
                </a>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-lg-3">
              <article>
                <a href="/education-detail">
                <div className="post-img">
                  <img
                    src="assets/img/2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Tips</p>
                <h2 className="title">
                  <a href="/education-detail">
                    Dolorum optio tempore voluptas dignissimos
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  
                  <div className="post-meta">
                    <p className="post-author">kompas.com</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
                </a>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-lg-3">
              <article>
                <a href="/education-detail">
                <div className="post-img">
                  <img
                    src="assets/img/3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Tips</p>
                <h2 className="title">
                  <a href="/education-detail">
                    Dolorum optio tempore voluptas dignissimos
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  
                  <div className="post-meta">
                    <p className="post-author">kompas.com</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
                </a>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-lg-3">
              <article>
                <a href="/education-detail">
                <div className="post-img">
                  <img
                    src="assets/img/4.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Tips</p>
                <h2 className="title">
                  <a href="/education-detail">
                    Dolorum optio tempore voluptas dignissimos
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  
                  <div className="post-meta">
                    <p className="post-author">kompas.com</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
                </a>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-lg-3">
              <article>
                <a href="/education-detail">
                <div className="post-img">
                  <img
                    src="assets/img/1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Tips</p>
                <h2 className="title">
                  <a href="/education-detail">
                    Dolorum optio tempore voluptas dignissimos
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  
                  <div className="post-meta">
                    <p className="post-author">kompas.com</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
                </a>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-lg-3">
              <article>
                <a href="/education-detail">
                <div className="post-img">
                  <img
                    src="assets/img/2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Tips</p>
                <h2 className="title">
                  <a href="/education-detail">
                    Dolorum optio tempore voluptas dignissimos
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  
                  <div className="post-meta">
                    <p className="post-author">kompas.com</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
                </a>
              </article>
            </div>
            {/* End post list item */}
          </div>
        </div>
      </section>
      {/* /Blog Posts Section */}
    </>
  );
};
