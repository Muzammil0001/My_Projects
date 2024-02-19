import React, { useState } from "react";
import "./createProduct.css";
import axios from "axios";


const CreateProduct = () => {
  const [productData, setProductData] = useState("");

  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setProductData((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log("productData: ", productData);
  };

  const onSubmitHandle = async () => {
    try {
    
      const response = await axios.post("https://fakestoreapi.com/products", {
        title: productData.title,
        price: productData.price,
        image: productData.image,
        description: productData.description,
        category: productData.category,
      });
      alert("Successfully Product Created");
      console.log("CREATED PRODUCT:", response.data);
    } catch (error) {
      alert("There is some error in creating product");
      console.log("CREATE PRODUCT ERROR:", error);
    }
  };

  return (
    <>
      <div className="createProduct_main">
        <div className="container">
          <h3>INSERT PRODUCT</h3>
          <div className="form_sec">
            <form onSubmit={onSubmitHandle}>
              <div class="mb-3 d-flex flex-column mx-md-5 mx-1">
                <label for="#" class="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={productData.title}
                  onChange={onChangeHandle}
                  class="form_input"
                />
              </div>
              <div class="mb-3 d-flex flex-column mx-md-5 mx-1">
                <label for="#" class="form-label">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={onChangeHandle}
                  class="form_input"
                />
              </div>
              <div class="mb-3 d-flex flex-column mx-md-5 mx-1">
                <label for="#" class="form-label">
                  image URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={productData.image}
                  onChange={onChangeHandle}
                  class="form_input"
                />
              </div>
              <div class="mb-3 d-flex flex-column mx-md-5 mx-1">
                <label for="#" class="form-label">
                  category
                </label>
                <input
                  type="text"
                  name="category"
                  value={productData.category}
                  onChange={onChangeHandle}
                  class="form_input"
                />
              </div>
              <div class="mb-3 d-flex flex-column mx-md-5 mx-1">
                <label for="#" class="form-label">
                  description
                </label>
                <textarea
                  cols="30"
                  name="description"
                  rows="3"
                  value={productData.description}
                  onChange={onChangeHandle}
                  class="form_input"
                ></textarea>
              </div>

              <button type="submit" class=" mx-md-5 mx-1 text-uppercase ">
                Create Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
