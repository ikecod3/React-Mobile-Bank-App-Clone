import { Button } from "@mui/material";
import CardWrapper from "../CardWrapper";
import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

const TopUp = () => {
  return (
    <div>
      <CardWrapper headingText={"Mobile TopUp"}>
        <div className="space-y-10 my-8">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Age"
            fullWidth
            placeholder="Age"
          >
            <MenuItem value={10}>Current</MenuItem>
            <MenuItem value={20}>Savings</MenuItem>
            <MenuItem value={30}>Corporate</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Age"
            fullWidth
            placeholder="Age"
          >
            <MenuItem value={10}>Current</MenuItem>
            <MenuItem value={20}>Savings</MenuItem>
            <MenuItem value={30}>Corporate</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Age"
            fullWidth
            placeholder="Age"
          >
            <MenuItem value={10}>Current</MenuItem>
            <MenuItem value={20}>Savings</MenuItem>
            <MenuItem value={30}>Corporate</MenuItem>
          </Select>
        </div>

        <Button
          style={{ padding: "1rem" }}
          fullWidth
          color="error"
          variant="contained"
        >
          Continue
        </Button>
      </CardWrapper>
    </div>
  );
};

export default TopUp;
