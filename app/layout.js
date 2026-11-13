import "./tailwind.css";
import "./styles.css";

export const metadata = {
  title: "Alireza Nasr | Web Developer",
  icons: {
  icon: "/Nasr/assets/logo.png",
},
  description:
    "Alireza Nasr — web developer crafting fast, accessible and delightful digital experiences.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A112A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;800;900&family=Rubik:wght@400;500;600;700;800&family=Zen+Antique+Soft&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="site-background min-h-screen overflow-x-hidden bg-ink font-sans text-white antialiased">{children}</body>
    </html>
  );
}
