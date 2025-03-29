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

import { useState } from "react";

export default function AdminPanel() {
  // State for managing the dialog
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [balanceModal, setBalanceModal] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);

  // // Function to open the dialog
  // const openDialog = () => {
  //   setIsDialogOpen(true);
  // };

  // // Function to close the dialog
  // const closeDialog = () => {
  //   setIsDialogOpen(false);
  // };

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
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell>
                  <DeleteUserModal
                    open={deleteUserModal}
                    onOpenChange={setDeleteUserModal}
                    modalButtonClick={() => setDeleteUserModal(true)}
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
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell>
                  <DeleteUserModal
                    open={deleteUserModal}
                    onOpenChange={setDeleteUserModal}
                    modalButtonClick={() => setDeleteUserModal(true)}
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

              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell className="flex gap-[10px]"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fsdsdsdsdsdsd</TableCell>
                <TableCell>asasa@gmail.com</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>125000</TableCell>
                <TableCell>
                  <DeleteUserModal
                    open={deleteUserModal}
                    onOpenChange={setDeleteUserModal}
                    modalButtonClick={() => setDeleteUserModal(true)}
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
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
