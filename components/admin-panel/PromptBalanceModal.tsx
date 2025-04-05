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
import React, { useEffect, useState } from "react";

interface PromptBalanceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  modalButtonClick: () => void;
  user: any;
  refreshUsers: () => Promise<void>;
}

const PromptBalanceModal: React.FC<PromptBalanceModalProps> = (props) => {
  const [balance, setBalance] = useState<string>("");
  const [balanceError, setBalanceError] = useState<string>("");

  useEffect(() => {
    if (!props.open) {
      setBalance("");
      setBalanceError("");
    }
  }, [props.open]);

  const balanceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setBalance(e.target.value);
    if (e.target.value.trim() === "") {
      setBalanceError("You must enter a balance.");
    } else if (isNaN(+e.target.value)) {
      setBalanceError("You must enter a number.");
    } else {
      setBalanceError("");
    }
  };

  const addBalanceHandler = async () => {
    if (balance.trim() === "") {
      setBalanceError("You must enter a balance.");
      return;
    } else if (isNaN(+balance)) {
      setBalanceError("You must enter a number.");
      return;
    } else {
      setBalanceError("");
    }

    try {
      const res = await fetch("/api/promptBalance", {
        method: "PUT",
        body: JSON.stringify({ email: props?.user?.email, value: +balance }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }

    await props.refreshUsers();
    props.onOpenChange(false);
    setBalance("");
    setBalanceError("");
  };

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
            onChange={balanceChangeHandler}
          />
          {balanceError && <span className="text-red-500">{balanceError}</span>}
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              setBalance("");
              setBalanceError("");
              props.onOpenChange(false);
            }}
          >
            cancel
          </Button>
          <Button onClick={addBalanceHandler}>continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PromptBalanceModal;
