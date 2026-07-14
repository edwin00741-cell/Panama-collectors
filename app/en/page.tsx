import { FloatingActions, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomePage } from "@/components/home-page";

export default function EnglishHomePage() {
  return (
    <>
      <SiteHeader locale="en" switchHref="/" />
      <HomePage locale="en" />
      <FloatingActions />
      <SiteFooter locale="en" />
    </>
  );
}
