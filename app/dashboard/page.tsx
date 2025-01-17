import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";

const AdminPage = async () => {
  const appointments = {
    scheduledCount: 16,
    pendingCount: 16,
    cancelledCount: 16,
    documents: [
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "Ali",
        },
        status: "scheduled",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "Subhan",
        },
        status: "cancelled",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "Usama",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },

      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },

      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },
      {
        patient: {
          name: "hameed",
        },
        status: "pending",
        schedule: new Date(),
        primaryPhysician: "Leila Cameron",
        
      },



    ],
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome Admin</h1>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;