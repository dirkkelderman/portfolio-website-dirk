interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" bg-slate-500">
      <header>
        <h1 className="">Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;
