export const Tab1 = () => {
    return (
      <>
        <div className="row" style={{ marginTop: "3px" }}>
          {/* Blog Section */}
          <section id="blog" className="blog section">
            <div className="container">
              <div className="row gy-4">
                <div
                  className="col-lg-12"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  style={{ borderTop: "none", paddingTop: "15px" }}  
                >
                  <div className="team-member d-flex align-items-start">
                    <div className="pic">
                      <img
                        src="/assets/img/udang.png"
                        className="img-fluid"
                        alt=""
                        style={{height:"150px", width: "100%"}}
                      />
                    </div>
                    <div className="member-info">
                      <h4>
                        Udang
                      </h4>
                      <span>Assa Group</span>
                      <p style={{fontSize: "17px", fontWeight: 700}}>
                        Dana Diterima
                      </p>
                      <p>
                        <b>
                            Rp. 50.000.000,-
                        </b>
                        
                      </p>
                      <a
                        href="/education-detail"
                        className="readmore stretched-link"
                      >
                        <span>Cairkan</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Team Member */}
                <div
                  className="col-lg-12"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  style={{ borderTop: "none", paddingTop: "15px" }}  
                >
                  <div className="team-member d-flex align-items-start">
                    <div className="pic">
                      <img
                        src="/assets/img/udang.png"
                        className="img-fluid"
                        alt=""
                        style={{height:"150px", width: "100%"}}
                      />
                    </div>
                    <div className="member-info">
                      <h4>
                        Udang
                      </h4>
                      <span>Assa Group</span>
                      <p style={{fontSize: "17px", fontWeight: 700}}>
                        Dana Diterima
                      </p>
                      <p>
                        <b>
                            Rp. 50.000.000,- 
                        </b>
                      </p>
                      <a
                        href="/education-detail"
                        className="readmore stretched-link"
                      >
                        <span>Cairkan</span>
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
        </div>
      </>
    );
  };
  