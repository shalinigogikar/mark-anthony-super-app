"use client";
interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </main>
  );
}