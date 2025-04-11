import { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

interface TemplateProps {
  children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Template;
