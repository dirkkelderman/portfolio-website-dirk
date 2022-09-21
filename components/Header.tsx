import { PrismicLink, PrismicText } from "@prismicio/react";
import Link from "next/link";

interface HeaderProps {
  menu: any;
}

export const Header = ({ menu }: HeaderProps) => {
  return (
    <header className="flex justify-between sticky z-10 p-3">
      <PrismicLink href="/">
        <PrismicText field={menu.data?.title} />
      </PrismicLink>
      <nav className="flex gap-x-4 absolute right-0">
        <ul className="group text-right ">
          Projects
          <span className="hidden group-hover:block text-right relative top-3 bg-slate-300">
            {menu.data?.projectMenuLinks?.map((projectLink: any) => (
              <li key={projectLink.label} className="hover:bg-red-400 p-3">
                <PrismicLink field={projectLink.link}>
                  <PrismicText field={projectLink.label} />
                </PrismicLink>
              </li>
            ))}
          </span>
        </ul>
        <ul className="group text-right relative">
          {menu.data?.menuLinks?.map((link: any) => (
            <li key={link.label} className="hover:bg-red-400">
              <PrismicLink field={link.link}>
                <PrismicText field={link.label} />
              </PrismicLink>
            </li>
          ))}
        </ul>
        <ul className="flex gap-x-4 relative">
          {menu.data?.menuLinks.map((menuLink: any) => (
            <li key={menuLink.label}>
              <Link href={`/${menuLink.link.slug}`}>
                <button>
                  <PrismicText field={menuLink.label} />
                </button>
              </Link>
              {/* <PrismicLink field={menuLink.link} document={menuLink.link}>
                <PrismicText field={menuLink.label} />
              </PrismicLink> */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
