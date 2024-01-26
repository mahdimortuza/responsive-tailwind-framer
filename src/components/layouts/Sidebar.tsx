import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-slate-300 col-span-2 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col gap-5">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "p-3 bg-slate-200 rounded-md hover:bg-slate-400 hover:text-white transition-all flex items-center gap-2",
              {
                "bg-slate-400 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className=" shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "p-3 bg-slate-200 rounded-md hover:bg-slate-400 hover:text-white transition-all flex items-center gap-2",
              {
                "bg-slate-400 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className=" shrink-0" />
          <span className="truncate">Add Service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "p-3 bg-slate-200 rounded-md hover:bg-slate-400 hover:text-white transition-all flex items-center gap-2",
              {
                "bg-slate-400 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className=" shrink-0" />
          <span className="truncate">Service List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;