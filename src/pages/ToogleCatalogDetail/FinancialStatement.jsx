import PropTypes from "prop-types";

export const FinancialStatement = ({ product }) => {
  return (
    <>
      <div className="tab-pane fade" id="about-tab2" role="tabpanel">
      <div className="d-flex align-items-center">
          <i className="bi bi-check2" />
          <h4>Dana Invest Minimal Rp.{product.selling_price}</h4>
        </div>
        <div className="d-flex align-items-center mt-4">
          <i className="bi bi-check2" />
          <h4>Dana dikelola Rp.{product.funds_managed}</h4>
        </div>
        <div className="d-flex align-items-center mt-4">
          <i className="bi bi-check2" />
          <h4>Proyeksi Margin Didapatkan Rp.{product.margin}</h4>
        </div>
        
      </div>
    </>
  );
};

FinancialStatement.propTypes = {
  product: PropTypes.shape({
    funds_managed: PropTypes.number.isRequired,
    margin: PropTypes.number.isRequired,
    selling_price: PropTypes.number.isRequired,
  }).isRequired,
};
