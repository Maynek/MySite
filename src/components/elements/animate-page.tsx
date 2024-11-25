//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import FrozenRoute from '@/components/elements/FrozenRoute'

export default function MotionWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={pathName}
        initial={{ opacity: 0 ,filter: "blur(5px)",}}
        animate={{ opacity: 1 ,filter: "blur(0px)",}}
        exit={{ opacity: 0, filter: "blur(5px)" }}
        transition={{ duration: 0.5 }}
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  )
}

