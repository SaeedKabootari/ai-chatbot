import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ModalButtonProps {
  onClick: () => void;
  tooltipText: string;
  children: React.ReactNode;
}

const ModalButton: React.FC<ModalButtonProps> = (props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button onClick={props.onClick}>
          {props.children}
        </button>
      </TooltipTrigger>
      <TooltipContent>{props.tooltipText}</TooltipContent>
    </Tooltip>
  );
};

export default ModalButton;
