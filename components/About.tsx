const About = () => {
  return (
    <section id="about" className="container md:px-40 py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                The Program
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                This program is designed to support our valued vendors by
                offering financial assistance to grow their businesses. Eligible
                vendors can receive up to 70% of their total inventory value,
                capped at ₦1,000,000, repayable over 3 calendar months. This
                loan program aims to provide the necessary capital to expand
                inventory, manage cash flow, and enhance business operations.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                To qualify for the Vendor Loan Program, applicants must:
              </p>
              <ul className="text-xl text-muted-foreground mt-4 list-disc">
                <li>Have an active Tradeplus account.</li>
                <li>Open an account with Sage Grey Finance Limited.</li>
                <li>
                  Be available for physical verification for the duration of the
                  loan
                </li>
                <li>Provide accurate and verifiable inventory value.</li>
                <li>Meet any additional criteria specified by Tradeplus.</li>
                To qualify for the Vendor Loan Program, applicants must:
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
