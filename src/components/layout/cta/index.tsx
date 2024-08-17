import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Cta() {
  return (
    <section className="bg-black py-[7.5rem]">
      <div className="container flex justify-center">
        <div className="flex max-w-[30rem] flex-col items-center gap-4">
          <h3 className="text-center text-[2.5rem] leading-[3rem] text-white">
            A monthly post delivered straight to your inbox
          </h3>
          <div className="flex items-center gap-6">
            <Input
              id="cta-input"
              name="cta-input"
              className="placeholder:text-neutral-40 px-4 py-3 placeholder:text-sm"
            />
            <Button variant={"outline"}>Submit</Button>
          </div>
          <p className="text-neutral-60 text-sm">
            Zero spam, just the good stuff.
          </p>
        </div>
      </div>
    </section>
  );
}
