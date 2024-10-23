import ProductCard from "../ProductCard";

type Props = {};
const HeroSection = (props: Props) => {
  return (
    <section className="mx-container">

      <div className="pt-44 space-y-5 mx-auto max-w-[56rem] 3xl:max-w-[72rem]">
        <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-8xl 3xl:text-8xl text-center font-bold leading-[48px] sm:leading-[56px] md:leading-[64px] lg:leading-[72px] xl:leading-[98px] tracking-tight">
          Premium stock designs and{" "}
          <span className="text-secondary">Ready-made assets.</span>
        </h3>
        <p className="text-lg font-light text-lightGrey text-center 3xl:text-3xl">
            Save time and money by focusing on the key elements.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 3xl:gap-x-10 mx-auto max-w-fit gap-x-5 gap-y-7 mt-20">
        {Array(1)
          .fill(0)
          .map((_, i) => (
            <ProductCard
              key={i}
              image="/Tab.png"
              alt="Product Image"
              title="ottonova - Working on the future of health insurance"
              price={100}
              category="Web Design"
              width={366}
              height={250}
              imageClass="3xl:min-w-96"
            />
          ))}
        {Array(1)
          .fill(0)
          .map((_, i) => (
            <ProductCard
              key={i}
              image="/image.png"
              alt="Product Image"
              title="ottonova - Working on the future of health insurance"
              price={100}
              category="Web Design"
              width={366}
              height={250}
              imageClass="3xl:min-w-96"
            />
          ))}
        {Array(1)
          .fill(0)
          .map((_, i) => (
            <ProductCard
              key={i}
              image="/Tab3.png"
              alt="Product Image"
              title="ottonova - Working on the future of health insurance"
              price={100}
              category="Web Design"
              width={366}
              height={250}
              imageClass="3xl:min-w-96"
            />
          ))}
        {Array(1)
          .fill(0)
          .map((_, i) => (
            <ProductCard
              key={i}
              image="/Tab2.png"
              alt="Product Image"
              title="ottonova - Working on the future of health insurance"
              price={100}
              category="Web Design"
              width={366}
              height={250}
              imageClass="3xl:min-w-96"
            />
          ))}
        {Array(1)
          .fill(0)
          .map((_, i) => (
            <ProductCard
              key={i}
              image="/Mbl2.png"
              alt="Product Image"
              title="ottonova - Working on the future of health insurance"
              price={100}
              category="Web Design"
              width={366}
              height={250}
              imageClass="3xl:min-w-96"
            />
          ))}
        {Array(1)
          .fill(0)
          .map((_, i) => (
            <ProductCard
              key={i}
              image="/web and tablet.png"
              alt="Product Image"
              title="ottonova - Working on the future of health insurance"
              price={100}
              category="Web Design"
              width={366}
              height={250}
              imageClass="3xl:min-w-96"
            />
          ))}
        {Array(1)
          .fill(0)
          .map((_, i) => (
            <ProductCard
              key={i}
              image="/Three.png"
              alt="Product Image"
              title="ottonova - Working on the future of health insurance"
              price={100}
              category="Web Design"
              width={366}
              height={250}
              imageClass="3xl:min-w-96"
            />
          ))}
        {Array(1)
          .fill(0)
          .map((_, i) => (
            <ProductCard
              key={i}
              image="/APP VPN.png"
              alt="Product Image"
              title="ottonova - Working on the future of health insurance"
              price={100}
              category="Web Design"
              width={366}
              height={250}
              imageClass="3xl:min-w-96"
            />
          ))}
        {Array(1)
          .fill(0)
          .map((_, i) => (
            <ProductCard
              key={i}
              image="/document.png"
              alt="Product Image"
              title="ottonova - Working on the future of health insurance"
              price={100}
              category="Web Design"
              width={366}
              height={250}
              imageClass="3xl:min-w-96"
            />
          ))}
      </div>
      <div className="mx-auto mt-12 flex justify-center">
        <button className="bg-primary px-10 py-3 text-lg rounded-md text-white 3xl:px-16 3xl:py-5 3xl:text-2xl 3xl:rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          Show More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
