import Image4 from './public/image4.jpg';

const Picture = () => {
  return (
    <div className="w-full bg-primary items-center flex justify-center py-10 px-12">
      <img src={Image4} alt="image" className="w-full rounded-2xl m-4" />
    </div>
  );
};

export default Picture;

// xl:h-[90vh] lg:max-h-[90vh] md:max-h-[60vh] max-h-[60px]
