"use client";
import DataTable from "@/components/common/data-table";
import DropdownAction from "@/components/common/dropdown-common";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { HEADER_TABLE_USER } from "@/constants/user-constant";
import { createClient } from "@/lib/supabase/client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { EllipsisVertical, Pencil, Trash } from "lucide-react";
import { useMemo } from "react";
import { toast } from "sonner";

export default function UserManagement() {
  const supabase = createClient();
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*", { count: "exact" })
        .order("created_at");
      if (error)
        toast.error("Get User Data Failed", {
          description: error.message,
        });

      return data;
    },
  });
  const filterData = useMemo(() => {
    return (users || []).map((user, index) => {
      return [
        index + 1,
        user.id,
        user.name,
        user.role,
        <DropdownAction
          menu={[
            {
              label: (
                <span className="flex items-center gap-2">
                  <Pencil />
                  Edit
                </span>
              ),
              action: () => {},
            },
            {
              label: (
                <span className="flex items-center gap-2">
                  <Trash className="text-red-400" />
                  Delete
                </span>
              ),
              variant: "destructive",
              action: () => {},
            },
          ]}
        />,
      ];
    });
  }, [users]);
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row mb-4 gap-2 justify-between w-full">
        <h1 className="text-2xl font-bold">User Management</h1>
        <div className="flex gap-2">
          <Input placeholder="Search by Name" />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Create</Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
      {isLoading && <div>Loading</div>}
      <DataTable
        header={HEADER_TABLE_USER}
        data={filterData}
        isLoading={isLoading}
      />
      {/* {users?.map((user) => {
        return (
          <Card key={user.id}>
            <CardHeader className="flex flex-row justify-between items-center py-2.5 space-x-2.5 ">
              <div className="flex space-x-5 items-center ">
                <img
                  src={user.avatar_url}
                  className="w-10 h-10 object-cover object-top rounded-lg"
                />
                <CardTitle>
                  {user.name}
                  <CardDescription className="capitalize">
                    {user.role}
                  </CardDescription>
                </CardTitle>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="bg-red-500 space-x-5">
                    <Trash />
                    Delete Account
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
          </Card>
        );
      })} */}
    </div>
  );
}
