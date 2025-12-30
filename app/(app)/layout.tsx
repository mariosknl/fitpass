import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import { AppHeader } from "@/components/app/layout/AppHeader";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <AppHeader />
      {children}
      <SanityLive />
    </ClerkProvider>
  );
};

export default AppLayout;
