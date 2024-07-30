import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the purpose of the Vendor Loan Program?",
    answer:
      "The program is designed to provide financial assistance to Tradeplus vendors to help grow their businesses.",
    value: "item-1",
  },
  {
    question: "Who is eligible to apply for the loan?",
    answer:
      "Vendors with an active Tradeplus account, a Sage Grey Finance account, and goods in high-demand categories are eligible.",
    value: "item-2",
  },
  {
    question: "How much can I borrow?",
    answer:
      "You can borrow up to 30% of your total inventory value, capped at ₦1,000,000.",
    value: "item-3",
  },
  {
    question: "What are the repayment terms?",
    answer:
      "The loan is repayable in monthly installments over 3 calendar months.",
    value: "item-4",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "Proof of inventory value, business registration documents, recent bank statements, and other relevant documents.",
    value: "item-5",
  },
  {
    question: "How do I apply for the loan?",
    answer:
      "Check your eligibility, open an account with Sage Grey Finance, gather the necessary documentation, fill out the application form, schedule verification, and submit your application.",
    value: "item-6",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "The approval process typically takes [7] days from the submission of your application. You will be notified of the outcome once the review is complete.",
    value: "item-7",
  },
  {
    question: "What happens during the physical verification?",
    answer:
      "An agent will visit your business location at the scheduled date and time to verify your address and inventory. Video evidence will be recorded and reviewed to confirm authenticity.",
    value: "item-8",
  },
  {
    question: "What if I miss a repayment?",
    answer:
      "A grace period of 7 days is provided after the due date. If payment is not received by the end of the grace period, a late fee of 0.25% will be applied. Continued non-payment may result in account suspension and further actions.",
    value: "item-9",
  },
  {
    question: "Can I repay the loan early?",
    answer:
      "Yes, early repayment is allowed. Please contact our support team to make arrangements for early repayment.",
    value: "item-10",
  },
  {
    question: "Are there any fees associated with the loan?",
    answer:
      "Yes there are. These will be detailed in your offer letter and loan documentation.",
    value: "item-11",
  },
  {
    question: "How will I receive the loan funds?",
    answer:
      "Once your loan is approved and all documentation is completed, the loan amount will be disbursed into your Sage Grey Finance account within 48 hours.",
    value: "item-12",
  },
  {
    question: "Can I reapply for another loan after repaying my current loan?",
    answer:
      "Yes, you can reapply for another loan after successfully repaying your current loan. Your eligibility for a new loan will be reviewed based on your updated inventory value and other criteria.",
    value: "item-13",
  },
  {
    question: "What if my application is denied?",
    answer:
      "If your application is denied, you will receive a notification with the reasons for denial. You may be able to reapply after addressing the issues outlined in the denial notice.",
    value: "item-14",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};

export default FAQ;
