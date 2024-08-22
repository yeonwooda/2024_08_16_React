type PriceProps = {
  price: number;
};

const TwayPrice = (props: PriceProps) => {
  const { price } = props;
  return <span>{price.toLocaleString()}</span>;
};
export default TwayPrice;
