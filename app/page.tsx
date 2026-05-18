export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-black">
              ASCS
            </h1>

            <p className="text-sm text-gray-500">
              Advanced Cosmetic Science Network
            </p>

          </div>

          <div className="flex gap-4">

            <button className="border border-gray-300 px-5 py-2 rounded-xl">
              Community
            </button>

            <button className="bg-black text-white px-5 py-2 rounded-xl">
              Contact
            </button>

          </div>

        </div>

      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-5xl">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              More Is Coming
            </p>

            <h2 className="text-6xl font-black leading-tight mt-8">
              Advanced Cosmetic Science Network
            </h2>

            <p className="mt-10 text-2xl leading-10 text-gray-700">
              ASCS is a modern cosmetic science, innovation, and industry collaboration platform advancing skincare, formulation, and beauty technology across Asia.
            </p>

          </div>

        </div>

      </section>

      {/* Ecosystem */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              ASCS Ecosystem
            </p>

            <h3 className="text-5xl font-black mt-6">
              Innovation • Media • Technology • Community
            </h3>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            {[
              "AI Tools",
              "Media",
              "Consulting",
              "Events",
              "Products",
              "Collaborations",
              "Training",
              "Certifications"
            ].map((item) => (
              <div
                key={item}
                className="border border-gray-200 rounded-[32px] p-8"
              >

                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white text-xl">
                  ✦
                </div>

                <h4 className="text-2xl font-bold mt-8">
                  {item}
                </h4>

                <p className="mt-4 text-gray-600 leading-7">
                  Expanding cosmetic science through innovation and collaboration.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Inquiry Form */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Contact ASCS
            </p>

            <h3 className="text-5xl font-black mt-6">
              Inquiry Form
            </h3>

            <p className="mt-6 text-lg text-gray-600">
              Advanced Cosmetic Science Network
            </p>

          </div>

          <form
            action="https://formspree.io/f/mdajodrg"
            method="POST"
            className="space-y-6 mt-16"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 rounded-2xl px-6 py-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-2xl px-6 py-4"
            />

            <input
              type="text"
              name="company"
              placeholder="Organization / Company"
              className="w-full border border-gray-300 rounded-2xl px-6 py-4"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Inquiry"
              required
              className="w-full border border-gray-300 rounded-2xl px-6 py-4"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-10 py-4 rounded-2xl font-semibold"
            >
              Submit Inquiry
            </button>

          </form>

          <div className="mt-10 text-center text-gray-500">

            <p>
              Email: socity@ascsorg.com
            </p>

          </div>

        </div>

      </section>

      {/* Social Media */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Social Platforms
          </p>

          <h3 className="text-5xl font-black mt-6">
            Connect With ASCS
          </h3>

          <div className="flex flex-wrap justify-center gap-5 mt-16">

            {[
              "Instagram",
              "Facebook",
              "Twitter / X",
              "LinkedIn",
              "YouTube",
              "WhatsApp",
              "Telegram",
              "Threads"
            ].map((item) => (
              <button
                key={item}
                className="border border-gray-300 px-6 py-4 rounded-2xl"
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h4 className="text-3xl font-black">
            ASCS
          </h4>

          <p className="text-gray-400 mt-4">
            Advanced Cosmetic Science Network
          </p>

          <p className="text-gray-500 mt-8">
            socity@ascsorg.com
          </p>

        </div>

      </footer>

    </main>
  );
}