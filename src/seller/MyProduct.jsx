import { useEffect } from "react";
import AOS from "aos";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AddData } from "./myproduct-data/AddData";
import axios from "axios";
import { EditData } from "./myproduct-data/EditData";

export const MyProduct = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  const [showModal, setShowModal] = useState(false); 
  const [showModalEdit, setShowModalEdit] = useState(false); 
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [SelectedProduct, setSelectedProduct] = useState(null);

  const handleCloseModal = () => setShowModal(false); 
  const handleCloseModalEdit = () => setShowModalEdit(false); 
  const handleShowModal = () => setShowModal(true); 
  const handleShowModalEdit = (productId) => {
    setSelectedProduct(productId);
    setShowModalEdit(true);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/product/${productId}`);
      if (response.data.success) {
        setProducts(products.filter((product) => product.id !== productId));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Gagal menghapus produk");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/product"); 
        setProducts(response.data.data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="myproduct section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>My Product</h2>
        </div>
        {/* End Section Title */}
        <div
          className="col-12"
          id="databarang"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div
            className="card recent-sales overflow-auto"
            style={{ margin: "3rem" }}
          >
            <div className="card-body border" style={{ borderRadius: 10 }}>
              <div className="row d-flex justify-content-between align-items-center mb-3">
                <div className="col-auto">
                  <h3 className="card-title mb-0" style={{ marginTop: "30px" }}>
                    <b>Product Data</b>
                  </h3>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <a
                    className="btn btn-success"
                    href="#"
                    style={{ marginTop: "30px" }}
                    onClick={handleShowModal}
                  >
                    Add data
                  </a>
                </div>
              </div>
               {/* Tabel User */}
               {loading ? (
                <p>Loading...</p> 
              ) : (
                <table className="table table-striped table-bordered text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Produk</th>
                      <th scope="col">Category</th>
                      <th scope="col">Dana Dikelola</th>
                      <th scope="col">Margin</th>
                      <th scope="col">Estimasi Pendapatan</th>
                      <th scope="col" className="text-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.product_name}</td>
                        <td>{product.category_id}</td>
                        <td>Rp.{product.funds_managed}</td>
                        <td>{product.margin}%</td>
                        <td>Rp.{product.estimated_income}</td>
                        <td className="text-center">
                          <form
                            action="#"
                            method="POST"
                            className="d-flex justify-content-center gap-2"
                          >
                            <a className="btn btn-warning" onClick={() => handleShowModalEdit(product.id)}>
                              Edit
                            </a>
                            <a className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                              Hapus
                            </a>
                          </form>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>

      <Modal className="modal-xl" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tambahkan data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddData handleCloseModal={handleCloseModal} />
        </Modal.Body>
        <Modal.Footer>
          <span>Tambahkan data produk kamu, biarkan uang mengalir kepadamu</span>
        </Modal.Footer>
      </Modal>
      
      <Modal className="modal-xl" show={showModalEdit} onHide={handleCloseModalEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <EditData handleCloseModalEdit={handleCloseModalEdit} productId={SelectedProduct}/>
        </Modal.Body>
        <Modal.Footer>
          <span>Edit data produk kamu, biarkan uang mengalir kepadamu</span>
        </Modal.Footer>
      </Modal>
    </>
  );
};
