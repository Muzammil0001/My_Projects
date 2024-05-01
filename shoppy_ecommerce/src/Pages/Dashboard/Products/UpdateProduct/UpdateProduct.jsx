import React, { useState, useEffect } from "react";
import "./updateProduct.css";
import Footer from "../../../Componets/Footer/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdateProduct = () => {
  const location = useLocation();
  const [product, setProduct] = useState({});

  // OnChange Form Handle
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setProduct((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log("product: ", product);
  };
  // OnSubmit Form Handle
  const onSubmitHandle = async(e) => {
    try {
      e.preventDefault()
      const response = await axios.put(
        `https://fakestoreapi.com/products/${product.id}`,
        {
          title: product?.title,
          price: product?.price,
          image: product?.image,
          description: product?.description,
          category: product?.category,
        }
      );
      console.log("UPDATED ITEM", response.data);
      alert("Item updated successfully")
    } catch (error) {
      alert("Error in product updation");
      console.log("UPDATING PRODUCT ERROR:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (location.state && location.state.productUpdata) {
        const product = await location.state.productUpdata;
        setProduct(product);
        console.log("Update-able Data here:", product);
      }
    };
    fetchData();
  }, []);

  return (
  
    <div className="update_main">
      <div className="container">
        <h3>UPDATE PRODUCT</h3>
        <div className="form_sec">
          <form onSubmit={onSubmitHandle}>
            <div class="mb-3 d-flex flex-column mx-md-5 mx-1">
              <label for="html" class="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={product.title}
                onChange={onChangeHandle}
                class="form_input"
              />
            </div>
            <div class="mb-3 d-flex flex-column mx-md-5 mx-1">
              <label for="html#" class="form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={onChangeHandle}
                class="form_input"
              />
            </div>
            <div class="mb-3 d-flex flex-column mx-md-5 mx-1">
              <label for="html#" class="form-label">
                image URL
              </label>
              <input
                type="text"
                name="image"
                value={product.image}
                onChange={onChangeHandle}
                class="form_input"
              />
            </div>
            <div class="mb-3 d-flex flex-column mx-md-5 mx-1">
              <label for="html#" class="form-label">
                category
              </label>
              <input
                type="text"
                name="category"
                value={product.category}
                onChange={onChangeHandle}
                class="form_input"
              />
            </div>
            <div class="mb-3 d-flex flex-column mx-md-5 mx-1">
              <label for="html#" class="form-label">
                description
              </label>
              <textarea
                cols="30"
                name="description"
                rows="3"
                value={product.description}
                onChange={onChangeHandle}
                class="form_input"
              ></textarea>
            </div>

            <button type="submit" class=" mx-md-5 mx-1 text-uppercase ">
              Update Product
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateProduct;
