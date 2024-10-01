import "./App.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["11,999", "13,444", "1,999", "599"];
  let newPrices = ["8,999", "7,444", "999", "444"];
  let description = [
    ["8,000 DPI", "5 programmable buttons"],
    ["intuitive surface", "designed for ipad pro"],
    ["designed for ipad pro", "intuitive surface"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
