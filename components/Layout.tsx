interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto ">
      <header>
        <h1 className="">Header</h1>
      </header>
      <main className=" col-auto flex flex-col justify-center items-center">{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;
