function App() {
  return (
    <div className="bg-[#FAF9F6] text-[#2C2A29] antialiased scroll-smooth">
      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold tracking-tight text-[#1A1A1A]">
            Homies<span className="text-amber-700">.</span>
          </a>
          <div className="hidden md:flex space-x-8 font-medium text-sm text-stone-600">
            <a href="#hero" className="hover:text-amber-700 transition">Home</a>
            <a href="#menu" className="hover:text-amber-700 transition">Menu</a>
            <a href="#ai-concierge" className="hover:text-amber-700 transition flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span> AI Concierge
            </a>
            <a href="#about" className="hover:text-amber-700 transition">Our Story</a>
          </div>
          <a
            href="#menu"
            className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-amber-800 transition shadow-sm"
          >
            Order Now
          </a>
        </div>
      </nav>

      <section id="hero" className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Welcome to the Neighborhood
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
            Good coffee. <br />Better company. <br />
            <span className="text-amber-700">Homies style.</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-md">
            A minimalist space crafted for creators, remote workers, and friends. Tell our AI barista what you're craving today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="bg-[#1A1A1A] text-white text-center px-8 py-3.5 rounded-full font-medium hover:bg-stone-800 transition"
            >
              Explore Menu
            </a>
            <a
              href="#ai-concierge"
              className="border border-stone-300 text-stone-800 text-center px-8 py-3.5 rounded-full font-medium hover:bg-stone-100 transition"
            >
              Ask AI Assistant ✨
            </a>
          </div>
        </div>
        <div className="relative h-[450px] bg-stone-200 rounded-3xl overflow-hidden shadow-xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-xs text-stone-500 font-semibold uppercase">Today's Special</p>
              <p className="font-bold text-stone-800">Vanilla Sea Salt Cold Brew</p>
            </div>
            <span className="text-amber-700 font-semibold">$5.50</span>
          </div>
        </div>
      </section>

      <section id="ai-concierge" className="bg-[#1A1A1A] text-stone-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Your AI Barista</h2>
          <p className="text-stone-400 max-w-lg mx-auto">
            Not sure what to order? Describe your mood or flavor preferences, and our smart assistant will brew up the perfect recommendation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-4 bg-stone-850 border-b border-stone-800 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Homies AI Assistant v1.0</p>
          </div>

          <div className="p-6 space-y-4 text-sm">
            <div className="flex gap-3">
              <div className="bg-amber-700/20 text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                H
              </div>
              <div className="bg-stone-800 p-3.5 rounded-2xl rounded-tl-none max-w-[85%] text-stone-300">
                Hey homie! 👋 I can recommend a drink based on how you feel. Try typing something like:{' '}
                <em>"I need a lot of caffeine but it's hot today"</em> or <em>"Something sweet and decaf."</em>
              </div>
            </div>
          </div>

          <div className="p-4 bg-stone-950 border-t border-stone-800 flex gap-2">
            <input
              type="text"
              placeholder="Tell me what you're craving..."
              className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-amber-600 transition placeholder-stone-500"
            />
            <button className="bg-amber-700 hover:bg-amber-600 text-white px-5 py-3 rounded-xl font-medium transition flex-shrink-0">
              Ask
            </button>
          </div>
        </div>
      </section>

      <section id="menu" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">Explore Our Menu</h2>
            <p className="text-stone-500 mt-2">Carefully sourced, locally roasted.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-[#1A1A1A] text-white text-sm font-medium rounded-full transition shadow-sm">
              All Drinks
            </button>
            <button className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-sm font-medium rounded-full transition">
              Espresso
            </button>
            <button className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-sm font-medium rounded-full transition">
              Cold Brews
            </button>
            <button className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-sm font-medium rounded-full transition">
              Teas & Matcha
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-stone-100 rounded-2xl p-5 hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <div
                className="h-48 bg-stone-100 rounded-xl mb-4 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop')",
                }}
              ></div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-stone-900">Homies Signature Latte</h3>
                <span className="bg-amber-50 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded">Popular</span>
              </div>
              <p className="text-stone-500 text-sm line-clamp-2">
                Our classic espresso with house-made vanilla bean syrup and oat milk.
              </p>
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-stone-50">
              <span className="font-bold text-stone-900 text-lg">$5.25</span>
              <button className="text-sm font-semibold text-amber-700 hover:text-amber-800">+ Add to Order</button>
            </div>
          </div>

          <div className="bg-white border border-stone-100 rounded-2xl p-5 hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <div
                className="h-48 bg-stone-100 rounded-xl mb-4 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop')",
                }}
              ></div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-stone-900">Spanish Latte</h3>
              </div>
              <p className="text-stone-500 text-sm line-clamp-2">
                Espresso layered with sweet condensed milk and texture-rich steamed whole milk.
              </p>
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-stone-50">
              <span className="font-bold text-stone-900 text-lg">$5.50</span>
              <button className="text-sm font-semibold text-amber-700 hover:text-amber-800">+ Add to Order</button>
            </div>
          </div>

          <div className="bg-white border border-stone-100 rounded-2xl p-5 hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <div
                className="h-48 bg-stone-100 rounded-xl mb-4 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop')",
                }}
              ></div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-stone-900">Ceremonial Uji Matcha</h3>
              </div>
              <p className="text-stone-500 text-sm line-clamp-2">
                Authentic Japanese matcha whisked to perfection, served over ice with your choice of milk.
              </p>
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-stone-50">
              <span className="font-bold text-stone-900 text-lg">$6.00</span>
              <button className="text-sm font-semibold text-amber-700 hover:text-amber-800">+ Add to Order</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white py-12 px-6 text-center text-sm text-stone-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold text-stone-800 text-lg">Homies Cafe.</p>
          <p>&copy; 2026 Homies Cafe. Built with AI. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-800">Instagram</a>
            <a href="#" className="hover:text-stone-800">Location</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
