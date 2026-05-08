const STEPS = [
  { number: '01', text: 'Dine out with friends.' },
  { number: '02', text: 'Bring someone new.' },
  { number: '03', text: 'Earn rewards when they show up.' },
];

function GuestsHowItWorks() {
  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Block 1: Bring a friend */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6">
            Bring a friend
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-4"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-gray-300">
                  {step.number}
                </span>
                <p className="text-base font-light text-black leading-snug">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Block 2: Loyalty */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6">
            Loyalty
          </p>
          <div className="bg-white border border-gray-100 rounded-2xl p-8">
            <p className="text-base font-light text-black leading-snug">
              Earn rewards when you return to your favourite local restaurants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuestsHowItWorks;
