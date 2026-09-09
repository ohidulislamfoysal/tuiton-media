import DashboardLayoutClient from "./layout-client";

export const dynamic = "auto";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
