import { motion } from "framer-motion";
import { SelectedPage } from "../shared/type";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  icon: JSX.Element,
  title: string,
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}
const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale:1 } 
}

function Benefit({icon, title, description}: Props) {
  return (
    <motion.div variants={childVariant} className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100">
{icon}
                </div>
             </div>
             <h4 className="font-bold">{title}</h4>
             <p>{description}</p>
             <AnchorLink className="text-"></AnchorLink>
    </motion.div>
  )
}

export default Benefit