import { Button } from "@mui/material";
import CardWrapper from "../CardWrapper";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddIcon from "@mui/icons-material/Add";

const Customize = () => {
  return (
    <div>
      <CardWrapper headingText={""}>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extralight">Customize your home</h2>
          {/* two button interactive button sleeps heere */}
          <div className="flex space-x-4">
            <p className="bg-gray-100 rounded-md p-2">
              <Button>
                <EditOutlinedIcon color="error" />
              </Button>
            </p>
            <p className="bg-gray-100 rounded-md p-2">
              <Button>
                <AddIcon color="error" />
              </Button>
            </p>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default Customize;
