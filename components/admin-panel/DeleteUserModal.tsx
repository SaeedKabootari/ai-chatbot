import { Trash } from "lucide-react";
import ModalButton from "@/components/admin-panel/ModalButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface DeleteUserModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  modalButtonClick: () => void;
  user: any;
  refreshUsers: () => Promise<void>;
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = (props) => {
  const deleteUserHandler = async () => {
    try {
      const res = await fetch("/api/user", {
        method: "DELETE",
        body: JSON.stringify({ id: props?.user?.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
    await props.refreshUsers()
    props.onOpenChange(false)
  };

  // console.log(props.user);
  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <ModalButton onClick={props.modalButtonClick} tooltipText="Delete User">
        <Trash />
      </ModalButton>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want delete this user?
            <span className="flex flex-col">
              {/* <span>Username: </span> */}
              <span>Email: {props?.user?.email}</span>
              <span>ID: {props?.user?.id}</span>
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => props.onOpenChange(false)}>
            cancel
          </Button>
          <Button onClick={deleteUserHandler}>continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserModal;
