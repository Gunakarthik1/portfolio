"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

const Certifications = dynamic(() => import("@/pages/Certifications"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function CertificationsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Certifications />
    </Suspense>
  );
}
