import { HomeModernIcon, UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../shared/type"
import {motion} from 'framer-motion';
import HText from "../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../shared/ActionButton";
import BenefitPageGraphics from '../Images/BenefitsPageGraphic.png'
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const benefits: Array<BenefitType> = [ 
    {
        icon : <HomeModernIcon className="h-6 w-6" />,
        title : "State of the Art Facilities",
        description: "It is the best available because it has been made using the most modern techniques and technology"
    },
    {
        icon:<UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Promoting awareness and creating a personal connection with diverse cultures in the classroom."
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Ability to supervises the performance of training activity,empower and motivate participants to be effective trainers"
    },
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    },
}
const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 md:mt-[150px]">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)} className="">
            <motion.div className="" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2,duration: 1.5}}
                variants={{
                    hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}}>
              <HText>MORE THAN JUST A GYM</HText>
              <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness
                 goals with ease. We provide true care into each and every member</p>
            </motion.div>
            {/* Benefit */}
            <motion.div initial= "hidden" whileInView="visible" viewport={{ once: true , amount: 0.5}} variants={container} className="md:flex items-center justify-between gap-8 mt-5">
                {
                    benefits.map((benefit: BenefitType) => (
                        <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description}
                        setSelectedPage={setSelectedPage} />
                    ))
                }
            </motion.div>

            {/* Graphics and description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* Graphics */}
                <img className="mx-auto" alt="benefits-page-graphic"
                src={BenefitPageGraphics}/>
                {/* Description */}
                <div className="">
                    {/* title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 1.5}}
                variants={{
                    hidden: {opacity: 0, x:-
                50}, visible: {opacity: 1, x:0}}} className="">
                            <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                            <span className="text-primary-500 ">
                                FIT
                                </span></HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* Description */}
                    <motion.div className="" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2,
                    
duration: 1.5}}
                variants={{
                    hidden: {opacity: 0, x:50}, visible: {opacity: 1, x:0}}}>
                        <p className="my-5">Exercise with someone around the same fitness level as you so you can spur each other other on.
                             Ask a family member or a friend, or join a EvoGym center or group. Unlike traditional gyms,
                             EvoGym membership gives you the tools and support you </p>
                        <p className="mb-5">Fitness is about what you gain. it's about measuring success by how you feel,
                             not by the scale. it's about improving physical, mental.</p>
                    </motion.div>
                    {/* button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits