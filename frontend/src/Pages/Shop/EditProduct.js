import { useState } from "react";
import Navbar from "../../Components/Navbar";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function EditProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const notify = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(items);
    try {
      const res = await axios.put(
        "http://localhost:8080/api/products/update-product",
        items
      );
      console.log(res);
      notifySuccess(res.data);
      navigate("/");
    } catch (e) {
      notify(e.message);
    }
  }

  const [items, setItems] = useState(location.state?.item);
  const category = [
    { content: "Fruits & Vegetables" },
    { content: "Snacks & Biscuits" },
    { content: "Instant Food" },
    { content: "Dairy & Bread" },
    { content: "Chocolates & Icecreams" },
    { content: "Rice, Atta, Dal" },
    { content: "Tea & Coffee" },
    { content: "Eggs, Meat & Fish" },
    { content: "Oil, Masala, Sauces" },
    { content: "Drinks & Juices" },
    { content: "Pet Supplies" },
    { content: "Health & Nutrition" },
    { content: "Breakfast Food" },
    { content: "Baby Care " },
    { content: "Cleaning & Household" },
    { content: "Hygiene & Personal care" },
    { content: "Bath & Body" },
    { content: "Beauty & Makeup" },
    { content: "Kitchen & Home" },
  ];
  return (
    <>
      <Navbar />
      <div className="flex-center-full-hw">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <h1>Add Product</h1>
            <div className="field-container">
              <TextField
                value={items.name}
                onChange={(e) => {
                  setItems({
                    ...items,
                    name: e.target.value,
                  });
                }}
                fullWidth
                variant="outlined"
                required
                label="Product Name"
              />
            </div>
            <div className="field-container">
              <label>Product Image*</label>
              <TextField type="file" fullWidth variant="outlined" />
            </div>
            <div className="field-container">
              <FormControl fullWidth required>
                <InputLabel>Choose Category</InputLabel>
                <Select label="Choose Category">
                  {category.map((c) => (
                    <MenuItem
                      value={c.content}
                      onClick={() => {
                        setItems({
                          ...items,
                          category: c.content,
                        });
                      }}
                    >
                      {c.content}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="field-container">
              <TextField
                value={items.description}
                onChange={(e) => {
                  setItems({
                    ...items,
                    description: e.target.value,
                  });
                }}
                fullWidth
                multiline
                required
                minRows={5}
                variant="outlined"
                label="Product Description"
              />
            </div>
            <div className="field-container">
              <TextField
                value={items.price}
                onChange={(e) => {
                  setItems({
                    ...items,
                    price: e.target.value,
                  });
                }}
                required
                variant="outlined"
                label="Price(in Rs.)"
                fullWidth
              />
            </div>
            <div className="field-container">
              <TextField
                value={items.quantity}
                onChange={(e) => {
                  setItems({
                    ...items,
                    quantity: e.target.value,
                  });
                }}
                type="number"
                required
                variant="outlined"
                label="Quantity"
                fullWidth
              />
            </div>
          </div>
          <div className="field-container">
            <Button
              fullWidth
              type="submit"
              variant="contained"
              className="bg-orange"
            >
              Add Product
            </Button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default EditProduct;
