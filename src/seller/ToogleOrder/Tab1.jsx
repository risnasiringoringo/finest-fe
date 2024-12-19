export const Tab1 = () => {
  return (
    <>
      <section id="order-contract" className="order-contract section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="features-image col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <img src="/assets/img/udang.png" alt="" />
            </div>
            <div className="col-lg-6">
              <div
                className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div>
                  <h4>Udang</h4>
                  <p>1yrs Kontrak</p>
                  <p style={{ marginTop: "1rem", fontSize: "16px" }}>
                    Deskripsi
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    Investasi ini merupakan investasi dalam bidang pertambakan udang dengan mengedepankan kualitas yang baik. Produk investasi ini dilakukan dalam kontrak tahunan dan margin menyesuaikan. Pertambakan ini terletak di kawasan strategis pasar sehingga memiliki daya saing tinggi. 
                  </p>
                </div>
              </div>
              {/* End Features Item*/}
            </div>
            <div className="row">
              <div className="prof">
                <div
                  className="col-lg-12"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="team-member d-flex align-items-start">
                    <div className="pic">
                      <img
                        src="/assets/img/finest-logo.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="member-info">
                      <h4>Assa Group</h4>
                      <span>Lubuk Linggau, Sumatera Selatan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr style={{marginTop: "3rem"}}/>

            <div className="order-payment">
              <div className="container section-title">
                <h2 style={{ fontSize: "18px" }}>Harus Dibayar</h2>
              </div>
              <div className="card">
                <div className="row">
                    <div className="col-6">
                        <p style={{paddingLeft:"5rem"}}>2x</p>
                    </div>
                    <div className="col-6">
                        <p style={{textAlign:"right", paddingRight:"5rem"}}>250.000</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <p style={{paddingLeft:"5rem"}}>Total</p>
                    </div>
                    <div className="col-6">
                        <p style={{textAlign:"right", paddingRight:"5rem"}}>500.000</p>
                    </div>
                </div>

                <div className="send" style={{justifyContent: "center"}}>
                    <a href="" className="btn" >Send</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Features Section */}
    </>
  );
};
