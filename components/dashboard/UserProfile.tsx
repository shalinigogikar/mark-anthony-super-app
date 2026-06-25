"use client";

import { useUserStore } from "@/store/userStore";

export default function UserProfile() {
  const { user } = useUserStore();

  return (
    <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-white">
        User Profile
      </h2>

      <div className="space-y-2 text-white">
        <p>
          <strong>Name:</strong> {user?.name}
        </p>

        <p>
          <strong>Username:</strong> {user?.username}
        </p>

        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        <p>
          <strong>Mobile:</strong> {user?.mobile}
        </p>
      </div>
    </div>
  );
}