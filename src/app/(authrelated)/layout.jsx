import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'Authentication - Shop Envy',
  
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