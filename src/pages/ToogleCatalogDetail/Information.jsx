import PropTypes from "prop-types";

export const Information = ({ product }) => {
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="about-tab1"
        role="tabpanel"
      >
        <div className="d-flex align-items-center">
          <i className="bi bi-check2" />
          <h4>Deskripsi Produk Investasi</h4>
        </div>
        <p>{product.desc}</p>
        <div className="d-flex align-items-center mt-4">
          <i className="bi bi-check2" />
          <h4>Luas Kolam {product.ponds_wide} ha</h4>
        </div>

        <div className="d-flex align-items-center mt-4">
          <i className="bi bi-check2" />
          <h4>Kapasitas Produksi {product.production_capacity} kg/bln</h4>
        </div>
      </div>
    </>
  );
};

Information.propTypes = {
  product: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    ponds_wide: PropTypes.number.isRequired,
    production_capacity: PropTypes.number.isRequired,
  }).isRequired,
};
