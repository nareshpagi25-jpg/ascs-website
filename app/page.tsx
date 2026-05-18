export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50 backdrop-blur">

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

            <div className="flex flex-wrap gap-5 mt-14">

              <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold">
                Join Community
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-2xl font-semibold">
                Explore Platform
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Scientific Community"
                className="rounded-[40px] shadow-2xl"
              />

            </div>

            <div>

              <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
                About ASCS
              </p>

              <h3 className="text-5xl font-black mt-6 leading-tight">
                Building The Future Of Scientific Beauty Innovation
              </h3>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                ASCS connects cosmetic scientists, formulators,
                researchers, dermatologists, brands, ingredient suppliers,
                startups, and beauty innovators into one modern scientific ecosystem.
              </p>

            </div>

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
                className="border border-gray-200 rounded-[32px] p-8 hover:shadow-xl transition"
              >

                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white text-xl">
                  ✦
                </div>

                <h4 className="text-2xl font-bold mt-8">
                  {item}
                </h4>

                <p className="mt-4 text-gray-600 leading-7">
                  Expanding the future of cosmetic science through innovation and collaboration.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Blog */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center flex-wrap gap-6">

            <div>

              <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
                ASCS Media
              </p>

              <h3 className="text-5xl font-black mt-6">
                Blogs • Interviews • Research • Innovation
              </h3>

            </div>

            <button className="border border-gray-300 px-6 py-3 rounded-2xl">
              View Media
            </button>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm">

              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1974&auto=format&fit=crop"
                alt="Blog"
                className="h-56 w-full object-cover"
              />

              <div className="p-8">

                <h4 className="text-2xl font-bold leading-snug">
                  The Future Of Sunscreen Innovation
                </h4>

                <p className="mt-4 text-gray-600">
                  Exploring modern UV technologies, textures, and global sunscreen science.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm">

              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Neurocosmetics"
                className="h-56 w-full object-cover"
              />

              <div className="p-8">

                <h4 className="text-2xl font-bold leading-snug">
                  Neurocosmetics & Emotional Beauty
                </h4>

                <p className="mt-4 text-gray-600">
                  Understanding the future relationship between skincare and emotional wellness.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm">

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
                alt="Community"
                className="h-56 w-full object-cover"
              />

              <div className="p-8">

                <h4 className="text-2xl font-bold leading-snug">
                  Building Asia’s Cosmetic Science Community
                </h4>

                <p className="mt-4 text-gray-600">
                  Connecting cosmetic scientists and innovation leaders across Asia.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Inquiry */}
      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Contact ASCS
            </p>

            <h3 className="text-5xl font-black mt-6">
              Inquiry Form
            </h3>

          </div>

          <div className="space-y-6 mt-16">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-2xl px-6 py-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-2xl px-6 py-4"
            />

            <input
              type="text"
              placeholder="Organization / Company"
              className="w-full border border-gray-300 rounded-2xl px-6 py-4"
            />

            <textarea
              rows={6}
              placeholder="Your Inquiry"
              className="w-full border border-gray-300 rounded-2xl px-6 py-4"
            ></textarea>

            <button className="bg-black text-white px-10 py-4 rounded-2xl font-semibold">
              Submit Inquiry
            </button>

          </div>

        </div>

      </section>

      {/* Social Media */}
      <section className="bg-gray-50 py-24">

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
                className="border border-gray-300 px-6 py-4 rounded-2xl hover:bg-black hover:text-white transition"
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          <div>

            <h4 className="text-3xl font-black">
              ASCS
            </h4>

            <p className="text-gray-400 mt-4 leading-8">
              Advanced Cosmetic Science Network
            </p>

          </div>

          <div>

            <h5 className="font-bold text-lg">
              Platform
            </h5>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li>AI Tools</li>
              <li>Media</li>
              <li>Events</li>
              <li>Training</li>

            </ul>

          </div>

          <div>

            <h5 className="font-bold text-lg">
              Contact
            </h5>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li>
                socity@ascsorg.com
              </li>

              <li>
                Contact Number Coming Soon
              </li>

            </ul>

          </div>

          <div>

            <h5 className="font-bold text-lg">
              Newsletter
            </h5>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-6 rounded-2xl px-5 py-4 text-black"
            />

            <button className="bg-white text-black w-full py-4 rounded-2xl mt-4 font-semibold">
              Subscribe
            </button>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          © 2026 ASCS • Advanced Cosmetic Science Network
        </div>

      </footer>

    </main>
  );
}