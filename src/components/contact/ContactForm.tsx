"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Loader2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const contactCtaClass =
  "mt-1 h-12 w-full min-h-12 rounded-lg text-[12px] tracking-[0.1em] leading-none sm:h-14 sm:min-h-14";

const fieldClass =
  "border-black/10 bg-[#F9FAFB] text-base transition-[border-color,box-shadow,background-color] focus-visible:border-primary/50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/35";

const inputClass = cn(fieldClass, "h-12 min-h-12");

const schema = z.object({
  name: z.string().min(2, "Adınızı girin"),
  phone: z.string().min(10, "Geçerli bir telefon girin"),
  message: z.string().min(10, "Mesajınız en az 10 karakter olmalı"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    const text = encodeURIComponent(
      [`Merhaba, ben ${data.name}.`, `Tel: ${data.phone}`, `Mesaj: ${data.message}`].join("\n")
    );
    const url = `https://wa.me/${SITE.whatsapp}?text=${text}`;
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.assign(url);
      return;
    }
    setSent(true);
    reset();
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="iletisim" className="section-pad pb-safe-float bg-surface">
      <div className="container-premium flex flex-col items-center">
        <Reveal className="mb-8 w-full max-w-2xl text-center sm:mb-9 lg:mb-10">
          <p className="type-eyebrow mb-3 inline-flex items-center justify-center gap-2 text-primary">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
            İletişim
          </p>
          <h2 className="type-h2 break-words text-[#111]">Hemen Ulaşın</h2>
          <p className="type-body mx-auto mt-3 max-w-prose break-words px-1">
            Keşif, teklif veya acil arıza — hızlı dönüş.
          </p>
        </Reveal>

        <Reveal className="w-full max-w-[600px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-full flex-col rounded-xl border border-black/8 bg-white p-5 text-left shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-7 lg:p-8"
            noValidate
          >
            <div className="mb-5 border-b border-black/6 pb-4 sm:mb-6 sm:pb-5">
              <h3 className="font-heading text-base font-bold text-[#111] sm:text-lg">
                Mesaj formu
              </h3>
              <p className="mt-1.5 text-[12px] leading-snug text-[#666] sm:text-[13px]">
                Form WhatsApp üzerinden iletilir.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-[13px] text-foreground">
                    Ad Soyad
                  </Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    placeholder="Adınız soyadınız"
                    className={inputClass}
                    {...register("name")}
                  />
                  {errors.name ? (
                    <p className="text-xs text-primary">{errors.name.message}</p>
                  ) : null}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-[13px] text-foreground">
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="05xx xxx xx xx"
                    className={inputClass}
                    {...register("phone")}
                  />
                  {errors.phone ? (
                    <p className="text-xs text-primary">{errors.phone.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-[13px] text-foreground">
                  Mesajınız
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Kısaca ihtiyacınızı yazın…"
                  className={cn(
                    fieldClass,
                    "min-h-[112px] resize-none py-3 sm:min-h-[140px]"
                  )}
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="text-xs text-primary">{errors.message.message}</p>
                ) : null}
              </div>

              <Button
                type="submit"
                variant="whatsapp"
                size="lg"
                className={cn(contactCtaClass)}
                disabled={isSubmitting || sent}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden />
                    Hazırlanıyor…
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 className="size-4" aria-hidden />
                    WhatsApp açıldı
                  </>
                ) : (
                  <>
                    <Send className="size-4" aria-hidden />
                    Mesajı Gönder
                  </>
                )}
              </Button>

              <div
                className="flex items-center gap-3 pt-0.5"
                role="separator"
                aria-label="veya"
              >
                <span className="h-px flex-1 bg-black/10" aria-hidden />
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                  veya
                </span>
                <span className="h-px flex-1 bg-black/10" aria-hidden />
              </div>

              <Button asChild variant="secondary" size="lg" className={cn(contactCtaClass, "mt-0")}>
                <a href={SITE.phoneHref} aria-label={`Hemen ara: ${SITE.phoneDisplay}`}>
                  <Phone className="size-4" aria-hidden />
                  Hemen Ara
                </a>
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
