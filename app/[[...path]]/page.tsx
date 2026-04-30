import { getPageDataAction } from "@/lib/actions/editor";
import { notFound } from "next/navigation";
import PuckClientRenderer from "@/components/PuckClientRenderer";

type PageProps = {
  params: Promise<{ path?: string[] }>;
};

export default async function Page({ params }: PageProps) {
  const { path } = await params;
  
  // Use join for sub-paths or an empty string for the root URL
  const slug = path ? path.join("/") : "";
  
  const data = await getPageDataAction(slug);

  if (!data || !data.content || (Array.isArray(data.content) && data.content.length === 0)) {
    notFound();
  }

  return <PuckClientRenderer data={data} />;
}

export const dynamic = "force-dynamic";
