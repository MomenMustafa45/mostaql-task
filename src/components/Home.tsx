import React from "react";
import Button from "../UI/Button";
import StatsIcon from "../UI/StatsIcon";

const Home = () => {
  return (
    <div className=" mt-20 items-center">
      <div className="flex justify-evenly mb-10">
        <div>
          <img
            src={require("../assests/sven-mieke-_u9lt9KYK1I-unsplash.jpg")}
            alt="hello"
            height={270}
            width={270}
            className="rounded"
          />
        </div>
        <div className="flex flex-col justify-start items-end space-y-10 self-center w-1/3">
          <h1 className="text-[#78a4dd] text-6xl font-bold drop-shadow-md">
            منصة تجربة
          </h1>
          <p className="text-2xl break-words text-right">
            تحول الي التجارة الالكترونية بسهولة وسرعة وامتلك متجر الكتروني خاص
            بك بجميع مزايا الجارة الالكترونية مع توفير الخدمات المساندة
          </p>
          <Button classname="text-lg">ابدأ الان</Button>
        </div>
      </div>
      <div className="flex flex-row-reverse py-10 justify-evenly">
        <p className="text-3xl text-right break-words font-semibold">
          احصائيات المستخدمين
          <br /> منصة تجربة
        </p>
        <StatsIcon name="متجر الكتروني" number={1.8} unit="ألف" />
        <StatsIcon name="مستخدم للمنصة" number={14} unit="ألف" />
        <StatsIcon name="مبيعات المنصة" number={1.3} unit="مليون" />
      </div>
    </div>
  );
};

export default Home;
