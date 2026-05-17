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
              Asian Society of Cosmetic Scientists
            </p>
          </div>

          <div className="flex gap-4">

            <button className="border border-gray-300 px-5 py-2 rounded-xl">
              Membership
            </button>

            <button className="bg-black text-white px-5 py-2 rounded-xl">
              Contact
            </button>

          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              More Is Coming
            </p>

            <h2 className="text-6xl font-black leading-tight mt-8">
              Advancing Scientific Beauty Care & Community Across Asia
            </h2>

            <p className="mt-8 text-xl text-gray-600 leading-9">
              ASCS is a professional scientific platform focused on cosmetic science,
              skincare innovation, formulation technology, education,
              research, and community collaboration throughout Asia.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold">
                Join ASCS
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-2xl font-semibold">
                Explore Community
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
                alt="Scientific community"
                className="rounded-[40px] shadow-xl"
              />

            </div>

            <div>

              <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
                About ASCS
              </p>

              <h3 className="text-5xl font-black mt-6 leading-tight">
                Building Trust Through Cosmetic Science & Innovation
              </h3>

              <p className="mt-8 text-lg text-gray-600 leading-8">
                Asian Society of Cosmetic Scientists (ASCS) aims to unite
                cosmetic scientists, formulators, dermatologists,
                researchers, educators, and industry professionals under one
                scientific ecosystem dedicated to innovation and responsible beauty care.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Membership */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Membership
            </p>

            <h3 className="text-5xl font-black mt-6">
              Join Our Scientific Community
            </h3>

            <p className="mt-6 text-lg text-gray-600">
              Student • Professional • Corporate Membership
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="border border-gray-200 rounded-[32px] p-10">

              <h4 className="text-3xl font-black">
                Student
              </h4>

              <p className="mt-6 text-gray-600 leading-8">
                Access webinars, educational resources,
                networking opportunities, and scientific discussions.
              </p>

            </div>

            <div className="bg-black text-white rounded-[32px] p-10">

              <h4 className="text-3xl font-black">
                Professional
              </h4>

              <p className="mt-6 text-gray-300 leading-8">
                Connect with formulators, researchers,
                industry leaders, and innovation partners.
              </p>

            </div>

            <div className="border border-gray-200 rounded-[32px] p-10">

              <h4 className="text-3xl font-black">
                Corporate
              </h4>

              <p className="mt-6 text-gray-600 leading-8">
                Collaborate with the cosmetic science community
                through partnerships, events, and innovation programs.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Blog Section */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center flex-wrap gap-6">

            <div>

              <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
                ASCS Blog
              </p>

              <h3 className="text-5xl font-black mt-6">
                Latest Scientific Articles & Insights
              </h3>

            </div>

            <button className="border border-gray-300 px-6 py-3 rounded-2xl">
              View All Blogs
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
                  Understanding Modern Sunscreen Formulation Science
                </h4>

                <p className="mt-4 text-gray-600">
                  Explore UV filters, texture optimization,
                  and next-generation sunscreen systems.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm">

              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Community"
                className="h-56 w-full object-cover"
              />

              <div className="p-8">

                <h4 className="text-2xl font-bold leading-snug">
                  Neurocosmetics & Emotional Beauty Innovation
                </h4>

                <p className="mt-4 text-gray-600">
                  Discover emerging trends in sensory-driven skincare
                  and emotional wellness cosmetics.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm">

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
                alt="Research"
                className="h-56 w-full object-cover"
              />

              <div className="p-8">

                <h4 className="text-2xl font-bold leading-snug">
                  Cosmetic Science Community & Future Innovation
                </h4>

                <p className="mt-4 text-gray-600">
                  Building scientific collaboration across Asia
                  for advanced cosmetic research and education.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Inquiry Form */}
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

          <div className="mt-16 space-y-6">

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
              placeholder="Your Inquiry"
              rows={6}
              className="w-full border border-gray-300 rounded-2xl px-6 py-4"
            ></textarea>

            <button className="bg-black text-white px-10 py-4 rounded-2xl font-semibold">
              Submit Inquiry
            </button>

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
              Asian Society of Cosmetic Scientists
            </p>

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
              Social Media
            </h5>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter / X</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>WhatsApp Community</li>

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
          © 2026 ASCSORG • Asian Society of Cosmetic Scientists
        </div>

      </footer>

    </main>
  );
}