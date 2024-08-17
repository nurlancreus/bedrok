import Link from "next/link";
import { NavLink } from "../../shared/nav-link";
import { Button } from "@/components/ui/button";

const NAVIGATION_ROUTES = [
  {
    id: 1,
    route: "/",
    text: "Home",
  },
  {
    id: 2,
    route: "/about",
    text: "About",
  },
  {
    id: 3,
    route: "/contact",
    text: "Contact",
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-5 py-1">
        {NAVIGATION_ROUTES.map((nav) => {
          return (
            <li key={nav.id}>
              <NavLink href={nav.route}>{nav.text}</NavLink>
            </li>
          );
        })}
        <li>
          <Button asChild>
            <Link href="auth/sign-in">Sign in</Link>
          </Button>
        </li>
        <li>
          <Button asChild>
            <Link href="auth/sign-up">Sign up</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
