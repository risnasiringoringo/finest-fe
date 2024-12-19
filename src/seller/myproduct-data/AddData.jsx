import { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import PropTypes from 'prop-types';

export const AddData = ({ handleCloseModal }) => {
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    category_id: "",
    product_name: "",
    desc: "",
    location: "",
    ponds_wide: "",
    production_capacity: "",
    feed_cost: "",
    worker_cost: "",
    maintenance_cost: "",
    selling_price: "",
    estimated_income: "",
    funds_managed: "",
    margin: "",
    product_pict: null,
  });

   
  
   const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
        ...formData,
        [name]: type === "number" ? (value !== "" ? parseFloat(value) : "") : value,
    });
};

  


  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      product_pict: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "product_pict") {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/product", 
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );

      console.log(response.data); 
      alert("Product added successfully!");
      window.location.reload();
      handleCloseModal();
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/category");
        console.log(response.data);
        setCategories(response.data.data); 
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  
  return (
    <>
      <section className="adddata section">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
        >
          <div className="row">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Name Add
              </label>
              <input
                className="form-control"
                type="text"
                name="product_name"
                placeholder="ex : Fish Investment"
                value={formData.product_name}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="kategori" className="form-label">
                Category
              </label>
              <select
                className="form-select form-select-sm"
                name="category_id"
                value={formData.category_id}
                onChange={handleInputChange}
                aria-label="Small select example"
              >
                <option value="">Pilih Kategori</option>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category} {/* Pastikan nama field di API sesuai */}
                    </option>
                  ))
                ) : (
                  <option value="">No categories available</option>
                )}
              </select>

            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Description
              </label>
              <input
                className="form-control"
                type="text"
                name="desc"
                placeholder="Tell everyone about your product"
                value={formData.desc}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Location
              </label>
              <input
                className="form-control"
                type="text"
                name="location"
                placeholder="ex : Jl. Samudera, Padang, Indonesia"
                value={formData.location}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Lebar Kolam (ha)
              </label>
              <input
                className="form-control"
                type="number"
                name="ponds_wide"
                placeholder={1}
                value={formData.ponds_wide}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Kapasitas Produksi (kg)
              </label>
              <input
                className="form-control"
                type="number"
                name="production_capacity"
                placeholder={30.0}
                value={formData.production_capacity}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Biaya Pakan
              </label>
              <input
                className="form-control"
                type="number"
                name="feed_cost"
                placeholder={1000000}
                value={formData.feed_cost}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Biaya Pekerja
              </label>
              <input
                className="form-control"
                type="number"
                name="worker_cost"
                placeholder={1000000}
                value={formData.worker_cost}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Biaya Perawatan
              </label>
              <input
                className="form-control"
                type="number"
                name="maintenance_cost"
                placeholder={1000000}
                value={formData.maintenance_cost}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Harga Jual Hasil Produk
              </label>
              <input
                className="form-control"
                type="number"
                name="selling_price"
                placeholder={1000000}
                value={formData.selling_price}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Funds Managed
              </label>
              <input
                className="form-control"
                type="number"
                name="funds_managed"
                placeholder='Data ini terhitung otomatis'
                value={formData.funds_managed}
                onChange={handleInputChange}
                aria-label="default input example" 
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Estimasi Pendapatan
              </label>
              <input
                className="form-control"
                type="number"
                name="estimated_income"
                placeholder='Data ini terhitung otomatis'
                value={formData.estimated_income}
                onChange={handleInputChange}
                aria-label="default input example"
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Margin
              </label>
              <input
                className="form-control"
                type="number"
                name="margin"
                placeholder='Data ini terhitung otomatis'
                value={formData.margin}
                onChange={handleInputChange}
                aria-label="default input example"
                disabled
              />
            </div>
            

            <div className="mb-3">
              <label htmlFor="foto" className="form-label">
                Product Picture
              </label>
              <input
                className="form-control"
                type="file"
                id="foto"
                name="product_pict"
                onChange={handleFileChange}
              />
            </div>
            <div className="col-12 mb-3">
              <button className="btn btn-primary" type="submit">Submit Data</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

AddData.propTypes = {
  handleCloseModal: PropTypes.func.isRequired, 
};
