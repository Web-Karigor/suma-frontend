import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { fetchSettings } from "@/helpers/settings";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchSettings();

  return {
    title: {
      default: settings.metaTitle || settings.siteName || "Suma BD Travel Management",
      template: `%s · ${settings.siteName || "Suma BD"}`,
    },
    description:
      settings.metaDescription ||
      "Hajj, Umrah, visa, hotels, and holiday packages from Suma BD — trusted travel management in Bangladesh.",
    icons: settings.favicon ? { icon: settings.favicon } : undefined,
  };
}

export const viewport: Viewport = {
  themeColor: "#007B7A",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${poppins.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        <QueryProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
