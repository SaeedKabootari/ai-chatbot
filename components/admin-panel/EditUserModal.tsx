import { Pencil } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";

interface UserRole {
  role: "admin" | "user";
}

interface EditUserModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  modalButtonClick: () => void;
  user: any;
  refreshUsers: () => Promise<void>;
}

const EditUserModal: React.FC<EditUserModalProps> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<UserRole["role"]>("user");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  useEffect(() => {
    if (props.open) {
      setEmail(props.user.email);
      setPassword("");
      setRole(props.user.role);
      setEmailError("");
      setPasswordError("");
      setFormError("");
    }
  }, [props.open, props.user]);


  // useEffect(() => {
  //   if (emailError === "" && passwordError === "") {
  //     setFormError("");
  //   }
    
  // }, [emailError, passwordError]);

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
    // if (e.target.value.trim() === "") {
    //   setPasswordError("Password is required.");
    // } else  if (e.target.value.trim().length < 8) {
    //   setPasswordError("Password must be at least 8 characters.");
    // } else {
    //   setPasswordError("");
    // }
    if (0 < e.target.value.trim().length && e.target.value.trim().length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };

  const editUserHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setFormError("");
    if (email.length && emailError.length === 0 && passwordError.length=== 0 ) {
      try {
        const res = await fetch("/api/user", {
          method: "PUT",
          body: JSON.stringify({
            id: props.user.id,
            role: role,
            email: email,
            password: password,
          }),
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json = res.json();
        console.log(json);
        props.onOpenChange(false);
        props.refreshUsers();
      } catch (error) {
        console.log(error);
      }
    } else {
      setFormError("please fill the inputs");
    }
  };

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <ModalButton onClick={props.modalButtonClick} tooltipText="Edit User">
        <Pencil />
      </ModalButton>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
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
            value={email}
            onChange={emailChangeHandler}
          />
          {emailError && <span className="text-red-500">{emailError}</span>}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
          />
          {passwordError && (
            <span className="text-red-500">{passwordError}</span>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="role">role</Label>
          <Select onValueChange={(value) => setRole(value as UserRole["role"])}>
            <SelectTrigger>
              <SelectValue placeholder={role} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">admin</SelectItem>
              <SelectItem value="user">user</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {formError && <span className="text-red-500">{formError}</span>}
        <DialogFooter>
          <Button variant="outline" onClick={() => props.onOpenChange(false)}>
            cancel
          </Button>
          <Button onClick={editUserHandler}>continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserModal;
