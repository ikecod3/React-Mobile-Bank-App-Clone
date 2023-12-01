import CardWrapper from "../CardWrapper";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div>
      <CardWrapper headingText={"Services"}>
        {/* <h1>I am Services</h1> */}
        <ServicesCard />
      </CardWrapper>
    </div>
  );
};

export default Services;
