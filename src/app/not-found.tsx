import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="relative min-h-[70svh] flex items-center justify-center bg-surface">
      <div className="container-premium text-center py-24">
        <p className="font-heading text-[clamp(5rem,18vw,9rem)] leading-none text-primary">
          404
        </p>
        <h1 className="mt-2 font-heading text-3xl md:text-4xl">
          Sayfa Bulunamadı
        </h1>
        <p className="mt-4 text-gray max-w-md mx-auto">
          Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="size-4" />
              Ana Sayfa
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={SITE.phoneHref}>
              <Phone className="size-4" />
              Hemen Ara
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
