import AdminLayout from "@/layout/AdminLayout";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <AdminLayout>
        {children}
      </AdminLayout>
    );
  }