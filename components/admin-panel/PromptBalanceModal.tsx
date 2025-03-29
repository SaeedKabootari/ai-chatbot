import { Plus } from "lucide-react";
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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface PromptBalanceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  modalButtonClick: () => void;
}

const PromptBalanceModal: React.FC<PromptBalanceModalProps> = (props) => {
  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <ModalButton onClick={props.modalButtonClick} tooltipText="Add Balance">
        <Plus />
      </ModalButton>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Prompt Balance</DialogTitle>
          <DialogDescription>
            Enter the amount you'd like to add:
          </DialogDescription>
        </DialogHeader>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="promptBalance">Prompt Balance</Label>
          <Input
            type="number"
            id="promptBalance"
            placeholder="Enter a number"
          />
        </div>
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

export default PromptBalanceModal;
