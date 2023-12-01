/* eslint-disable react/prop-types */
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";

const CardWrapper = ({ headingText, children }) => {
  return (
    <div className="max-h-screen flex flex-col items-center justify-center sm:mx-10 gap-3">
      <div className="bg-white shadow-md w-11/12 my-4 rounded-lg p-4">
        <h1 className="font-bold text-lg lg:text-4xl pb-4">{headingText}</h1>
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
