"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [angle, setAngle] = useState(0);
  const [springRate, setSpringRate] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-transparent">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <span className="text-lg font-semibold">Bobyv .1</span>
        </div>
        <ul className="hidden md:flex gap-6 text-sm">
          <li className="text-pink-400 font-semibold border-b-2 border-pink-400 pb-1">Home</li>
          <li className="hover:text-pink-400">About</li>
          <li className="hover:text-pink-400">Calculation</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-around py-16 px-4">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-pink-500 mb-2">Squash</h1>
          <p className="text-xl mb-8">Hitting Machine Simulator</p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold">
            Start Simulation
          </button>
        </div>
          <div className="hidden md:block">
            <Image
              src="/images/machine.png"
              alt="Squash Machine"
              width={400}
              height={400} />
          </div>
      </section>

      {/* Simulation Section */}
      <section className="bg-white text-gray-900 py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">Simulation</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <Image src="/images/map.png" alt="Simulation Map" width={400} height={400} />
            <p className="mt-4 text-xl font-bold">The result : 2.65, 0, 0</p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <label htmlFor="angle" className="block text-lg font-semibold mb-2">Angle of Paddle</label>
                <input
                  id="angle"
                  type="number"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900"
                  min={0}
                  max={100}
                />
            </div>

            <div>
              <label htmlFor="spring" className="block text-lg font-semibold mb-2">Spring Rate</label>
                <input
                  id="spring"
                  type="number"
                  value={springRate}
                  onChange={(e) => setSpringRate(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900"
                  min={0}
                  max={100}
                />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
