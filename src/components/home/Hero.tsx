import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-[#e8e3d8] bg-[#fffdf8]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
       
        {/* Akhane Ami Left side-e Bazar Dor-er main message ebong CTA rakhlam.
            User prothome website-er purpose bujhbe, tarpor product section-e jete parbe. */}
        
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
            প্রতিদিনের বাজারদর
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#171717] sm:text-5xl md:text-6xl">
            প্রয়োজনীয় পণ্যের
            <span className="block text-[#0f766e]">দাম এক নজরে।</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#6b6b6b] sm:text-lg">
            চাল, ডাল, তেল, সবজি, মাছ, মাংসসহ প্রয়োজনীয় পণ্যের
            আজকের বাজারদর এবং বিভিন্ন বাজারের দামের তথ্য সহজে দেখুন।
          </p>

     

          <Link
            href="#সব-পণ্য"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-[#0f766e] px-6 text-sm font-semibold text-white transition hover:bg-[#0b5f59] sm:text-base"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* Akhane Ami Right side-e assignment-er provided hero image use korchi.
            Next Image use korle image optimized ebong responsive thakbe. */}

        <div className="flex min-h-72 items-center justify-center sm:min-h-96">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের প্রয়োজনীয় পণ্যের ঝুড়ি"
            width={315}
            height={263}
            priority
            className="h-auto w-full max-w-[315px] object-contain sm:max-w-[360px]"
          />
        </div>
      </div>
    </section>
  );
}