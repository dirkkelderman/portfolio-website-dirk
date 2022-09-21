import Link from "next/link";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  menu: any;
}

const Layout = ({ children, menu }: LayoutProps) => {
  return (
    <div className="container mx-auto ">
      {/* <header className="flex justify-between">
        <Link href="/">
          <a>Home</a>
        </Link>
        <h1 className="">Header</h1>
      </header> */}
      <Header menu={menu} />
      <main className=" col-auto flex flex-col justify-center items-center">
        {children}
      </main>
      <footer className=" fixed bottom-0">
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;
