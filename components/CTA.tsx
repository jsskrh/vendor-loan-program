import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Become a
            <span className="bg-gradient-to-r from-[rgb(143,193,130)]  to-[rgb(60,100,48)] text-transparent bg-clip-text">
              {" "}
              Tradeplus{" "}
            </span>
            vendor
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Become a TradePlus Vendor Today in Just a Few Simple and
            Straightforward Steps! Start your journey with us and unlock new
            opportunities for your business.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a
            href="https://vendor.tradeplus.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full md:mr-4 md:w-auto bg-green-500">
              Visit Tradeplus
            </Button>
          </a>
          {/* <Button variant="outline" className="w-full md:w-auto">
            View all features
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
