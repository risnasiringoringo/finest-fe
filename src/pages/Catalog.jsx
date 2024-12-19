import { useEffect, useState } from "react";
import AOS from "aos";
import axiosInstance from "../api/axios";

export const Catalog = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    axiosInstance.get('product')
    .then(response => {
      setProducts(response.data.data);
    })
    .catch(error => {
      console.error("Error fetching products: ", error);
    });
  }, []);

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        {/* Section Title */}
        <div
          className="page-title dark-background"
          data-aos="zoom-out"
          style={{ backgroundImage: "url(assets/img/dashboard.jpg)" }}
        >
          <div className="container position-relative">
            <h1>Katalog Produk</h1>
            <p>
              Ayo pilih produk investasi kamu, kemudian mulailah jadi bagian dari penggerak ekonomi biru
            </p>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="/">Beranda</a>
                </li>
                <li className="current">Katalog Produk</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* End Page Title */}
        <div className="container">
          <form
            className="search-form d-flex flex-grow-1"
            role="search"
            style={{ marginBottom: "25px" }}
            data-aos="fade-up"
          >
            <div className="input-group search-input-group">
              <span className="input-group-text search-icon">
                <i className="bi bi-search" />
              </span>
              <input
                className="form-control roboto-font search-input"
                type="search"
                placeholder="Marina Fresh"
                aria-label="Search"
              />
            </div>
          </form>
          <div className="row gy-4" data-aos="fade-up">
            {/* Portfolio Item */}
            {products.map(product => (
            <div className="col-lg-3 col-md-6 portfolio-item" key={product.id}>
              <div className="portfolio-content h-100">
                <a
                  href={`/catalog-detail/${product.id}`}
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src={`http://localhost:3000/${product.product_pict}`}
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href={`/catalog-detail/${product.id}`} title="More Details">
                      {product.product_name}
                    </a>
                  </h4>
                  <p>
                    {" "}
                    <i className="fa-solid fa-store" /> {product.location}
                  </p>
                  <p style={{ marginTop: "5px" }}>
                    <i className="fa-solid fa-rupiah-sign" /> {product.selling_price}
                  </p>
                </div>
              </div>
            </div>
            ))}
            
            {/* Add more portfolio items similarly */}
          </div>
        </div>
      </section>
      {/* /Portfolio Section */}
    </>
  );
};
