"use client";
import AddUserModal from "@/components/admin-panel/AddUserModal";
import DeleteUserModal from "@/components/admin-panel/DeleteUserModal";
import EditUserModal from "@/components/admin-panel/EditUserModal";
import PromptBalanceModal from "@/components/admin-panel/PromptBalanceModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { Tooltip } from "@/components/ui/tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { User ,UserWithoutPassword} from "@/lib/db/schema";

import { useEffect, useState } from "react";


export default function AdminPanel() {
  // State for managing the dialog
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [users, setUsers] = useState<User[]>();
  const [balanceModal, setBalanceModal] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);


  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(()=>{console.log(selectedUser)},[selectedUser])


  // // Function to open the dialog
  // const openDialog = () => {
  //   setIsDialogOpen(true);
  // };

  // // Function to close the dialog
  // const closeDialog = () => {
  //   setIsDialogOpen(false);
  // };



  const getUsers = async ()=>{
    const res = await fetch("/api/user");
    const data = await res.json();
    setUsers(data);
  }

  useEffect(()=>{
    getUsers()
  },[])

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const response = await fetch("/api/user");
  //     const data = await response.json();
  //     // console.log('dddd',JSON.stringify(data))
  //     console.log(data);
  //     setUsers(data);
  //     return data;
  //   };

  //   getUsers();
  // }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-center my-8">
          <h1 className="text-4xl font-extrabold">User Management</h1>
          <AddUserModal
            open={addUserModal}
            onOpenChange={setAddUserModal}
            modalButtonClick={() => setAddUserModal(true)}
          />
        </div>
        <div className="overflow-x-auto max-h-[85vh]">
          <Table>
            <TableCaption>user management table</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>User_id</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>{item.promptBalance}</TableCell>
                  <TableCell>
                    <DeleteUserModal
                      open={deleteUserModal}
                      onOpenChange={setDeleteUserModal}
                      modalButtonClick={() => {
                        setDeleteUserModal(true);
                        setSelectedUser(item)
                      }}
                      user={selectedUser }
                      refreshUsers={getUsers}
                    />
                    <EditUserModal
                      open={editUserModal}
                      onOpenChange={setEditUserModal}
                      modalButtonClick={() => setEditUserModal(true)}
                    />
                    <PromptBalanceModal
                      open={balanceModal}
                      onOpenChange={setBalanceModal}
                      modalButtonClick={() => setBalanceModal(true)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
