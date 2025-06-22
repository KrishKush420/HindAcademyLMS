import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '@hind-lms/design-system';
import { Filter, Download, Plus } from 'lucide-react';

interface Assignment {
  grade: number | null;
  maxPoints: number;
  submitted: boolean;
}

interface Student {
  id: number;
  name: string;
  assignments: Record<string, Assignment>;
}

const Gradebook: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('Advanced Mathematics');

  const courses = ['Advanced Mathematics', 'Calculus I', 'Statistics', 'Linear Algebra'];

  const students: Student[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      assignments: {
        'Assignment 1': { grade: 95, maxPoints: 100, submitted: true },
        'Assignment 2': { grade: 88, maxPoints: 100, submitted: true },
        'Midterm Exam': { grade: 92, maxPoints: 100, submitted: true },
        'Assignment 3': { grade: null, maxPoints: 100, submitted: false },
      }
    },
    {
      id: 2,
      name: 'Bob Smith',
      assignments: {
        'Assignment 1': { grade: 87, maxPoints: 100, submitted: true },
        'Assignment 2': { grade: 92, maxPoints: 100, submitted: true },
        'Midterm Exam': { grade: 84, maxPoints: 100, submitted: true },
        'Assignment 3': { grade: 89, maxPoints: 100, submitted: true },
      }
    },
    {
      id: 3,
      name: 'Carol Davis',
      assignments: {
        'Assignment 1': { grade: 98, maxPoints: 100, submitted: true },
        'Assignment 2': { grade: 94, maxPoints: 100, submitted: true },
        'Midterm Exam': { grade: 96, maxPoints: 100, submitted: true },
        'Assignment 3': { grade: null, maxPoints: 100, submitted: false },
      }
    },
    {
      id: 4,
      name: 'David Wilson',
      assignments: {
        'Assignment 1': { grade: 76, maxPoints: 100, submitted: true },
        'Assignment 2': { grade: 82, maxPoints: 100, submitted: true },
        'Midterm Exam': { grade: 78, maxPoints: 100, submitted: true },
        'Assignment 3': { grade: 85, maxPoints: 100, submitted: true },
      }
    },
    {
      id: 5,
      name: 'Emma Brown',
      assignments: {
        'Assignment 1': { grade: 100, maxPoints: 100, submitted: true },
        'Assignment 2': { grade: 97, maxPoints: 100, submitted: true },
        'Midterm Exam': { grade: 99, maxPoints: 100, submitted: true },
        'Assignment 3': { grade: 95, maxPoints: 100, submitted: true },
      }
    },
  ];

  const assignmentNames = Object.keys(students[0].assignments);

  const calculateAverage = (student: Student) => {
    const grades = Object.values(student.assignments)
      .filter((assignment) => assignment.grade !== null)
      .map((assignment) => ((assignment.grade as number) / assignment.maxPoints) * 100);
    
    return grades.length > 0
      ? (grades.reduce((sum: number, grade: number) => sum + grade, 0) / grades.length).toFixed(1)
      : 'N/A';
  };

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gradebook</h1>
          <p className="mt-2 text-gray-600">Manage grades and track student performance.</p>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Assignment
          </button>
        </div>
      </div>

      {/* Course Selector */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Course</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {courses.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
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
              {students.filter(s => parseFloat(calculateAverage(s) as string) >= 90).length}
            </div>
            <p className="text-sm text-gray-600">A Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">
              {assignmentNames.length}
            </div>
            <p className="text-sm text-gray-600">Assignments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">
              {(students.reduce((sum, student) => {
                const avg = parseFloat(calculateAverage(student) as string);
                return sum + (isNaN(avg) ? 0 : avg);
              }, 0) / students.length).toFixed(1)}%
            </div>
            <p className="text-sm text-gray-600">Class Average</p>
          </CardContent>
        </Card>
      </div>

      {/* Gradebook Table */}
      <Card>
        <CardHeader>
          <CardTitle>{selectedCourse} - Gradebook</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Student</th>
                  {assignmentNames.map((assignment) => (
                    <th key={assignment} className="text-center py-3 px-4 font-medium text-gray-900 min-w-[120px]">
                      {assignment}
                    </th>
                  ))}
                  <th className="text-center py-3 px-4 font-medium text-gray-900">Average</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{student.name}</td>
                    {assignmentNames.map((assignmentName) => {
                      const assignment = student.assignments[assignmentName];
                      return (
                        <td key={assignmentName} className="text-center py-3 px-4">
                          {assignment.submitted ? (
                            assignment.grade !== null ? (
                              <div>
                                <span className={`font-medium ${getGradeColor((assignment.grade / assignment.maxPoints) * 100)}`}>
                                  {assignment.grade}/{assignment.maxPoints}
                                </span>
                                <div className="text-xs text-gray-500">
                                  {((assignment.grade / assignment.maxPoints) * 100).toFixed(0)}%
                                </div>
                              </div>
                            ) : (
                              <Badge variant="warning" size="sm">Pending</Badge>
                            )
                          ) : (
                            <Badge variant="secondary" size="sm">Not Submitted</Badge>
                          )}
                        </td>
                      );
                    })}
                    <td className="text-center py-3 px-4">
                      <span className={`font-bold ${getGradeColor(parseFloat(calculateAverage(student) as string) || 0)}`}>
                        {calculateAverage(student)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gradebook;