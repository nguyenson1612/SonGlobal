"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
};

export const SidebarItem = ({ 
    label, 
    iconSrc, 
    href,
}: Props) => {
    const pathname = usePathname();
    const active = pathname === href;


    return(
        <Button
            variant={active ? "sidebarOutline" : "sidebar"}
            className = "justify-start h-[52px]"
            asChild
        >
            <Link href={href}>
            <Image
                src={iconSrc}
                alt={label}
                className="mr-5"
                width={32}
                height={32}
            />
            {label}
            </Link>
        </Button>
    );
}