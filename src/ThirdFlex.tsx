import Image3 from '../public/image3.jpg';

const ThirdFlex = () => {
  return (
    <div className="min-h-screen flex-col md:flex-col p-4 xl:flex-row lg:flex-row flex w-full xl:justify-between lg:justify-between justify-start items-center bg-primary sm:px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="xl:flex-1 flex mt-8 lg:flex-1 w-full">
        <div>
          <h1 className="text-white text-start text-[40px] font-extrabold">
            Got a bike?
          </h1>
          <p className="text-white xl:text-[16px] text-[14px] text-start">
            If you’re a bike owner and are looking to double your earning
            <br />
            capacity, we want you on the Hurri Team.
          </p>
          <button className="bg-[#44cdaa] font-semibold mt-4 xl:mt-8 lg:text-[14px] md:text-[14px] text-[14px] xl:text-[16px] rounded-md flex justify-center items-center p-2 xl:p-4">
            Partner with us!
          </button>
        </div>
      </div>

      <img
        className="flex-1 mt-8 rounded-md xl:w-[600px] xl:h-[400px] lg:w-[600px] lg:h-[400px] md:h-[300px] h-[250px] md:w-[700px]"
        src={Image3.src}
        alt="image"
      />
    </div>
  );
};

export default ThirdFlex;
