import { GitHubLogoIcon } from "@radix-ui/react-icons";
import HeroCards from "./HeroCards";
import { Button, buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold text-gray-600">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[rgb(143,193,130)]  to-[rgb(60,100,48)] text-transparent bg-clip-text">
              Tradeplus
            </span>{" "}
            vendor
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              loan
            </span>{" "}
            program
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Welcome to the Vendor Loan Program hosted by Tradeplus. Financed by
          Sage Grey Finance Limited.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://www.vendor-loan-scheme.sage-grey.com/bank/individual">
            <Button className="w-full md:w-1/3">Apply for a Loan</Button>
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

export default Hero;
