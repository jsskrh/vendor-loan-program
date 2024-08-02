import Image from "next/image";

const AboutTradeplus = () => {
  return (
    <section id="about" className="container md:px-40 py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12">
          <Image
            src={`/img/trade-logo.png`}
            height={0}
            width={300}
            alt="tradeplus logo"
            className="size-20"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Tradeplus
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Tradeplus NG is an e-commerce marketplace that allows financial
                institutions to provide inventory finance and verify physical
                inventory of their clients. Vendors on Tradeplus NG can sell
                products in bulk at wholesale prices, offering consumers lower
                prices than retail. The platform features a split functionality
                with a timed reversal mechanism for failed/incomplete
                transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTradeplus;
