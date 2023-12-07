import Image3 from '../public/image3.jpg';
import PlayStore from '../public/playstore.svg';

const SecondDownload = () => {
  return (
    <div className="h-[90vh] flex xl:flex-row lg:flex-row md:flex-col flex-col w-full justify-between items-center bg-primary pl-0 xl:pl-12 lg:pl-12 md:pl-12">
      <div className="flex flex-col">
        <div>
          <h1 className="text-white text-start text-[40px] font-extrabold">
            Download Our Super App
          </h1>
          <p className="text-white text-[20px] text-start">
            Available for iOS and Android
          </p>

          <div className="flex gap-x-4 mt-4">
            <img
              src={PlayStore.src}
              className="text-white text-[28px] px-1 md:px-2 lg:px-3 xl:px-4  h-10 md:h-12 lg:h-[3.5rem] xl:h-[3.5rem] md:w-24 lg:w-28 xl:w-28 rounded-md border border-[#fff] w-20"
            />

            <img
              src={PlayStore.src}
              className="text-white text-[28px] px-1 md:px-2 lg:px-3 xl:px-4  h-10 md:h-12 lg:h-[3.5rem] xl:h-[3.5rem] md:w-24 lg:w-28 xl:w-28 rounded-md border border-[#fff] w-20"
            />
          </div>
        </div>
      </div>

      <img
        className="flex-1 xl:w-[600px] p-4 xl:p-0 lg:p-0 md:p-0 mt-8 lg:mt-0 md:mt-8 xl:mt-0 xl:h-full lg:w-[600px] w-[600px] lg:h-full md:h-[300px] h-[250px] md:w-[550px]"
        src={Image3.src}
        alt="image"
      />
    </div>
  );
};

export default SecondDownload;
