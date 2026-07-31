import { motion } from 'framer-motion';
import pic1 from './Picture1.jpg'

const AboutPage = () => {

    return (
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
            <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-4xl font-extrabold text-ink sm:text-5xl"
            >
                Our Mission
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-ink-600"
            >
                Between 2016 and 2019,{' '}
                <a
                    className="text-brand-700 underline underline-offset-2"
                    href="https://www.cdc.gov/ncbddd/adhd/data.html"
                >
                    approximately 6 million children ages 3-17
                </a>{' '}
                were diagnosed with ADHD, one of many mental health challenges affecting children
                today. In the past, such issues were often overlooked, but in our modern world,
                they demand our attention. Too many children with special needs still face
                unequal access to quality education and opportunities. Our mission is to change
                that: to ensure that <strong>every</strong> child, regardless of their
                circumstances, has the support they need to learn, grow, and create to their
                fullest potential.
            </motion.p>

            <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-ink">What we do</h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink-600">
                        We host weekly classes on topics in STEM for students with special needs.
                        We believe that every student learns differently, and by adapting to
                        every student's individual needs, we can create successful education.
                    </p>
                </motion.div>

                <motion.img
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    src={pic1}
                    alt="Students in one of our classes"
                    className="w-full rounded-card object-cover shadow-md"
                />
            </div>

        </div>
    )
}

export default AboutPage;
