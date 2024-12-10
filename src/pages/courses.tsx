import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter, BookOpen } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Advanced Mathematics',
    category: 'Mathematics',
    level: 'Advanced',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=60',
    description: 'Master complex mathematical concepts including calculus, linear algebra, and statistics.'
  },
  {
    id: 2,
    title: 'Physics Fundamentals',
    category: 'Science',
    level: 'Intermediate',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop&q=60',
    description: 'Understand the basic principles of physics through practical experiments and theory.'
  },
  {
    id: 3,
    title: 'English Literature',
    category: 'Languages',
    level: 'Beginner',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&auto=format&fit=crop&q=60',
    description: 'Explore classic and contemporary literature while improving your writing skills.'
  }
];

export function Courses() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Available Courses</h1>
          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button variant="outline" size="md">
              <Filter className="h-5 w-5 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    <BookOpen className="inline h-4 w-4 mr-1" />
                    {course.duration}
                  </span>
                  <span className="text-sm text-gray-500">{course.category}</span>
                </div>
                <Button variant="primary" className="w-full">Enroll Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}