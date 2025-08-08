"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

type MotionDivProps = ComponentProps<typeof motion.div>;

export const MotionDiv = (props: MotionDivProps) => {
    return <motion.div {...props} />;
};