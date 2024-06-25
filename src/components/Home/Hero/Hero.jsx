import banner1 from "../../../assets/Banner/Banner-1.jpeg";
import banner2 from "../../../assets/Banner/Banner-2.jpeg";
import banner3 from "../../../assets/Banner/Banner-3.jpeg";
import banner4 from "../../../assets/Banner/Banner-4.jpeg";
import BannerText from "./BannerText";

const Hero = () => {
  return (
    <div className="bg-[#F7F7F8] py-5">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-12 gap-5">
          <div
            style={{ backgroundImage: `url(${banner1})` }}
            className={`lg:col-span-5 flex flex-col justify-center text-white bg-cover bg-center bg-no-repeat rounded-xl p-8 h-[440px] lg:h-[500px]`}
          >
            <BannerText
              heading={"Sony 5g Headphones"}
              description={"Only Music. Nothing Else."}
              buttonText={"View Details"}
              buttonColor={"primary"}
            />
          </div>
          <div
            style={{ backgroundImage: `url(${banner2})` }}
            className="lg:col-span-3 text-white bg-cover bg-center bg-no-repeat rounded-xl p-8 h-[440px] lg:h-[500px]"
          >
            <div className="text-center">
              <BannerText
                heading={"Air Mavic 3"}
                description={"As powerful as it is portable"}
                buttonText={"Shop Now"}
                buttonColor={"black"}
              />
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="grid gap-5 h-[500px]">
              <div style={{ backgroundImage: `url(${banner3})` }} className=" text-white bg-cover bg-center bg-no-repeat rounded-xl p-8">
                <BannerText heading={"Handheld"} description={"USB 3 rechargeable"} buttonText={"Shop Now"} buttonColor={"black"} />
              </div>
              <div style={{ backgroundImage: `url(${banner4})` }} className=" text-white bg-cover bg-center bg-no-repeat rounded-xl p-8">
                <BannerText heading={"Gearbox"} description={"Upto 30% discount"} buttonText={"Shop Now"} buttonColor={"black"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
