import { useState } from "react";

export const Tab3 = () => {
  const [count, setCount] = useState(2); // State untuk nilai counter

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <>
      <div className="order-tab3 row" style={{ marginTop: "3px" }}>
        {/* Blog Section */}
        <section id="share" className="share card section">
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
                      style={{objectFit: "cover"}}
                    />
                  </div>
                  <div className="member-info" style={{ paddingTop: "1rem" }}>
                    <h4>Shrimp</h4>
                    <span>Assa Group</span>

                    <p style={{ paddingTop: "2rem" }}>
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ marginRight: "10px" }}
                      ></i>
                      Lubuk Linggau, Sumatera Selatan
                    </p>
                  </div>
                </div>

                <div className="row count">
                  <div className="col-6 unit-counter">
                    <p className="unit-title">Unit</p>
                    <div className="counter">
                      <button className="counter-btn" onClick={decrement}>
                        -
                      </button>
                      <span id="counter-value">{count}</span>
                      <button className="counter-btn" onClick={increment}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-6 unit-counter">
                    <p className="unit-title">Jumlah Pembayaran</p>
                    <div className="counter">
                      <p style={{ fontSize: "25px", fontWeight: "700" }}>
                        Rp. 5.000.000,-
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="countbtn" style={{ justifyContent: "center" }}>
                <a href="#" className="btn">
                  Hitung
                </a>
              </div>
              {/* End Team Member */}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#d3e6ef",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "90%",
              margin: "20px auto",
            }}
            className="container"
          >
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <p
                style={{ margin: "5px 0", fontSize: "18px", fontWeight: "500" }}
              >
                2 Pengembalian
              </p>
              <p
                style={{ margin: "5px 0", fontSize: "16px", fontWeight: "500" }}
              >
                Jumlah Pengembalian
              </p>
              <p
                style={{
                  margin: "10px 0",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Rp 3.150.000,-
              </p>
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #000" }}>
                  <th style={{ padding: "10px", fontWeight: "bold", width:"25%" }}>Bulan</th>
                  <th style={{ padding: "10px", fontWeight: "bold", width:"50%" }}>
                    Bagi Hasil
                  </th>
                  <th style={{ padding: "10px", fontWeight: "bold", width:"25%" }}>ROT</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #ccc" }}>
                  <td style={{ padding: "10px" }}>6 Bulan</td>
                  <td style={{ padding: "10px" }}>Rp 650.000,-</td>
                  <td style={{ padding: "10px" }}>8 %</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px" }}>12 Bulan</td>
                  <td style={{ padding: "10px" }}>Rp 650.000,-</td>
                  <td style={{ padding: "10px" }}>8 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* /Blog Section */}
      </div>
    </>
  );
};
