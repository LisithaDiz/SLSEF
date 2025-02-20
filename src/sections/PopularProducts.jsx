import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section
      id="about-us"
      className="relative px-4 max-container max-sm:mt-12"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/60 -z-10"></div>

      <div className="flex flex-col gap-5">
        <h2 className="relative z-20 text-4xl font-bold leading-snug text-center font-palanquin sm:text-left">
          <span className="text-coral-red">Brought</span> to life by,
        </h2>
        <div className="w-full h-1 my-8 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 "></div>
      </div>

      <div className="">
      <div className="grid items-center  lg:grid-cols-3   bg-[rgba(97,108,165,0.5)] p-8 justify-center">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
      </div>
      </div>



    </section>
  );
};

export default PopularProducts;
