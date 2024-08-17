import { NavLink } from "@/components/shared/nav-link";

type FooterNavProps = {
  title: string;
  menu: Array<{ id: number; href: string; text: string }>;
};

export default function FooterNav({ title, menu }: FooterNavProps) {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li>
          <p className="text-neutral-60 text-sm uppercase">{title}</p>
        </li>
        {menu.map((nav) => {
          return (
            <li key={nav.id}>
              <NavLink variant="footer" href={nav.href}>
                {nav.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
