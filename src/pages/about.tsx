import React from 'react';
import { Target, Users, Book, Award } from 'lucide-react';

export function About() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Osman's Institute</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing quality education and fostering a community of lifelong learners through innovative teaching methods and personalized learning experiences.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower students with knowledge and skills through accessible, high-quality education that prepares them for success in their chosen fields.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <Book className="h-12 w-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a leading global institution that transforms education through innovation, technology, and personalized learning experiences.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '1000+', label: 'Students Enrolled', icon: Users },
            { number: '50+', label: 'Expert Teachers', icon: Award },
            { number: '100+', label: 'Courses Offered', icon: Book },
            { number: '95%', label: 'Success Rate', icon: Target }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              {React.createElement(stat.icon, { className: 'h-8 w-8 mx-auto mb-4 text-blue-600' })}
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* History */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">Our History</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, Osman's Institute of Education began with a vision to make quality education accessible to everyone. What started as a small online tutoring service has grown into a comprehensive educational platform serving students worldwide.
          </p>
          <p className="text-gray-600">
            Today, we continue to expand our offerings and embrace new technologies to provide the best learning experience for our students. Our commitment to excellence in education remains unwavering as we grow and evolve.
          </p>
        </div>
      </div>
    </div>
  );
}