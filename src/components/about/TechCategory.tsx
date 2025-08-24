import React from "react";
import { motion } from "framer-motion";

export interface TechItem {
  Icon: React.ElementType;
  name: string;
}

interface TechCategoryProps {
  title: string;
  icons: TechItem[];
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, icons }) => (
  <div className="bg-darkBg/50 backdrop-blur-sm p-3 xs:p-4 sm:p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300 flex flex-col h-full">
    <h3 className="text-textLight text-base xs:text-lg sm:text-xl font-semibold mb-4 xs:mb-6 text-center">{title}</h3>
    <div className="flex-grow flex items-center justify-center">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
        {icons.map(({ Icon, name }) => (
          <motion.div
            key={name}
            className="group flex flex-col items-center justify-center aspect-square"
            title={name}
            whileHover={{ scale: 1.18 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320 }}
          >
            <Icon
              className="text-xl xs:text-2xl sm:text-3xl text-secondary group-hover:text-accent transition-colors duration-300"
              size={24}
            />
            <span className="text-xs text-secondary/0 group-hover:text-secondary transition-all duration-300 mt-2 text-center">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default TechCategory;
