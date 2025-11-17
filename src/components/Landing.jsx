import React from 'react';

// AIToolLandingPage.tsx — Attractive AI tool landing page without navbar using Tailwind CSS

 function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Build Smarter with <span className="text-white">AI Tools</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Unlock the power of Artificial Intelligence to automate tasks, generate content, and innovate faster than ever before.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition">
              Try for Free
            </button>
            <button className="px-8 py-3 border border-indigo-400 text-indigo-300 font-semibold rounded-full hover:bg-indigo-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Empower Your Workflow
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Our AI solutions help individuals and teams create, analyze, and optimize with ease and speed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'AI Chatbot',
              desc: 'Conversational AI trained to answer and assist with real-time insights.',
              icon: '💬',
            },
            {
              title: 'Text Generator',
              desc: 'Create blog posts, code, or copywriting instantly with smart AI models.',
              icon: '⚙️',
            },
            {
              title: 'Image Creator',
              desc: 'Turn text prompts into stunning visuals using AI-powered art tools.',
              icon: '🎨',
            },
            {
              title: 'Analytics Engine',
              desc: 'Gain deep insights from your data through automated AI analytics.',
              icon: '📊',
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition transform border border-gray-700">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-purple-700 text-center py-24 px-6 overflow-hidden rounded-t-3xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Start Innovating with AI Today</h2>
          <p className="text-indigo-100 mb-8">
            Transform your ideas into action using the next generation of AI tools designed for creators and developers.
          </p>
          <button className="px-10 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition">
            Get Early Access
          </button>
        </div>
      </section>


    </div>
  );
}
export default Landing;