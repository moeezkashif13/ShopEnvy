import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ProductPageLayout({
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