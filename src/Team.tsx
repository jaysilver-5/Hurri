import Image from 'next/image';
import team from '../public/team.png';

const Team = () => {
  return (
    <div className="min-h-screen flex xl:flex-row lg:flex-row md:flex-col flex-col w-full justify-center items-center bg-primary px-16">
      <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col gap-x-12">
        <Image
          className="rounded-md"
          src={team.src}
          alt="image"
          width={250}
          height={250}
        />

        <div className="flex-1 justify-center flex flex-col items-end">
          <div className="flex flex-col">
            <h1 className="text-white text-start xl:text-[24px] lg:text-[24px] md:text-[20px] text-[20px] font-extrabold">
              The level of care and customer service our pilots provide is a
              testament to the filtering, training, and values we&apos;ve
              instilled into them from the beginning.
            </h1>
            <p className="text-white font-semibold mt-3 text-[18px] text-start">
              Fahim Saleh
            </p>
            <p className="text-lightgray text-[14px]">Founder of Gokada</p>
            <p className="text-lightgray text-[14px]">#TheDream</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
