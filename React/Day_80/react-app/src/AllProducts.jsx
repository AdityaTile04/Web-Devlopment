import Product from "./Product";

function AllProducts() {
  let options = ["fast", "durable", "hi-tech"]
  return (
    <>
      <Product
        title="laptop"
        price={40000}
        description="Dell Inspiron"
        features={options}
      />
      <Product title="pen" price={10} description="Trimax" />
      <Product title="mobile" price={20000} description="I phone 16" />
    </>
  );
}

export default AllProducts;
