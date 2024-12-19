import { useEffect } from "react";
import AOS from "aos";
import { useState } from "react";
import { Modal } from "react-bootstrap";

export const Report = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [showModal, setShowModal] = useState(false); // State untuk modal

  const handleCloseModal = () => setShowModal(false); // Menutup modal
  const handleShowModal = () => setShowModal(true); // Menampilkan modal
  return (
    <>
      {/* Services Section */}
      <section id="report" className="report section ">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Report</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay={100}
          style={{ marginTop: "30px" }}
        >
          <div className="row g-4">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay={100}>
              <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                  <i className="fa-solid fa-fish-fins"></i>
                </div>
                <div>
                  <h3>Perkembangan Ikan</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <button
                    className="read-more"
                    style={{ border: "none", background: "none" }}
                    onClick={handleShowModal}
                  >
                    Edit <i className="bi bi-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            {/* End Service Card */}
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay={200}>
              <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                  <i className="fa-solid fa-fish-fins"></i>
                </div>
                <div>
                  <h3>Perkembangan Ikan Laut</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <button
                    className="read-more"
                    style={{ border: "none", background: "none" }}
                    onClick={handleShowModal}
                  >
                    Edit <i className="bi bi-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            {/* End Service Card */}
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay={300}>
              <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                  <i className="fa-solid fa-shrimp"></i>
                </div>
                <div>
                  <h3>Perkembangan Udang</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <button
                    className="read-more"
                    style={{ border: "none", background: "none" }}
                    onClick={handleShowModal}
                  >
                    Edit <i className="bi bi-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            {/* End Service Card */}
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay={400}>
              <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                  <i className="fa-solid fa-fish-fins"></i>
                </div>
                <div>
                  <h3>Perkembangan Lele</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <button
                    className="read-more"
                    style={{ border: "none", background: "none" }}
                    onClick={handleShowModal}
                  >
                    Edit <i className="bi bi-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            {/* End Service Card */}
          </div>
        </div>
      </section>
      {/* /Services Section */}

      <Modal className="modal-xl" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section id="edit-report" className="edit-report section">
            {/* Section Title */}
            <div className="container section-title">
              <h2>Edit dan Tampilkan Data</h2>
              <p style={{ marginBottom: "30px" }}>
                <span>
                  Ayo laporkan perkembangan bisnis perikanan kamu agar client
                  tahu!
                </span>{" "}
              </p>
            </div>
            {/* End Section Title */}
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="info-wrap">
                    <img src="/assets/img/about.jpg" alt="" />
                    <div className="info-item d-flex">
                      <div>
                        <div className="mb-3">
                          <label htmlFor="foto" className="form-label">
                            Dokumentasi Produk
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="foto"
                            name="foto"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Info Item */}
                  </div>
                </div>
                <div className="col-lg-7">
                  <form action="#" method="post" className="form-edit">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label htmlFor="fish-weight" className="pb-2">
                          Berat Ikan
                        </label>
                        <input
                          type="text"
                          name="fish-weight"
                          id="fish-weight"
                          className="form-control"
                          required=""
                          placeholder="100 gram"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="fish-length" className="pb-2">
                          Panjang Ikan
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="fish-length"
                          id="fish-length"
                          required=""
                          placeholder="30 cm"
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="fish-qty" className="pb-2">
                          Jumlah Ikan
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="fish-qty"
                          id="fish-qty"
                          required=""
                          placeholder="100 ekor"
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="description-report" className="pb-2">
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          name="description-report"
                          rows={10}
                          id="description-report"
                          required=""
                          defaultValue={""}
                          placeholder="Kolam ikan kembung yang sehat saat ini memiliki air yang jernih dengan sirkulasi yang baik, menjaga kadar oksigen terlarut tetap optimal. Suhu air berkisar antara 27-30°C, cocok untuk mendukung pertumbuhan ikan. Kolam dilengkapi dengan tanaman air atau aerator untuk meningkatkan kualitas lingkungan, serta pengawasan rutin dilakukan untuk memastikan ikan aktif, sehat, dan bebas dari penyakit."
                        />
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit">Edit</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Contact Form */}
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <span></span>
        </Modal.Footer>
      </Modal>
    </>
  );
};
