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
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = (props) => {
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
            <div className="flex flex-col">
              <span>Username:</span>
              <span>Email: </span>
              <span>ID: </span>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => props.onOpenChange(false)}>
            cancel
          </Button>
          <Button>continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserModal;
