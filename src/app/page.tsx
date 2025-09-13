import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";

const Page = async () => {
  const queryClient = getQueryClient();

  // IMPORTANT: await lagao, warna hydration ke time data undefined aa jayega
  await queryClient.prefetchQuery(
    trpc.createAI.queryOptions({ text: "Huzaifa PREFETCH" })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;
