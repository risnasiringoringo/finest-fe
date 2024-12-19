export const Tab2 = () => {
  return (
    <>
      <div className="tab2-order">
        <div className="order-fishfarm">
          <div className="card">
            <h5>Dana dikelola</h5>
            <p>Rp. 50.000.000,-</p>
          </div>
        </div>

        <div className="order-fishfarm">
          <div className="card">
            <h5>Akumulasi Margin</h5>
            <p>Rp. 2.500.000,-</p>
          </div>
        </div>

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
                        Berlangsung
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur. Voluptates omnis accusantium soluta incidunt illo voluptatum repellendus inventore libero, illum, quaerat eum officiis ipsam, aut quod at in saepe.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Menunggu konfirmasi
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the second items accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. Its also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Selesai
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      <div
                          className="return-history"
                          style={{ marginTop: "1rem" }}
                        >
                          <div className="resume-item">
                            <h4>Udang</h4>
                            <p style={{ marginTop: "0px" }}>Assa Group</p>

                            <div className="row">
                              <div className="col-4">
                                <p>Dana Dikelola</p>
                                <h5>Rp. 650.000,-</h5>
                              </div>
                              <div className="col-8">
                                <p>Margin Didapatkan</p>
                                <h5>Rp. 650.000,-</h5>
                              </div>
                            </div>
                          </div>
                          {/* Edn Resume Item */}
                          <div className="resume-item">
                            <h4>Udang</h4>
                            <p style={{ marginTop: "0px" }}>Assa Group</p>

                            <div className="row">
                              <div className="col-4">
                                <p>Dana Dikelola</p>
                                <h5>Rp. 650.000,-</h5>
                              </div>
                              <div className="col-8">
                                <p>Margin Didapatkan</p>
                                <h5>Rp. 650.000,-</h5>
                              </div>
                            </div>
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
      </div>
    </>
  );
};
