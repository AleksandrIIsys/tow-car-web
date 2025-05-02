import React, {ReactNode} from "react";
import {Link} from "@/libs/i18nNavigation";

type NavLinkProps = { className?: string; href: string; children: ReactNode };

const NavLink = ({ className, href = '#', children }: NavLinkProps) => (
    <Link className={`transition duration-400 hover:underline hover:text-blue-600 ${className}`} href={href}>{children}</Link>
);
export default NavLink;