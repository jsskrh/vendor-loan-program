import { Check, LightbulbIcon, Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";

const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Pricing */}
      <Card className="absolute top-[-15px] left-[50px] w-[40rem]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Time
            <Badge variant="secondary" className="text-sm text-primary">
              Loan details
            </Badge>
          </CardTitle>
          {/* <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div> */}

          <CardDescription>
            Up to 70% of total inventory value capped at ₦1,000,000.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <a href="https://www.vendor-loan-scheme.sage-grey.com/bank/individual">
            <Button className="w-full">Apply for a Loan</Button>
          </a>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="grid grid-cols-2 gap-4">
            {[
              "Maximum of 3 months",
              "Interest Rate: 3.5% per month",
              "Purpose: Working Capital Financing",
              "Collateral: Inventory Pledge & Personal Guarantee",
              "Repayment Source: Proceeds from sale of goods and other sources",
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HeroCards;
