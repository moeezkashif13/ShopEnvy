import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'Checkout - Shop Envy',
  icons: {
    icon: '/icon.png',
  },

  
}


export default function CheckoutPageLayout({
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