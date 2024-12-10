import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teachers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    subject: 'Mathematics',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
    bio: 'Ph.D. in Mathematics from MIT with 10+ years of teaching experience.',
    specialization: 'Advanced Calculus, Linear Algebra'
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    subject: 'Physics',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60',
    bio: 'Former NASA researcher with a passion for making physics accessible to all.',
    specialization: 'Quantum Mechanics, Astrophysics'
  },
  {
    id: 3,
    name: 'Dr. Emily Williams',
    subject: 'English Literature',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60',
    bio: 'Published author and experienced educator specializing in contemporary literature.',
    specialization: 'Creative Writing, Modern Literature'
  }
];

export function Teachers() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Our Expert Teachers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{teacher.name}</h3>
                  <p className="text-blue-200">{teacher.subject}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{teacher.bio}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Specialization:</h4>
                  <p className="text-gray-600">{teacher.specialization}</p>
                </div>
                <Button variant="outline" className="w-full">View Profile</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}