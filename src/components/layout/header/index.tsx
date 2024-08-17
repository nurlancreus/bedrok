import Logo from "@/components/shared/logo";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between py-7">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
