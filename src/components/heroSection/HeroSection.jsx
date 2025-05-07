import FigmaHero from "../icons/FigmaHero";
import GitHubHero from "../icons/GitHubHero";
import hero from "/assets/hero.png";

// const styles = {
//   st0: { fill: "#0acf83" },
//   st1: { fill: "#a259ff" },
//   st2: { fill: "#f24e1e" },
//   st3: { fill: "#ff7262" },
//   st4: { fill: "#1abcfe" },
// };
const HeroSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Building digital <br />
              products & brands.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              This free and open-source landing page template was built using
              the utility classNamees from{" "}
              <a href="#" className="hover:underline">
                Tailwind CSS
              </a>{" "}
              and based on the components from the Flowbite Library and the
              Blocks System
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <GitHubHero /> View on GitHub
              </a>
              <a className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <FigmaHero /> Get Figma file
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={hero} alt="hero image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
