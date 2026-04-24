'use client';

import { useEffect, useState } from 'react';

interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  _count?: {
    studyPlans?: number;
    summaries?: number;
    quizzes?: number;
    tutoringSessions?: number;
  };
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/protected/user');

        if (!response.ok) {
          throw new Error('Failed to load profile');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError('Unable to load profile information.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="p-8">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {error || 'Profile not found.'}
        </div>
      </div>
    );
  }

  const studyPlans = user._count?.studyPlans ?? 0;
  const summaries = user._count?.summaries ?? 0;
  const quizzes = user._count?.quizzes ?? 0;
  const tutoringSessions = user._count?.tutoringSessions ?? 0;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="mt-2 text-gray-600">View your SmartStudy AI account information.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Account Information</h2>
          <div className="space-y-3 text-gray-700">
            <p><span className="font-medium">Full name:</span> {user.fullName}</p>
            <p><span className="font-medium">Email:</span> {user.email}</p>
            <p><span className="font-medium">Member since:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
            <p><span className="font-medium">Last updated:</span> {new Date(user.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Study Activity</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Study Plans</p>
              <p className="text-2xl font-bold text-gray-900">{studyPlans}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Summaries</p>
              <p className="text-2xl font-bold text-gray-900">{summaries}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Quizzes</p>
              <p className="text-2xl font-bold text-gray-900">{quizzes}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Tutoring Sessions</p>
              <p className="text-2xl font-bold text-gray-900">{tutoringSessions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
