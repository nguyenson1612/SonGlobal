import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";
import AdminAppClient from "./AdminAppClient";

const AdminPage = async () => {
  const isAdminUser = await isAdmin();

  if (!isAdminUser) redirect("/");

  return (
    <div>
      <AdminAppClient />
    </div>
  );
};

export default AdminPage;