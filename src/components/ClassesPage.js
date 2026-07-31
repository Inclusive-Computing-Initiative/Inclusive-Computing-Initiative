import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Chem from './chem.jpg'

const ClassesPage = () => {
    return (
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
            <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-4xl font-extrabold text-ink sm:text-5xl"
            >
                Upcoming Classes
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink-600"
            >
                We have upcoming classes in locations all around the DFW area, and more coming
                up soon!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mt-12 max-w-sm overflow-hidden rounded-card border border-ink/5 bg-white shadow-sm"
            >
                <img src={Chem} alt="CodeTogether Hackathon" className="h-48 w-full object-cover" />
                <div className="p-6">
                    <div className="flex items-center gap-1 text-sm font-medium text-ink-400">
                        <MapPin className="h-4 w-4" />
                        Dallas, TX
                    </div>
                    <h2 className="mt-2 text-xl font-bold text-ink">CodeTogether Hackathon</h2>
                    <p className="mt-2 text-ink-600">
                        Students will learn how to create a technical project as a team and
                        present it!
                    </p>
                    <Link to="/hackathon" className="btn-primary mt-6 w-full">
                        Register!
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default ClassesPage;
