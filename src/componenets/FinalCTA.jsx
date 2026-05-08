function FinalCTA({ id, formRef }) {
  const path = '/';

  const handleClick = () => {
    if (id === 'restaurants-final' || id === 'guests-final') {
      window.location.href = path;
    } else {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
        <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          AVIVO
        </span>
        <button
          onClick={handleClick}
          className="text-3xl sm:text-4xl font-light text-black tracking-tight hover:text-gray-500 hover:cursor-pointer transition-all duration-200"
        >
          I want in!
        </button>
        {/* <WaitlistForm
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id={id}
        /> */}
        <p className="text-xs text-gray-400">
          Get access before we launch in Vancouver.
        </p>
      </div>
    </section>
  );
}

export default FinalCTA;
