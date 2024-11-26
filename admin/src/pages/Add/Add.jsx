import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  const [image, setImage] = useState();

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: null,
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onImageChangeHandler = (event) => {
    const file = event.target.files[0];
    setData((prevData) => ({ ...prevData, image: file }));
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !data.name ||
      !data.description ||
      !data.category ||
      !data.price ||
      !data.image
    ) {
      alert("Please fill out all fields!");
      return;
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    console.log("Submitting form data:", formData);
    // Add API POST request here
  };

  useEffect(() => {
    console.log("Data updated", data);
  }, [data]);

  return (
    <div className="add">
      <form className="flex-col" onSubmit={handleSubmit}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Product Preview"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={onImageChangeHandler}
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="">Select</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
          </div>
          <div className="price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
