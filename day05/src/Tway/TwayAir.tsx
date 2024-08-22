import Tway from "./Tway";
import TwayPrice from "./TwayPrice";

const TwayAir = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        justifyContent: "center",
        width: "fit-contemt",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "",
      }}
    >
      <Tway month="08" date="19" day="월" />
      <TwayPrice price={20000} />
    </div>
  );
};

export default TwayAir;
