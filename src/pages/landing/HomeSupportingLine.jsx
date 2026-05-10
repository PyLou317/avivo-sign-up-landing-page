function HomeSupportingLine({ activeTab }) {
  return (
    <section className="w-full px-6 py-14 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-2xl sm:text-3xl font-light text-black leading-snug tracking-tight">
          {activeTab === 'Guest'
            ? 'Your friends already know where you should eat next.'
            : 'Your regulars know who to bring next.'}
        </p>
      </div>
    </section>
  );
}

export default HomeSupportingLine;
