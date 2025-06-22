import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from '@hind-lms/design-system';
import { BookOpen, Users, Plus, Settings, BarChart3 } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: 'Advanced Mathematics',
      code: 'MATH 301',
      instructor: 'Dr. Sarah Johnson',
      students: 32,
      department: 'Mathematics',
      semester: 'Spring 2024',
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-05-15',
      credits: 3,
      capacity: 40
    },
    {
      id: 2,
      name: 'Computer Science Fundamentals',
      code: 'CS 101',
      instructor: 'Prof. Michael Chen',
      students: 45,
      department: 'Computer Science',
      semester: 'Spring 2024',
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-05-15',
      credits: 4,
      capacity: 50
    },
    {
      id: 3,
      name: 'English Literature',
      code: 'ENG 201',
      instructor: 'Dr. Emily Watson',
      students: 28,
      department: 'English',
      semester: 'Spring 2024',
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-05-15',
      credits: 3,
      capacity: 35
    },
    {
      id: 4,
      name: 'Physics I',
      code: 'PHYS 101',
      instructor: 'Dr. Robert Kim',
      students: 38,
      department: 'Physics',
      semester: 'Spring 2024',
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-05-15',
      credits: 4,
      capacity: 40
    },
    {
      id: 5,
      name: 'Organic Chemistry',
      code: 'CHEM 301',
      instructor: 'Dr. Lisa Park',
      students: 0,
      department: 'Chemistry',
      semester: 'Fall 2024',
      status: 'draft',
      startDate: '2024-08-15',
      endDate: '2024-12-15',
      credits: 4,
      capacity: 30
    },
  ];

  const departments = ['All', 'Mathematics', 'Computer Science', 'English', 'Physics', 'Chemistry'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'draft': return 'warning';
      case 'archived': return 'secondary';
      default: return 'default';
    }
  };

  const getEnrollmentPercentage = (students: number, capacity: number) => {
    return Math.round((students / capacity) * 100);
  };

  const getEnrollmentColor = (percentage: number) => {
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
          <p className="mt-2 text-gray-600">Manage courses, enrollments, and academic programs.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Course
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">{courses.length}</div>
                <p className="text-sm text-gray-600">Total Courses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {courses.reduce((sum, course) => sum + course.students, 0)}
                </div>
                <p className="text-sm text-gray-600">Total Enrollments</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {courses.filter(c => c.status === 'active').length}
                </div>
                <p className="text-sm text-gray-600">Active Courses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {new Set(courses.map(c => c.department)).size}
                </div>
                <p className="text-sm text-gray-600">Departments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => {
          const enrollmentPercentage = getEnrollmentPercentage(course.students, course.capacity);
          
          return (
            <Card key={course.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <p className="text-sm text-gray-600">{course.code} • {course.department}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={getStatusColor(course.status) as any}>
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
                      <span className="text-gray-600">Instructor:</span>
                      <p className="font-medium">{course.instructor}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Semester:</span>
                      <p className="font-medium">{course.semester}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Credits:</span>
                      <p className="font-medium">{course.credits}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Duration:</span>
                      <p className="font-medium">
                        {new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Enrollment</span>
                      <span className={`font-medium ${getEnrollmentColor(enrollmentPercentage)}`}>
                        {course.students}/{course.capacity} ({enrollmentPercentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          enrollmentPercentage >= 90 ? 'bg-red-500' :
                          enrollmentPercentage >= 75 ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${enrollmentPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" className="flex-1">
                      Manage
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;