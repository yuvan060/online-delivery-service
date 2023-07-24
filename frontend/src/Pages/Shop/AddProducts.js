import Navbar from "../../Components/Navbar";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function handleSubmit(e) {
  e.preventDefault();
}

function AddProduct() {
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
                    <MenuItem value={c.content}>{c.content}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="field-container">
              <TextField
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
                required
                variant="outlined"
                label="Price(in Rs.)"
                fullWidth
              />
            </div>
            <div className="field-container">
              <TextField
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
      </div>
    </>
  );
}

export default AddProduct;
