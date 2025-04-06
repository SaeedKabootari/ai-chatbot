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
import { useEffect, useState } from "react";

interface AddUserModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  modalButtonClick: () => void;
  refreshUsers: () => Promise<void>;
}

const AddUserModal: React.FC<AddUserModalProps> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  useEffect(() => {
    if (!props.open) {
      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
      setFormError("");
    }
  }, [props.open]);

  useEffect(() => {
    if (emailError === "" && passwordError === "") {
      setFormError("");
    }
  }, [emailError, passwordError]);

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.trim() === "") {
      setEmailError("Email is required.");
    } else if (e.target.value.includes("@") === false) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.trim() === "") {
      setPasswordError("Password is required.");
    } else if (e.target.value.trim().length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };
  const addUserHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setFormError("");
    if (
      email.length &&
      password.length &&
      emailError.length === 0 &&
      passwordError.length === 0
    ) {
      const user = { email: email, password: password };
      try {
        const res = await fetch("/api/user", {
          method: "POST",
          body: JSON.stringify(user),
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await res.json();
        console.log(json);
        props.onOpenChange(false);
        setEmail("");
        setPassword("");
        setFormError("");
        props.refreshUsers();
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    } else {
      setFormError("please fill the inputs");
    }
  };

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <ModalButton onClick={props.modalButtonClick} tooltipText="Add User">
        <div className="flex inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          <Plus />
          <span>Add User</span>
        </div>
      </ModalButton>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          {/* <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription> */}
        </DialogHeader>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            onChange={emailChangeHandler}
            value={email}
          />
          {emailError && <span className="text-red-500">{emailError}</span>}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            onChange={passwordChangeHandler}
            value={password}
          />
          {passwordError && (
            <span className="text-red-500">{passwordError}</span>
          )}
        </div>
        {formError && <span className="text-red-500">{formError}</span>}

        <DialogFooter>
          <Button variant="outline" onClick={() => props.onOpenChange(false)}>
            cancel
          </Button>
          <Button onClick={addUserHandler}>continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;
