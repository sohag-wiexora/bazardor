export default function Footer() {
  return (
    <footer className="border-t border-[#e8e3d8] bg-[#171717] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
        
        {/* Bazar Dor-er short brand message ekhane rakhlam. */}
        
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>

        {/* Price-gulo estimated hote pare—ei important disclaimer ta clearly dekhacchi. */}

        <p className="text-white/60">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
}