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
    <Container className="flex justify-between border-t border-neutral-100 p-3">
      <p className="text-xs text-neutral-500">Built by Lakshay Jain</p>
      <div className="flex items-center justify-center gap-4">
        <Link href={"https://github.com/LakshayJ17"} target="blank">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href={"https://x.com/Lakshcode"} target="blank">
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href={"https://www.linkedin.com/in/lakshayj17"} target="blank">
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href={"https://leetcode.com/u/meLaksh17/"} target="blank">
          <IconBrandLeetcode className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
