const HeroWrapper = () => {
  return (
    <>
      <div className="Hero--Wrapper w-full h-[110vh] sticky overflow-hidden ">
        <div className="bg-black">
          <img
            className="w-full max-h-fit h-full object-cover opacity-80"
            src="https://www.ubagroup.com/wp-content/uploads/2019/01/United-Bank-For-Africa-Hisory.jpg"
            alt="Hero wrapper image"
          />
        </div>
        <div className="bg-slate-100 border-slate-950 h-full"></div>
      </div>
    </>
  );
};

export default HeroWrapper;
