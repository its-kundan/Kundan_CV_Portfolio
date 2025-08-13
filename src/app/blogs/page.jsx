"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new blog system
    router.push('/blog');
  }, [router]);

  return (
    <div
      style={{ height: "80vh", width: "100vw" }}
      className="flex items-center justify-center"
    >
      <div className="text-white text-xl">Redirecting to blog...</div>
    </div>
  );
};

export default page;
