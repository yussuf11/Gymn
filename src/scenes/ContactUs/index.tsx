import { motion } from "framer-motion"
import { SelectedPage } from "../shared/type"
import ContactUsPageGraphics from '../Images/ContactUsPageGraphic.png'
import HText from "../shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
const ContactUs = ({setSelectedPage}: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* Header */}
<motion.div className="md:w-3/5"  initial= "hidden" whileInView="visible" viewport={{once: true , amount: 0.5}} transition={{ duration: 0.5}} variants={{
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0},
}}>
<HText>
    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
</HText>
<p className="my-5 ">The time it takes to get in shape depends on individual goals,
 which include strength, endurance, weight loss, body fat loss.</p>
</motion.div>
{/* Form and image */}
<div className="mt-10 justify-between gap-8 md:flex">
    <motion.div
    className="mt-10 basis-3/5 md:mt-0" initial= "hidden" whileInView="visible" viewport={{once: true , amount: 0.5}} transition={{ duration: 0.5}} variants={{
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
    }}>
<form>
    <input type="text" className={inputStyles} placeholder="NAME" />
    <input type="text" className={inputStyles} placeholder="EMAIL" />
    <textarea rows={4} cols={50} className={inputStyles} placeholder="MESSAGE" />
    <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
        SUBMIT
    </button>
</form>
    </motion.div>

    <motion.div className="relative mt-16 basis-2/5 md:mt-0" initial= "hidden" whileInView="visible" viewport={{once: true , amount: 0.5}} transition={{ delay: 0.2,duration: 0.5}} variants={{
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
    }}>
<div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
    <img src={ContactUsPageGraphics} alt="contact-us" className="w-full " />
</div>
    </motion.div>
</div>
        </motion.div>
    </section>
  )
}

export default ContactUs