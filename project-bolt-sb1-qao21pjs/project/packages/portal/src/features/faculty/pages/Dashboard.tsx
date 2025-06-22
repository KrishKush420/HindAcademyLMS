import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@hind-lms/design-system';
import { BookOpen, Users, ClipboardCheck, MessageSquare } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Faculty Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage your courses, students, and teaching activities.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="role-accent" data-role="faculty">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">4</div>
                <p className="text-xs text-gray-500">This semester</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">124</div>
                <p className="text-xs text-gray-500">Across all courses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <ClipboardCheck className="h-8 w-8 text-yellow-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">18</div>
                <p className="text-xs text-gray-500">Need review</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">7</div>
                <p className="text-xs text-gray-500">Unread</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Advanced Mathematics', students: 32, nextClass: '2 hours' },
                { name: 'Calculus I', students: 28, nextClass: 'Tomorrow' },
                { name: 'Statistics', students: 35, nextClass: '3 days' },
                { name: 'Linear Algebra', students: 29, nextClass: '1 week' },
              ].map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{course.name}</h4>
                    <p className="text-xs text-gray-500">{course.students} students</p>
                  </div>
                  <span className="text-xs text-gray-600">Next: {course.nextClass}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Student Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { student: 'Alice Johnson', action: 'submitted assignment', course: 'Advanced Mathematics', time: '2 hours ago' },
                { student: 'Bob Smith', action: 'posted in discussion', course: 'Calculus I', time: '4 hours ago' },
                { student: 'Carol Davis', action: 'completed quiz', course: 'Statistics', time: '6 hours ago' },
                { student: 'David Wilson', action: 'requested help', course: 'Linear Algebra', time: '1 day ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{activity.student}</h4>
                    <p className="text-xs text-gray-500">{activity.action} in {activity.course}</p>
                  </div>
                  <span className="text-xs text-gray-600">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;