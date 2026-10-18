import type { Metadata } from "next";
import { Porch } from "@/components/site/porch";

export const metadata: Metadata = {
  title: "Mike Builds — Baltimore, MD",
  description:
    "Websites for trades. Content packs for agents. Quiet back-office automation. One number, one human: call or text 410-575-4192.",
};

/**
 * THE PORCH v2 — "The Night Garage".
 * One number, one human. Cards describe the lanes; none of them link out.
 * Doors stay unlisted by design — each is shared by direct link.
 */
export default function PorchPage() {
  return <Porch />;
}
