import { ReactNode } from "react";

interface SideBarBtnProps {
  title?: string;
  url?: string;
  children: ReactNode;
}

export default function SideBarBtn({
  title,
  url,
  children,
}: SideBarBtnProps): JSX.Element {
  return (
    <a
      href={url}
      title={title}
      className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:sm:scale-150 hover:animate-pulse hover:animate-duration-[500ms] gap-1"
    >
      {children}
    </a>
  );
}
