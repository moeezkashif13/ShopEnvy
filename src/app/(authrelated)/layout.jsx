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