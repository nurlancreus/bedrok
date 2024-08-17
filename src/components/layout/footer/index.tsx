import Logo from "@/components/shared/logo";
import FooterNav from "./footer-nav";

const currentYear = new Date().getFullYear();

const FOOTER_NAVIGATION_ROUTER = {
  categories: {
    title: "Categories",
    menu: [
      {
        id: 1,
        href: "#",
        text: "Entrepreneurship",
      },
      {
        id: 2,
        href: "#",
        text: "Creator",
      },
      {
        id: 3,
        href: "#",
        text: "Tech",
      },
      {
        id: 4,
        href: "#",
        text: "All",
      },
    ],
  },
  pages: {
    title: "Pages",
    menu: [
      {
        id: 1,
        href: "/",
        text: "Home",
      },
      {
        id: 2,
        href: "#",
        text: "About",
      },
      {
        id: 3,
        href: "/auth/sign-in",
        text: "Sign in",
      },
      {
        id: 4,
        href: "/auth/sign-up",
        text: "Sign up",
      },
    ],
  },
  contact: {
    title: "Contact",
    menu: [
      {
        id: 1,
        href: "#",
        text: "Twitter",
      },
      {
        id: 2,
        href: "#",
        text: "Linkedin",
      },
      {
        id: 3,
        href: "#",
        text: "Email me",
      },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="pt-[8.375rem] pb-24">
      <div className="container flex justify-between">
        <div className="flex flex-col justify-between">
          <Logo />
          <p className="text-neutral-70">Copyright {currentYear}</p>
        </div>
        <div className="flex gap-[4.75rem]">
          <FooterNav
            title={FOOTER_NAVIGATION_ROUTER.categories.title}
            menu={FOOTER_NAVIGATION_ROUTER.categories.menu}
          />
          <FooterNav
            title={FOOTER_NAVIGATION_ROUTER.pages.title}
            menu={FOOTER_NAVIGATION_ROUTER.pages.menu}
          />
          <FooterNav
            title={FOOTER_NAVIGATION_ROUTER.contact.title}
            menu={FOOTER_NAVIGATION_ROUTER.contact.menu}
          />
        </div>
      </div>
    </footer>
  );
}
