"use client";
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

import { Plus } from "lucide-react";
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";

import ModalButton from "@/components/admin-panel/ModalButton";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function AdminPanel() {
  // State for managing the dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [balanceModal, setBalanceModal] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);

  // Function to open the dialog
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
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
            <TableCell className="flex gap-[10px]">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <ModalButton onClick={openDialog} tooltipText="Delete User">
                  <Trash2 />
                </ModalButton>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button>
                    <Pencil />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Edit User</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button>
                    <Plus />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Add Balance</TooltipContent>
              </Tooltip>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>fsdsdsdsdsdsd</TableCell>
            <TableCell>asasa@gmail.com</TableCell>
            <TableCell>admin</TableCell>
            <TableCell>125000</TableCell>
            <TableCell>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button>
                    <Trash2 />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Delete User</TooltipContent>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
