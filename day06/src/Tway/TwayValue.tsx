import OnSale from "./OnSale";
import SoldOut from "./SoldOut";

export type TwayValueProps = {
  currency: "KRW";
  price: number;
  seats: number;
};

const TwayValue = (props: TwayValueProps) => {
  const isOnSale = !props.seats; // !! 두개 붙이면 자기 코드가 나옴
  return (
    <div
      style={{
        width: "220px",
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        border: "1px solid #e0e0e0",
      }}
    >
      {isOnSale ? <OnSale {...props} /> : <SoldOut />}
    </div>
  );
};
export default TwayValue;
