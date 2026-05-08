const RESTAURANT_STEPS = [
  { number: '01', text: 'A regular brings someone new.' },
  { number: '02', text: 'Your team verifies the visit in seconds.' },
  { number: '03', text: 'You reward them for bringing someone new.' },
];

function RestaurantsHowItWorks() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Steps */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6">
            Launch bring a friend
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RESTAURANT_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col gap-4"
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

        {/* Verification */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6">
            Verification
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <p className="text-base font-light text-black leading-snug">
              Every new guest is verified at the table — so you only pay for new
              guests.
            </p>
          </div>
        </div>

        {/* Loyalty */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6">
            Launch loyalty
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <p className="text-base font-light text-black leading-snug">
              Reward your regulars for coming back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantsHowItWorks;
