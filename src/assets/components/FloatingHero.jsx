import Account from "./ui/Account";
import Customize from "./ui/Customize";
import Ewallet from "./ui/Ewallet";
import Loans from "./ui/Loans";
import MyBills from "./ui/MyBills";
import Services from "./ui/Services";
import TopUp from "./ui/TopUp";

const FloatingHero = () => {
  return (
    <div className=" left-0 right-0 top-3 absolute max-h-screen h-[110vh] my-24 mt-24">
      <div className="flex flex-col max-h-screen overflow-y-auto scrollbar-hide">
        <Account />
        <Services />
        <Loans />
        <Ewallet />
        <MyBills />
        <TopUp />
        <Customize />
      </div>
    </div>
  );
};

export default FloatingHero;
