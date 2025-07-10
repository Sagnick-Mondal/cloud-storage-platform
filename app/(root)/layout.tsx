import React from "react";
import Sidebar from "@/components/Sidebar";
//import MobileNavigation from "@/components/MobileNavigation";
//import Header from "@/components/Header";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

//this is the root layout for the application
export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  // If the user is not authenticated, redirect to the sign-in page
  // If the user is authenticated, render the layout with the sidebar and main content
  if (!currentUser) return redirect("/sign-in");

  return (
    <main className="flex h-screen">
        {/* Sidebar navigation */}
      <Sidebar {...currentUser} />

      <section className="flex h-full flex-1 flex-col">
        {/*<MobileNavigation {...currentUser} />*/}
        {/*<Header userId={currentUser.$id} accountId={currentUser.accountId} />*/}

        {/* Main content area */}
        <div className="main-content">{children}</div>
      </section>

      <Toaster />
    </main>
  );
};
export default Layout;