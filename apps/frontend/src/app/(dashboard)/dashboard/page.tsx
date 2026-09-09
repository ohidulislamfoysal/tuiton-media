"use client";

import dynamic from "next/dynamic";

// Next.js static export কে বাধ্য করার জন্য
export const dynamicParams = false;

const DashboardContent = dynamic(() => import("./dashboard-content"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
    </div>
  ),
});

export default function DashboardPage() {
  return <DashboardContent />;
}