"use client";

import dynamic from "next/dynamic";

// Dynamically import the component with SSR disabled
const TestAnimation = dynamic(() => import("@/components/Test"), { ssr: false });

const Page = () => {
  return (
    <div>
      <TestAnimation />
    </div>
  );
};

export default Page;
