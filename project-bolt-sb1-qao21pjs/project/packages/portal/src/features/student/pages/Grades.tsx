import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '@hind-lms/design-system';
import { Award, TrendingUp, BarChart3 } from 'lucide-react';

const Grades: React.FC = () => {
  const grades = [
    {
      course: 'Advanced Mathematics',
      assignments: [
        { name: 'Assignment 1', grade: 95, maxPoints: 100, date: '2024-01-05' },
        { name: 'Assignment 2', grade: 88, maxPoints: 100, date: '2024-01-10' },
        { name: 'Midterm Exam', grade: 92, maxPoints: 100, date: '2024-01-12' },
      ],
      currentGrade: 91.7,
      letterGrade: 'A-'
    },
    {
      course: 'Computer Science Fundamentals',
      assignments: [
        { name: 'Project Phase 1', grade: 98, maxPoints: 100, date: '2024-01-08' },
        { name: 'Quiz 1', grade: 95, maxPoints: 100, date: '2024-01-11' },
        { name: 'Lab Assignment 1', grade: 90, maxPoints: 100, date: '2024-01-13' },
      ],
      currentGrade: 94.3,
      letterGrade: 'A'
    },
    {
      course: 'English Literature',
      assignments: [
        { name: 'Essay 1', grade: 85, maxPoints: 100, date: '2024-01-06' },
        { name: 'Discussion Posts', grade: 92, maxPoints: 100, date: '2024-01-09' },
        { name: 'Quiz 1', grade: 78, maxPoints: 100, date: '2024-01-14' },
      ],
      currentGrade: 85.0,
      letterGrade: 'B+'
    },
    {
      course: 'Physics I',
      assignments: [
        { name: 'Lab Report 1', grade: 88, maxPoints: 100, date: '2024-01-07' },
        { name: 'Problem Set 1', grade: 82, maxPoints: 100, date: '2024-01-12' },
        { name: 'Lab Report 2', grade: 90, maxPoints: 100, date: '2024-01-15' },
      ],
      currentGrade: 86.7,
      letterGrade: 'B+'
    },
  ];

  const overallGPA = (grades.reduce((sum, course) => sum + course.currentGrade, 0) / grades.length / 25).toFixed(2);

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-green-600';
    if (grade >= 80) return 'text-blue-600';
    if (grade >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getLetterGradeColor = (letterGrade: string) => {
    if (letterGrade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (letterGrade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (letterGrade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Grades</h1>
        <p className="mt-2 text-gray-600">Track your academic performance across all courses.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="role-accent" data-role="student">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Overall GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Award className="h-8 w-8 text-teal-600 mr-3" />
              <div>
                <div className="text-3xl font-bold text-gray-900">{overallGPA}</div>
                <p className="text-xs text-gray-500">Current semester</p>
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
              <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  {(grades.reduce((sum, course) => sum + course.currentGrade, 0) / grades.length).toFixed(1)}%
                </div>
                <p className="text-xs text-gray-500">Across all courses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="text-3xl font-bold text-green-600">+2.3%</div>
                <p className="text-xs text-gray-500">From last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Grades */}
      <div className="space-y-6">
        {grades.map((courseData, courseIndex) => (
          <Card key={courseIndex}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{courseData.course}</CardTitle>
                <div className="flex items-center space-x-3">
                  <Badge className={getLetterGradeColor(courseData.letterGrade)}>
                    {courseData.letterGrade}
                  </Badge>
                  <span className={`text-2xl font-bold ${getGradeColor(courseData.currentGrade)}`}>
                    {courseData.currentGrade.toFixed(1)}%
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 mb-3">Assignment Breakdown</h4>
                {courseData.assignments.map((assignment, assignmentIndex) => (
                  <div key={assignmentIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h5 className="font-medium text-gray-900">{assignment.name}</h5>
                      <p className="text-sm text-gray-500">
                        {new Date(assignment.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${getGradeColor((assignment.grade / assignment.maxPoints) * 100)}`}>
                        {assignment.grade}/{assignment.maxPoints}
                      </div>
                      <div className="text-sm text-gray-500">
                        {((assignment.grade / assignment.maxPoints) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Grades;