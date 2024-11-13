import React from "react";

type Props = {
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  isOpen?: boolean;
  className?: string | undefined;
};

const NavBtn = ({ Icon, title, isOpen = false, className }: Props) => {
  return (
    <button
      className={`${className} btn hover:text-primary hover:outline hover:bg-white group btn-sm flex btn-ghost flex-row shadow shadow-background`}
    >
      <Icon className="size-4 group text-icon group-hover:text-primary" />
      <span className="font-normal text-foreground group-hover:text-primary group group-hover:font-bold">
        {title}
      </span>
    </button>
  );
};

export default NavBtn;
