import CardWrapper from "../CardWrapper";
import Button from "@mui/material/Button";

const Ewallet = () => {
  return (
    <div>
      <CardWrapper headingText={""}>
        <img
          className="h-4/5 w-72"
          src="https://www.aziza.com.ng/wp-content/uploads/2023/03/eNaira-meaning.jpg"
          alt="e-wallet image"
        />
        <div className="text-justify space-y-4 mb-8">
          <h2 className="font-bold">Access your eNaira Wallet from UBA App</h2>
          <p>
            Secure, fast & easy way to deposit & withdraw funds from your wallet
            to your Bank app
          </p>
        </div>

        <Button
          style={{ padding: "1rem" }}
          fullWidth
          color="error"
          variant="contained"
        >
          Get Started
        </Button>
      </CardWrapper>
    </div>
  );
};

export default Ewallet;
