import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '@hind-lms/design-system';
import { BookOpen, Clock, Users } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: 'Advanced Mathematics',
      instructor: 'Dr. Sarah Johnson',
      students: 24,
      progress: 75,
      status: 'active',
      nextClass: '2 hours',
      description: 'Calculus, Linear Algebra, and Advanced Problem Solving'
    },
    {
      id: 2,
      name: 'Computer Science Fundamentals',
      instructor: 'Prof. Michael Chen',
      students: 32,
      progress: 92,
      status: 'active',
      nextClass: 'Tomorrow',
      description: 'Programming concepts, Data Structures, and Algorithms'
    },
    {
      id: 3,
      name: 'English Literature',
      instructor: 'Dr. Emily Watson',
      students: 18,
      progress: 68,
      status: 'active',
      nextClass: '3 days',
      description: 'Classical and Modern Literature Analysis'
    },
    {
      id: 4,
      name: 'Physics I',
      instructor: 'Dr. Robert Kim',
      students: 28,
      progress: 45,
      status: 'active',
      nextClass: '1 week',
      description: 'Mechanics, Thermodynamics, and Wave Physics'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
        <p className="mt-2 text-gray-600">Track your enrolled courses and progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{course.name}</CardTitle>
                <Badge variant="success">{course.status}</Badge>
              </div>
              <p className="text-sm text-gray-600">{course.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Instructor:</span>
                  <span className="font-medium">{course.instructor}</span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students} students
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Next: {course.nextClass}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-teal-500"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-md text-sm hover:bg-teal-700 transition-colors">
                    <BookOpen className="h-4 w-4 inline mr-2" />
                    Enter Course
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;