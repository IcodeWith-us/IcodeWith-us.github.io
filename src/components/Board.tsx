
type Props = {};

const Board = (props: Props) => {
  return (
    <div className="relative">
      <div className="absolute w-1/2 bg-primary h-1 -rotate-[15deg] -translate-x-[3px] -translate-y-7 3xl:-translate-x-[4.5px] 3xl:-translate-y-[39px]" />
      <div className=" absolute w-4 h-4 rounded-full bg-primary left-1/2 -translate-x-1/2 -top-16 3xl:w-5 3xl:h-5 3xl:-top-[85px]" />
      <div className="absolute w-1/2 bg-primary h-1 rotate-[15deg] translate-x-[101.5%] -translate-y-7 3xl:-translate-y-[39px]" />
      <div className="bg-white dark:bg-black transition-colors duration-1000 px-10 pt-16 pb-12 border-8 border-primary space-y-7 3xl:px-16 3xl:pt-20 3xl:pb-16">
        <h4 className="font-bold text-5xl tracking-tighter max-w-44 3xl:max-w-64 3xl:text-7xl">
          Design For Growth
        </h4>
        <div className="space-y-5">
          <p className="max-w-64 text-[#9B9B9B] text-lg 3xl:text-2xl 3xl:max-w-80">
            Bi-weekly emails with actionable design tips and insightful content
            one how to boost your product growth effectively.
          </p>
          <input
            className="w-full outline-none border border-lightGrey rounded-md px-4 py-5 text-lg 3xl:text-2xl 3xl:px-6 3xl:py-6"
            placeholder="email"
          />
          <button className="w-full py-5 bg-primary rounded-md text-white text-lg 3xl:text-2xl 3xl:py-6">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;
