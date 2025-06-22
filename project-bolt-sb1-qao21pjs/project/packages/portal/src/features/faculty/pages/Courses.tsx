import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from '@hind-lms/design-system';
import { BookOpen, Users, Plus, Settings } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: 'Advanced Mathematics',
      code: 'MATH 301',
      students: 32,
      semester: 'Spring 2024',
      status: 'active',
      schedule: 'MWF 10:00-11:00 AM',
      room: 'Room 201',
      assignments: 8,
      gradedAssignments: 6
    },
    {
      id: 2,
      name: 'Calculus I',
      code: 'MATH 101',
      students: 28,
      semester: 'Spring 2024',
      status: 'active',
      schedule: 'TTh 2:00-3:30 PM',
      room: 'Room 105',
      assignments: 10,
      gradedAssignments: 8
    },
    {
      id: 3,
      name: 'Statistics',
      code: 'MATH 201',
      students: 35,
      semester: 'Spring 2024',
      status: 'active',
      schedule: 'MWF 1:00-2:00 PM',
      room: 'Room 150',
      assignments: 6,
      gradedAssignments: 4
    },
    {
      id: 4,
      name: 'Linear Algebra',
      code: 'MATH 205',
      students: 29,
      semester: 'Spring 2024',
      status: 'draft',
      schedule: 'TTh 9:00-10:30 AM',
      room: 'Room 180',
      assignments: 0,
      gradedAssignments: 0
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="mt-2 text-gray-600">Manage your courses and track student progress.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Course
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <p className="text-sm text-gray-600">{course.code} • {course.semester}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={course.status === 'active' ? 'success' : 'secondary'}>
                    {course.status}
                  </Badge>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Settings className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Schedule:</span>
                    <p className="font-medium">{course.schedule}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Location:</span>
                    <p className="font-medium">{course.room}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-gray-400" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
                    <span>{course.assignments} assignments</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Grading Progress</span>
                    <span className="font-medium">
                      {course.gradedAssignments}/{course.assignments} graded
                    </span>
                  </div>
                  {course.assignments > 0 && (
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-purple-500"
                        style={{ width: `${(course.gradedAssignments / course.assignments) * 100}%` }}
                      ></div>
                    </div>
                  )}
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Course
                  </Button>
                  <Button size="sm" className="flex-1">
                    Manage
                  </Button>
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