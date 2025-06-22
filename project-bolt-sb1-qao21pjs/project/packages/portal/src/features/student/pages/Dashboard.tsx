import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@hind-lms/design-system';
import { BookOpen, Clock, Award, CheckCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here's what's happening with your studies.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="role-accent" data-role="student">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Enrolled Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-teal-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">6</div>
                <p className="text-xs text-gray-500">Active courses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <p className="text-xs text-gray-500">Due this week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">24</div>
                <p className="text-xs text-gray-500">This semester</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Average Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">A-</div>
                <p className="text-xs text-gray-500">92% average</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Advanced Mathematics', progress: 75, color: 'bg-blue-500' },
                { name: 'Computer Science Fundamentals', progress: 92, color: 'bg-green-500' },
                { name: 'English Literature', progress: 68, color: 'bg-yellow-500' },
              ].map((course, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{course.name}</h4>
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${course.color}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{course.progress}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Math Assignment 3', course: 'Advanced Mathematics', due: '2 days', urgent: true },
                { title: 'Literature Essay', course: 'English Literature', due: '5 days', urgent: false },
                { title: 'CS Project Phase 2', course: 'Computer Science', due: '1 week', urgent: false },
              ].map((assignment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{assignment.title}</h4>
                    <p className="text-xs text-gray-500">{assignment.course}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    assignment.urgent 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {assignment.due}
                  </span>
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