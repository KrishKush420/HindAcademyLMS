import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Avatar, Badge } from '@hind-lms/design-system';
import { Search, Filter, Mail, Phone } from 'lucide-react';

const Students: React.FC = () => {
  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      phone: '+1 (555) 123-4567',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      courses: ['Advanced Mathematics', 'Statistics'],
      gpa: 3.8,
      status: 'active',
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@email.com',
      phone: '+1 (555) 234-5678',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      courses: ['Calculus I', 'Linear Algebra'],
      gpa: 3.6,
      status: 'active',
      lastActivity: '1 day ago'
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol.davis@email.com',
      phone: '+1 (555) 345-6789',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      courses: ['Statistics', 'Advanced Mathematics'],
      gpa: 3.9,
      status: 'active',
      lastActivity: '3 hours ago'
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      phone: '+1 (555) 456-7890',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      courses: ['Linear Algebra', 'Calculus I'],
      gpa: 3.4,
      status: 'inactive',
      lastActivity: '1 week ago'
    },
    {
      id: 5,
      name: 'Emma Brown',
      email: 'emma.brown@email.com',
      phone: '+1 (555) 567-8901',
      avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      courses: ['Advanced Mathematics', 'Statistics', 'Linear Algebra'],
      gpa: 4.0,
      status: 'active',
      lastActivity: '30 minutes ago'
    },
    {
      id: 6,
      name: 'Frank Garcia',
      email: 'frank.garcia@email.com',
      phone: '+1 (555) 678-9012',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      courses: ['Calculus I'],
      gpa: 3.2,
      status: 'active',
      lastActivity: '5 hours ago'
    },
  ];

  const getGpaColor = (gpa: number) => {
    if (gpa >= 3.7) return 'text-green-600';
    if (gpa >= 3.0) return 'text-blue-600';
    if (gpa >= 2.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Students</h1>
        <p className="mt-2 text-gray-600">Manage and communicate with your students.</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search students..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">{students.length}</div>
            <p className="text-sm text-gray-600">Total Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {students.filter(s => s.status === 'active').length}
            </div>
            <p className="text-sm text-gray-600">Active Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">
              {(students.reduce((sum, s) => sum + s.gpa, 0) / students.length).toFixed(1)}
            </div>
            <p className="text-sm text-gray-600">Average GPA</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">4</div>
            <p className="text-sm text-gray-600">Active Courses</p>
          </CardContent>
        </Card>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <Card key={student.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar src={student.avatar} size="lg" fallback={student.name.charAt(0)} />
                <div className="flex-1">
                  <CardTitle className="text-lg">{student.name}</CardTitle>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant={student.status === 'active' ? 'success' : 'secondary'}>
                      {student.status}
                    </Badge>
                    <span className={`text-sm font-medium ${getGpaColor(student.gpa)}`}>
                      GPA: {student.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {student.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {student.phone}
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Enrolled Courses</h4>
                  <div className="flex flex-wrap gap-1">
                    {student.courses.map((course, index) => (
                      <Badge key={index} variant="secondary" size="sm">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-500 pt-2 border-t">
                  Last activity: {student.lastActivity}
                </div>

                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 bg-purple-600 text-white py-2 px-3 rounded text-sm hover:bg-purple-700 transition-colors">
                    View Profile
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded text-sm hover:bg-gray-200 transition-colors">
                    Message
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

export default Students;