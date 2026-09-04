import { AccountPortal } from "./portal-client";

export const metadata = { title: "My Account" };

export default function PortalPage() {
  return (
    <div className="pt-24">
      <AccountPortal />
    </div>
  );
}
