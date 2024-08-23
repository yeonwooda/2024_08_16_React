type DateProps = {
  month: string;
  date: string;
  day: string;
};

const Tway = (props: DateProps) => {
  const { month, date, day } = props;

  return (
    <span style={{ color: "#4d4d4d" }}>
      {month}-{date}-({day})
    </span>
  );
};

export default Tway;
