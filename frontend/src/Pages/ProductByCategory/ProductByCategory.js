import Navbar from "../../Components/Navbar";

function ProductByCategory() {
  const name =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  return (
    <>
      <Navbar />
      <center>
        <h1>{name}</h1>
      </center>
    </>
  );
}

export default ProductByCategory;
