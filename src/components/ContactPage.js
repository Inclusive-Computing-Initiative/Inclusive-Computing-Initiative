import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

const methods = [
    {
        icon: Mail,
        label: 'Email',
        value: 'inclusivecompute@gmail.com',
        href: 'mailto:inclusivecompute@gmail.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '(586) 676-8033',
        href: 'tel:+15866768033',
    },
    {
        icon: Instagram,
        label: 'Instagram',
        value: '@inclusivecompute',
        href: 'https://www.instagram.com/inclusivecompute/',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'Inclusive Computing Initiative',
        href: 'https://www.linkedin.com/company/96099560/admin/feed/posts/',
    },
];

const ContactPage = () => {
    return (
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-16">
            <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-4xl font-extrabold text-ink sm:text-5xl"
            >
                Contact Us
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mx-auto mt-4 max-w-xl text-center text-lg text-ink-600"
            >
                Have a question about our classes, or want to get involved? We'd love to hear
                from you.
            </motion.p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {methods.map(({ icon: Icon, label, value, href }, i) => (
                    <motion.a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="flex items-center gap-4 rounded-card border border-ink/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Icon className="h-6 w-6" />
                        </span>
                        <span>
                            <span className="block text-sm font-semibold text-ink-400">
                                {label}
                            </span>
                            <span className="block font-medium text-ink">{value}</span>
                        </span>
                    </motion.a>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 text-center text-ink-600"
            >
                Based in Allen, TX &middot; We typically respond within 24 hours.
            </motion.p>
        </div>
    )
}

export default ContactPage;
