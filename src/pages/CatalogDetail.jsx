import { FinancialStatement } from "./ToogleCatalogDetail/FinancialStatement";
import { Information } from "./ToogleCatalogDetail/Information";
import { Payment } from "./Payment";
import { Refund } from "./ToogleCatalogDetail/Refund";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const CatalogDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/product/${id}`);
        setProduct(response.data.data); 
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    if (id) {
      fetchProductDetail(); 
    }
  }, [id]);

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <>
      <section id="catdet" className="catdet section">
        <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative">
          <img
            src={`http://localhost:3000/${product.product_pict}`}
            className="img-fluid animated"
            alt="Product"
          />
          <h1>{product.product_name}</h1>
          <h3>
            {product.product_name}<br />
            {product.location}
          </h3>
          <p>
            Produk investasi ini memberikan peluang bagi para pelaku tambak dalam negeri untuk pengembangan usaha dan sebagai wadah untuk peningkatan angka partisipasi ekonomi biru
          </p>
        </div>
      </section>

      <section id="tab-detail" className="tab-detail section">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-12">
              {/* Tabs */}
              <ul className="nav nav-pills mb-3" role="tablist">
                <li>
                  <a
                    className="nav-link active"
                    data-bs-toggle="pill"
                    href="#about-tab1"
                    aria-selected="true"
                    role="tab"
                  >
                    <b>Informasi</b>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-bs-toggle="pill"
                    href="#about-tab2"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                  >
                    <b>Keuangan</b>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-bs-toggle="pill"
                    href="#about-tab3"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                  >
                    <b>Pengembalian</b>
                  </a>
                </li>
              </ul>
              {/* End Tabs */}
              {/* Tab Content */}
              <div className="tab-content">
                <Information product={product}/>
                <FinancialStatement product={product}/>
                <Refund />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="button-trigger" className="button-trigger container">
  <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#paymentModal"
  >
    Bayar Sekarang
  </button>

  {/* Modal */}
  <div
    className="modal fade"
    id="paymentModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="paymentModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body">
        <Payment product={product} />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};
