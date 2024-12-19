import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const Payment = ({ product }) => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const navigate = useNavigate(); 

  const handlePayNow = async () => {
    try {
      // Kirim data order ke server
      await axios.post("http://localhost:3000/api/v1/order", {
        product_id: product.id,
        investment_amount: investmentAmount,
      });

      // Menampilkan sukses alert jika order berhasil
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Pembayaran berhasil",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        // Menutup modal
        const modal = document.querySelector("#paymentModal");
        const modalInstance = window.bootstrap.Modal.getInstance(modal);
        modalInstance.hide();

        // Mengarahkan pengguna ke halaman catalog
        navigate("/catalog");
      });
    } catch (error) {
      console.error("Error making order", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Terjadi kesalahan saat membuat order",
      });
    }
  };

  return (
    <>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-header border-0">
            <h2 className="modal-title text-center w-100" id="paymentModalLabel">
              Detail Pembayaran
            </h2>
          </div>
          <div className="modal-body">
            <p className="text-center mb-3">
              Kamu akan melakukan pembayaran sebesar
            </p>
            <div className="input-group mb-4">
              <input
                type="number"
                className="form-control text-center fs-5"
                placeholder="Rp 500.000 ,00"
                aria-label="Investment amount"
                style={{ borderRadius: "10px", fontWeight: "500" }}
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
              />
            </div>
            <div className="row mb-4">
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <h6>Detail investor</h6>
                <p>Nama</p>
                <p>Email</p>
                <p>Nomor HP</p>
                <p>Perusahaan</p>
              </div>
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <h6>&nbsp;</h6>
                <p>John Doe</p>
                <p>johndoe123@gmail.com</p>
                <p>0812-3456-7890</p>
                <p>Marina Fresh</p>
              </div>
              <div className="col-12 col-md-4 text-md-end">
                <h6>Pilih metode pembayaran</h6>
                <button
                  className="btn btn-outline-primary w-100 mb-2"
                  style={{ borderRadius: "20px" }}
                >
                  E-Wallet
                </button>
                <button
                  className="btn btn-outline-primary w-100 mb-2"
                  style={{ borderRadius: "20px" }}
                >
                  Direct Debit
                </button>
                <button
                  className="btn btn-outline-primary w-100"
                  style={{ borderRadius: "20px" }}
                >
                  Mobile Banking
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h6>Total</h6>
              <h6 className="fw-bold">Rp {investmentAmount}</h6>
            </div>
          </div>
          <div className="modal-footer border-0 d-flex justify-content-center flex-wrap">
            <button
              type="button"
              className="btn btn-primary px-5 py-2 mb-2 mb-md-0 mx-2"
              style={{ borderRadius: "10px" }}
              onClick={handlePayNow}
            >
              Bayar Sekarang
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-2"
              data-bs-dismiss="modal"
            >
              Batalkan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Payment.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};