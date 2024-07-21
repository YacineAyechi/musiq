import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="pt-2 pb-5">
      <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-center">
        Built by{" "}
        <Link
          href="http://yacineayachi.tn"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Yacine Ayachi
        </Link>
        .
      </p>
    </footer>
  );
}
