import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'Authentication - Shop Envy',
  icons: {
    icon: '/icon.png',
  },
}


export default function AuthenticationPageLayout({
    children, // will be a page or nested layout
  }) {
    return (
<>

      {/* <Navbar/> */}

        {children}
      
      {/* <Footer/> */}
      
        </>
        )
  }