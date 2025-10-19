import { motion } from "framer-motion";
// Reusable image component with hover effect

function HoverImage({ src, alt, className }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      whileHover={{ scale: 1.02 }}  // subtle zoom
      transition={{ duration: 0.3 }}
    />
  )
}

export default HoverImage