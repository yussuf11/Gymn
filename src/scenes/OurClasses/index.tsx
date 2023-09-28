import { ClassType, SelectedPage } from '../shared/type'
import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import image4 from '../Images/image4.png'
import image5 from '../Images/image5.png'
import image6 from '../Images/image6.png'
import { motion } from 'framer-motion'
import HText from '../shared/HText'
import Class from './Class'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "It is a form of physical training, which uses weighted objects, like dumbbells and barbell, or weight machines, like plate-loaded kit to primarily build muscle or improve strength. It can also help to boost power and muscular endurance, and improve overall health.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "This class incorporates yoga postures, gentle movement sequences, breath work, supported silent meditation, and guided relaxation to support increased awareness and mindfulness of the breath and body, and quieting of the nervous system",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "This class will concentrate on strengthening your core muscle, including your abdominal muscles and back muscles. Improve your posture and build core muscle groups through a variety of exercises designed to strengthen, improve and maintain heaithy posture",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "This class is focused to instructional design that actively engages students in authentic mentally and physically challenging tasks",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "This class will focus on building and maintai ning athletic abilities. Through a combination of a variety of trai ing such as strength, endurance, flexibility, balance.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "This class encompasses weighted and body weight exercises to gain muscle mass, while achieving cardiovascular endurance",
        image: image6,
    },
]
const OurClasses = ({ setSelectedPage }: Props) => {
  return (
  <section id='ourclasses' className='w-full bg-primary-100 py-40'>
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
<motion.div className='mx-auto w-5/6' initial= "hidden" whileInView="visible" viewport={{once: true , amount: 0.5}} transition={{ duration: 0.5}} variants={{
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0},
}}>
<div className="md:w-3/5">
    <HText>OUR CLASSES</HText>
    <p className='py-5'> Choose from a variety of over 90 classes scheduled per week. Our group exercise programs proide a fun, safe, well balanced, effective workout.
            We offer a variety of total body conditioning that involves both strength and exercise,
         It helps to learn valuable physical skills, set a pattern for lifelong fitness and grow socially from your experience</p>
</div>
</motion.div>
<div className="mt-10 h-[353px] w-full  overflow-y-hidden overflow-x-auto">
    <ul className='w-[2800px] whitespace-nowrap'>
        {
 classes.map((item: ClassType , index) => (
< Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} />
 ))   
        }
    </ul>
</div>
    </motion.div>
  </section>
  );
};

export default OurClasses