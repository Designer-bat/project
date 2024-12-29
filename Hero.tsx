import React from 'react';
import Button from './ui/Button';
import { Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <Palette className="h-16 w-16 mx-auto mb-6 text-blue-600" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The Ultimate Collaborative Space for Local Artists
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Join ArtSphere to showcase your work, collaborate on projects, and connect with the creative community.
        </p>
        <Button size="lg">
          Join Today
        </Button>
      </div>
    </section>
  );
};

export default Hero;