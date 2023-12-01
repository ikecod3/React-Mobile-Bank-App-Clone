import CardWrapper from "../CardWrapper";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

const Account = () => {
  const date = new Date().toLocaleTimeString();
  return (
    <div className="text-center">
      <CardWrapper headingText={""}>
        {/* main wrapper div start here */}

        {/* account number */}
        <div className="space-y-3 sm:space-y-5">
          <div className="flex items-center justify-between">
            <p></p>
            <p className="text-lg sm:text-2xl">
              Account:
              <span className="tracking-[5px] font-bold"> 1234567890</span>
            </p>
            <p className="mr-4">
              <MoreHorizIcon color="error" fontSize="large" />
            </p>
          </div>
          {/* hidden amount */}
          <div className=" flex items-center justify-between">
            <p></p>
            <p className="font-extrabold text:xl sm:text-2xl mx-4">
              NGN <span className="align-middle tracking-[8px]">********</span>
            </p>
            <p className="flex">
              <Button>
                <VisibilityOutlinedIcon color="action" />
              </Button>
            </p>
          </div>
          {/* current account */}
          <p className="text-gray-500 font-semibold">Current Account</p>
          {/* balance update here */}
          <div className="flex justify-between items-center">
            <Button className="border-gray-50">
              <AddIcon color="error" />
            </Button>
            <p className="">Balance last updated on {date} </p>
            <Button className="border-gray-50">
              <AutorenewIcon color="action" />
            </Button>
          </div>
        </div>
        {/* main div wrapper ends here */}
      </CardWrapper>
    </div>
  );
};

export default Account;
