function Footer() {
  return (
    <footer className="w-full px-6 py-8 border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase">
          AVIVO
        </span>
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} AVIVO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
