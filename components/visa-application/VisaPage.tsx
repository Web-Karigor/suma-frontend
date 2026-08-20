import { VisaDetails } from "./VisaDetails";
import { VisaBanner } from "./VisaBanner";
import { VisaHero } from "./VisaHero";
import { VisaRequirements } from "./VisaRequirements";

export function VisaPage() {
  return <main><VisaHero /><VisaBanner /><VisaDetails /><VisaRequirements /></main>;
}
