interface Card {
  title: string;
  about: string;
}

export const Card = ({ title, about }: Card) => {
  return (
    <>
      <div className="border rounded-md dark:border-white border-slate-400 bg-linear-to-br dark:from-slate-500 dark:via-white dark:to-slate-500 from-slate-300 via-slate-500 to-slate-300 shadow-2xl/50 flex items-center justify-center h-40 w-80 lg:h-48 lg:w-120 xl:h-76 xl:w-140 flex-col xl:p-4  mb-12 xs:mb-10 sm:mb-8 md:mb-8 lg:mb-6 xl:mb-4 ">
        <div className="mx-auto">
          <h2 className="dark:text-black  text-neutral-900 text-xl lg:text-3xl xl:text-6xl dark:font-semibold font-medium">{title}</h2>
        </div>
        <div>
          <p className="dark:text-black text-neutral-900 text-lg font-medium lg:text-lg xl:text-xl dark:font-semibold ">{about}</p>
        </div>
      </div>
    </>
  );
};
