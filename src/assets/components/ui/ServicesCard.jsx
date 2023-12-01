import { servicesdata } from "../../../servicesdata";

import { Button } from "@mui/material";

const ServicesCard = () => {
  return (
    <>
      <div className="border-gray-900 relative flex items-center ">
        <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {servicesdata.map(({ Icon, id, altText }) => {
            return (
              <div
                key={id}
                className="text-center cursor-pointer px-3 inline-block py-2 hover:scale-110 ease-in-out duration-300 overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center ">
                  <p className="border-2 border-slate-200 py-2 px-4 rounded-lg">
                    <Button>
                      <Icon color="error" fontSize="large" />
                    </Button>
                  </p>
                  <p className="w-24 pb-4 overflow-x-hidden overflow-ellipsis whitespace-nowrap">
                    {altText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
