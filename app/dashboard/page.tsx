"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import UserProfile from "@/components/dashboard/UserProfile";
import WeatherWidget from "@/components/dashboard/WeatherWidget";
import NotesWidget from "@/components/dashboard/NotesWidget";
import TimerWidget from "@/components/dashboard/TimerWidget";
import NewsWidget from "@/components/dashboard/NewsWidget";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserProfile />

          <WeatherWidget />

          <NotesWidget />

          <TimerWidget />

          <div className="md:col-span-2">
            <NewsWidget />
          </div>
        </div>
      </DashboardLayout>
    </AuthGuard>
  );
}