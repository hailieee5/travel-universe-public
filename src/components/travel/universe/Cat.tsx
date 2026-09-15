import { motion } from "framer-motion";
import Image from "next/image";

type Props = { reduceMotion: boolean };

export function Cat({ reduceMotion }: Props) {
  return (
    <motion.div className="universe-cat" aria-label="A small blue and white cat traveling alongside her" role="img" animate={reduceMotion ? undefined : { x: [0, 5, 0], y: [0, -2, 0] }} transition={{ duration: 9, delay: 0.35, repeat: Infinity, ease: "easeInOut" }}>
      <Image src="/illustrations/travel-cat-v1.png" alt="" width={1536} height={1024} priority sizes="70px" />
    </motion.div>
  );
}
