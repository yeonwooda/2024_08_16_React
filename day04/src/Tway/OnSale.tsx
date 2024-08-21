type OnSaleProps = {
  currency: "KRW";
  price: number;
  seats: number;
};

const OnSale = ({ currency, price, seats }: OnSaleProps) => {
  return (
    <>
      <span style={{ fontSize: "14px", color: "#808080" }}>{currency}</span>
      <span style={{ fontSize: "24px", color: "#1a1a1a" }}>
        {price.toLocaleString()}
      </span>
      <span style={{ fontSize: "16px", color: "#d22c26" }}>{seats}석</span>
    </>
  );
};
export default OnSale;
