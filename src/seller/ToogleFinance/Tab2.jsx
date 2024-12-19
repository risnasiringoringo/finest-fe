export const Tab2 = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              {/* Default Accordion */}
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Shrimp - Assa Group
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="container section-title">
                        <h2 style={{ fontSize: "18px" }}>Detail Pengembalian</h2>
                      </div>

                      <div className="card">
                        <h5>Mulai</h5>
                        <p>August 2024</p>
                      </div>

                      <div className="detail row">
                        {/* Kolom Pertama */}
                        <div className="col-lg-6 col-md-6 service-item">
                          <div className="row mb-3">
                            <div className="icon col-auto flex-shrink-0">
                              <i
                                className="bi bi-briefcase"
                                style={{ color: "#f57813" }}
                              />
                            </div>
                            <div className="col">
                              <p className="description">Dana Dikelola</p>
                              <h4 className="title">Rp. 5.000.000,-</h4>
                            </div>
                          </div>
                          <div className="row" style={{ marginTop: "3rem" }}>
                            <div className="icon col-auto flex-shrink-0">
                              <i
                                className="bi bi-bar-chart"
                                style={{ color: "#d90769" }}
                              />
                            </div>
                            <div className="col">
                              <p className="description">Margin (p.a)</p>
                              <h4 className="title">20.0%</h4>
                            </div>
                          </div>
                          <div className="row" style={{ marginTop: "3rem" }}>
                            <div className="icon col-auto flex-shrink-0">
                              <i
                                className="bi bi-card-checklist"
                                style={{ color: "#15a04a" }}
                              />
                            </div>
                            <div className="col">
                              <p className="description">Margin Diperoleh</p>
                              <h4 className="title">Rp. 1.300.000,-</h4>
                            </div>
                          </div>
                        </div>

                        {/* Kolom Kedua */}
                        <div className="col-lg-6 col-md-6 service-item">
                          <div className="row mb-3">
                            <div className="icon col-auto flex-shrink-0">
                              <i
                                className="bi bi-brightness-high"
                                style={{ color: "#f5cf13" }}
                              />
                            </div>
                            <div className="col">
                              <p className="description">Selesai</p>
                              <h4 className="title">Oktober 2025</h4>
                            </div>
                          </div>
                          <div className="row" style={{ marginTop: "3rem" }}>
                            <div className="icon col-auto flex-shrink-0">
                              <i
                                className="bi bi-calendar4-week"
                                style={{ color: "#1335f5" }}
                              />
                            </div>
                            <div className="col">
                              <p className="description">Durasi</p>
                              <h4 className="title">1 Tahun</h4>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div className="return-history">
                        <h3
                          className="resume-title"
                          style={{ fontSize: "18px" }}
                        >
                          Riwayat Pengembalian
                        </h3>
                        <div className="resume-item">
                          <div className="row">
                            <div className="col-8">
                              <h4>Pembayaran Margin</h4>
                            </div>
                            <div
                              className="col-4"
                              style={{
                                textAlign: "right",
                                paddingRight: "5rem",
                              }}
                            >
                              <h4 style={{color: "green", fontSize: "14px"}}>Success</h4>
                            </div>
                          </div>
                          <p>Tenggat waktu</p>
                          <span>1 Januari 2025</span> <br />
                          <h5>Rp. 650.000,-</h5>
                        </div>
                        {/* Edn Resume Item */}
                        <div className="resume-item">
                        <div className="row">
                            <div className="col-8">
                              <h4>Pembayaran Margin</h4>
                            </div>
                            <div
                              className="col-4"
                              style={{
                                textAlign: "right",
                                paddingRight: "5rem",
                              }}
                            >
                              <h4 style={{color: "orange", fontSize: "14px"}}>Pending</h4>
                            </div>
                          </div>
                          <p>Tenggat waktu</p>
                          <span>1 Januari 2025</span> <br />
                          <h5>Rp. 650.000,-</h5>
                        </div>
                        {/* Edn Resume Item */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Default Accordion Example */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
