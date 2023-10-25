import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";




export default function ProductPageLayout({
    children, // will be a page or nested layout
  }) {

    if(!process.env.NEXT_PUBLIC_WEBSITE){
      return null;
    };

    return (
<>

      {/* <Navbar/> */}

        {children}
      
      {/* <Footer/> */}
      
        </>
        )
  }