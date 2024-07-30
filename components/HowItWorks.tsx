import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Check Eligibility",
    description: "Ensure you meet all the eligibility criteria listed above.",
  },
  {
    icon: <MapIcon />,
    title: "Gather Documentation",
    description:
      "Prepare the necessary documents including : Passport photographs, valid means of ID, recent bank statements, Certificate of incorporation, utility bill",
  },
  {
    icon: <PlaneIcon />,
    title: "Fill Out the Application Form",
    description: "Complete the loan application form here",
  },
  {
    icon: <GiftIcon />,
    title: "Schedule Verification",
    description:
      "Submit your preferred date and time for the physical verification of your business address and inventory.",
  },
  {
    icon: <PlaneIcon />,
    title: "Submit Application",
    description:
      "Review and submit your completed application form along with the required documents.",
  },
  {
    icon: <GiftIcon />,
    title: "Await Review",
    description:
      "Your application will be reviewed, and you will be notified of the outcome.",
  },
];

const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Here is a step by step guide to apply for the loan:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps, index) => (
          <Card
            key={title}
            className={`bg-muted/50 ${index === 4 ? "md:col-start-2" : ""}`}
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
