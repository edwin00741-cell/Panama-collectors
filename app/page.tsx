import { FloatingActions, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomePage } from "@/components/home-page";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <HomePage />
      <FloatingActions />
      <SiteFooter />
    </>
  );
}
