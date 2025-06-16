import { cn } from "@/lib/utils";
import type { ComponentProps, PropsWithChildren } from "react";

const Actions: React.FC<PropsWithChildren<ComponentProps<"div">>> & {
	List: React.FC<PropsWithChildren>;
	Section: React.FC<PropsWithChildren>;
} = ({ children, className, ...props }) => (
	<div
		className={cn(
			"grid grid-cols-[repeat(auto-fill,minmax(24ch,1fr))] gap-4",
			className,
		)}
		{...props}
	>
		{children}
	</div>
);

const ActionsSection: React.FC<PropsWithChildren> = ({ children }) => (
	<div className="flex flex-col gap-2">{children}</div>
);

const ActionsList: React.FC<PropsWithChildren> = ({ children }) => {
	return <ul className="pl-4 flex flex-col gap-2">{children}</ul>;
};

export const Heading: React.FC<PropsWithChildren> = ({ children }) => (
	<span className="font-bold">{children}</span>
);

export const Action: React.FC<
	PropsWithChildren<ComponentProps<"button"> & { action?: () => void }>
> = ({ children, action }) => (
	<li className="w-fit">
		<button
			onClick={action}
			className={
				action
					? "text-link hover:text-link-hover underline-offset-2 hover:underline cursor-pointer"
					: ""
			}
		>
			{children}
		</button>
	</li>
);

Actions.List = ActionsList;
Actions.Section = ActionsSection;

export default Actions;
