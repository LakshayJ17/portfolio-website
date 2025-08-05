import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { Container } from "../container";

export const Footer = () => {
  return (
    <Container className="flex justify-between p-3 border-t border-neutral-100">
      <p className="text-xs text-neutral-500">Built by Lakshay Jain</p>
      <div className="flex items-center justify-center gap-4">
        <Link href={"https://github.com/LakshayJ17"}>
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href={"https://x.com/Lakshcode"}>
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href={"https://www.linkedin.com/in/lakshayj17"}>
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href={"https://leetcode.com/u/meLaksh17/"}>
          <IconBrandLeetcode className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href={"https://leetcode.com/u/meLaksh17/"}>
          <IconBrandTelegram className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
