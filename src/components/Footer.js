import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import Logo from './logo.png';

const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/inclusive-computing-initiative/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100090126751545', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/inclusivecomputing/', label: 'Instagram' },
];

const linkColumns = [
    {
        heading: 'Organization',
        links: [
            { label: 'About', to: '/about' },
            { label: 'Classes', to: '/classes' },
            { label: 'CodeTogether Hackathon', to: '/hackathon' },
            { label: 'Team', to: '/team' },
        ],
    },
    {
        heading: 'Get Involved',
        links: [
            { label: 'Contact', to: '/contact' },
            { label: 'Join Our Team', href: 'https://docs.google.com/forms/d/e/1FAIpQLScKCS9j1I5mUN_eq_LM85EYCaBOVxerIaRwwMQQgkMDbYC6uw/viewform' },
            { label: 'Financials', href: 'https://hcb.hackclub.com/inclusive-computing-initiative/' },
        ],
    },
    {
        heading: 'Legal',
        links: [
            { label: 'Privacy Policy', to: '/privacy-policy' },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="border-t border-ink/5 bg-white pt-14">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
                    <div>
                        <Link to="/" className="flex items-center gap-2">
                            <img src={Logo} alt="" className="h-9 w-9" />
                            <span className="font-bold text-ink">Inclusive Computing Initiative</span>
                        </Link>
                        <p className="mt-3 max-w-xs text-sm text-ink-400">
                            Increasing access to computer science education for students with special needs.
                        </p>
                        <div className="mt-5 flex gap-3">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-brand-100 hover:text-brand-700"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {linkColumns.map((column) => (
                        <div key={column.heading}>
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                                {column.heading}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        {link.to ? (
                                            <Link to={link.to} className="text-sm font-medium text-ink hover:text-brand-700">
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium text-ink hover:text-brand-700"
                                            >
                                                {link.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 border-t border-ink/5 py-6">
                    <p className="text-sm text-ink-400">
                        The Inclusive Computing Initiative is a 501(c)(3) nonprofit organization. EIN: 81-2908499
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
