import CountUp from "react-countup";

const ReactCountUp = ({
  amt,
  className,
  prefix,
}: {
  amt: number;
  className: string;
  prefix: string;
}) => {
  return (
    <>
      <span className={`${className}`}>
        <CountUp end={amt} decimal="." prefix={prefix} />
      </span>
    </>
  );
};

export default ReactCountUp;
