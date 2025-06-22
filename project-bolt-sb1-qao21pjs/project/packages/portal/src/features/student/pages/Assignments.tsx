import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '@hind-lms/design-system';
import { FileText, Calendar, Clock } from 'lucide-react';

const Assignments: React.FC = () => {
  const assignments = [
    {
      id: 1,
      title: 'Math Assignment 3: Differential Equations',
      course: 'Advanced Mathematics',
      dueDate: '2024-01-15',
      status: 'pending',
      priority: 'high',
      points: 100,
      description: 'Solve complex differential equations using various methods.'
    },
    {
      id: 2,
      title: 'Literature Essay: Shakespeare Analysis',
      course: 'English Literature',
      dueDate: '2024-01-18',
      status: 'in-progress',
      priority: 'medium',
      points: 75,
      description: 'Analyze themes in Hamlet with focus on character development.'
    },
    {
      id: 3,
      title: 'CS Project Phase 2: Database Design',
      course: 'Computer Science Fundamentals',
      dueDate: '2024-01-22',
      status: 'pending',
      priority: 'low',
      points: 150,
      description: 'Design and implement a relational database for the project.'
    },
    {
      id: 4,
      title: 'Physics Lab Report 4',
      course: 'Physics I',
      dueDate: '2024-01-12',
      status: 'submitted',
      priority: 'low',
      points: 50,
      description: 'Document findings from the thermodynamics experiment.'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'warning';
      case 'in-progress': return 'default';
      case 'submitted': return 'success';
      default: return 'default';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return 'Due tomorrow';
    return `${diffDays} days left`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
        <p className="mt-2 text-gray-600">Manage your assignments and track deadlines.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {assignments.filter(a => a.status === 'pending').length}
                </div>
                <p className="text-xs text-gray-500">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {assignments.filter(a => a.status === 'in-progress').length}
                </div>
                <p className="text-xs text-gray-500">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {assignments.filter(a => a.status === 'submitted').length}
                </div>
                <p className="text-xs text-gray-500">Submitted</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {assignments.reduce((sum, a) => sum + a.points, 0)}
                </div>
                <p className="text-xs text-gray-500">Total Points</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{assignment.title}</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant={getStatusColor(assignment.status) as any}>
                    {assignment.status.replace('-', ' ')}
                  </Badge>
                  <span className={`text-sm font-medium ${getPriorityColor(assignment.priority)}`}>
                    {assignment.priority} priority
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{assignment.course}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">{assignment.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </span>
                    <span className="text-gray-600">
                      Points: {assignment.points}
                    </span>
                  </div>
                  <span className={`font-medium ${
                    getDaysUntilDue(assignment.dueDate).includes('Overdue') || 
                    getDaysUntilDue(assignment.dueDate).includes('today')
                      ? 'text-red-600' 
                      : 'text-gray-600'
                  }`}>
                    {getDaysUntilDue(assignment.dueDate)}
                  </span>
                </div>

                {assignment.status !== 'submitted' && (
                  <div className="flex space-x-2 pt-2">
                    <button className="bg-teal-600 text-white py-2 px-4 rounded-md text-sm hover:bg-teal-700 transition-colors">
                      Start Assignment
                    </button>
                    <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-sm hover:bg-gray-200 transition-colors">
                      View Details
                    </button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Assignments;