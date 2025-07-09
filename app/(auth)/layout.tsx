import React from "react";
import Image from "next/image";
import { CloudLightning } from "lucide-react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-700 to-gray-900 p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          {/* Logo and Title section */}
          <div className="flex items-center gap-3 p-2 rounded-lg transition">
            <CloudLightning size={40} className="text-white drop-shadow-md" />

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Net<span className="bg-gradient-to-r from-cyan-500 to-yellow-400 bg-clip-text text-transparent">Cloud</span>
            </h1>
          </div>
          <div className="space-y-5 text-white">
            <h1 className="h1">
              Seamlessly & Securly Manage Your <span className="bg-gradient-to-r from-cyan-500 to-yellow-400 bg-clip-text text-transparent">Cloud Storage</span>
            </h1>
            <p className="body-1 text-white">
              Effortlessly organize, access, and protect your files from
              anywhere, at any time.
            </p>
          </div>
          {/* Image section */}
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-gradient-to-br from-gray-500 via-gray-800 to-black p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        {/* Mobile Logo and Title section */}
        <div className="mb-16 lg:hidden">
          <div className="flex items-center gap-3 p-2 rounded-lg transition">
            <CloudLightning size={40} className="text-white drop-shadow-md" />

            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-900 bg-clip-text text-transparent">
              Net
              <span className="bg-gradient-to-r from-cyan-500 to-yellow-400 bg-clip-text text-transparent">
                Cloud
              </span>
            </h1>
          </div>
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
