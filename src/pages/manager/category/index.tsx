import AdminLayout from "@/src/component/layout/client.admin";
import SwitchText from "@/src/component/switch/swittch.text";

import { useState } from "react";

export default function Darboard() {
  const [status, setStatus] = useState(false);
  return (
    <AdminLayout>
      <SwitchText status={status} change={setStatus} />
    </AdminLayout>
  );
}
