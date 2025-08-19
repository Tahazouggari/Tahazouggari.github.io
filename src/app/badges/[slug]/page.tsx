import { notFound } from "next/navigation";

const badgeComponents: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  essentiell: () => import("./essentiell/page"),
  PCAP: () => import("./PCAP/page"),
  pentesterlab: () => import("./pentesterlab/page"),
  // Add more badges as needed
};

export default async function BadgePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!badgeComponents[slug]) {
    notFound();
  }

  const BadgeComponent = (await badgeComponents[slug]()).default;
  return <BadgeComponent />;
}
