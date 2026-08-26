import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import NaajiyahImage from './team/naajiyah.jpeg';
import KashikaImage from './team/kashika.jpeg';
import YajatImage from './team/yajat.jpeg';
import BrandonImage from './team/brandon.jpeg';
import JoshuaImage from './team/joshua.jpeg';

// ---------------------------------------------------------------------------
// Per-photo manual adjustments. Photos keep their original file/aspect ratio
// and are only cropped visually to a circle in the browser (nothing is
// pre-cropped in the image file itself).
//
// size: circle diameter in pixels (default 128)
// posX, posY: 0-100, where 50 is centered. Lower posY shows more of the top
//   of the photo, higher shows more of the bottom (same idea for posX,
//   left/right).
// zoom: 1 = fills the circle with no extra zoom, >1 = zoom in, <1 = zoom out.
//   NOTE: for a tall/portrait photo, the crop already uses the photo's full
//   width at zoom 1, so posX has nothing to slide until you zoom in a bit
//   (e.g. zoom: 1.2) to create left/right room. Same idea in reverse
//   (posY needs zoom) for a wide/landscape photo.
// naturalWidth / naturalHeight: the photo file's real pixel dimensions
//   (used to do the crop math correctly) -- update these if you swap in a
//   different photo file.
// ---------------------------------------------------------------------------
const photoAdjust = {
    joshua: { size: 128, posX: 50, posY: 50, zoom: 1, naturalWidth: 800, naturalHeight: 800 },
    brandon: { size: 128, posX: 50, posY: 0, zoom: 1, naturalWidth: 1936, naturalHeight: 2383 },
    yajat: { size: 128, posX: 50, posY: 20, zoom: 1, naturalWidth: 3685, naturalHeight: 5159 },
    kashika: { size: 128, posX: 50, posY: 50, zoom: 1, naturalWidth: 800, naturalHeight: 800 },
    naajiyah: { size: 128, posX: 55, posY: 65, zoom: 1.7, naturalWidth: 1944, naturalHeight: 2592 },
};

const founders = [
    {
        name: 'Joshua Vigel',
        role: 'Co-founder',
        image: JoshuaImage,
        adjust: photoAdjust.joshua,
        email: 'joshua.vigel@inclusivecompute.org',
        linkedin: 'https://www.linkedin.com/in/joshua-vigel/',
    },
    {
        name: 'Brandon Bedolla',
        role: 'Co-founder',
        image: BrandonImage,
        adjust: photoAdjust.brandon,
        email: 'brandon.bedollacervantes@inclusivecompute.org',
        linkedin: 'https://www.linkedin.com/in/brandon-bedolla-cervantes-489929274/',
    },
];

const boardMembers = [
    {
        name: 'Yajat Parmar',
        role: 'Board Member',
        image: YajatImage,
        adjust: photoAdjust.yajat,
        email: 'yajat.parmar@inclusivecompute.org',
        linkedin: 'https://www.linkedin.com/in/yajatparmar/',
    },
    {
        name: 'Kashika Khurana',
        role: 'Board Member',
        image: KashikaImage,
        adjust: photoAdjust.kashika,
        email: 'kashika@inclusivecompute.org',
        linkedin: 'https://www.linkedin.com/in/kashika-khurana-06b0042aa/',
    },
    {
        name: 'Naajiyah Malik',
        role: 'Board Member',
        image: NaajiyahImage,
        adjust: photoAdjust.naajiyah,
        email: 'naajiyah@inclusivecompute.org',
        linkedin: 'https://www.linkedin.com/in/naajiyah-malik-195a7538b/',
    },
];

const TeamCard = ({ member, i }) => {
    const { size, posX, posY, zoom, naturalWidth, naturalHeight } = member.adjust;

    // Compute the exact background-size (as percentages of the circle) that
    // makes the photo fully cover a square circle at zoom 1, then scale that
    // by zoom. This is what makes posX/posY able to pan in both directions
    // once zoom > 1, even for a very tall or very wide source photo.
    const aspect = naturalWidth / naturalHeight;
    const widthPercent = (aspect <= 1 ? 100 : 100 * aspect) * zoom;
    const heightPercent = (aspect <= 1 ? 100 / aspect : 100) * zoom;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center rounded-card border border-ink/5 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
        >
            <div
                role="img"
                aria-label={member.name}
                className="rounded-full shadow-md bg-no-repeat"
                style={{
                    height: size,
                    width: size,
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: `${widthPercent}% ${heightPercent}%`,
                    backgroundPosition: `${posX}% ${posY}%`,
                }}
            />
            <h3 className="mt-5 text-lg font-bold text-ink">{member.name}</h3>
            <p className="mt-1 text-sm font-semibold text-brand-700">{member.role}</p>

            <div className="mt-4 flex w-full flex-col items-center gap-2 border-t border-ink/5 pt-4">
                <a
                    href={`mailto:${member.email}`}
                    className="flex max-w-full items-center gap-1.5 text-xs font-medium text-ink-400 transition-colors hover:text-brand-700"
                >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{member.email}</span>
                </a>
                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-ink-400 transition-colors hover:text-brand-700"
                >
                    <Linkedin className="h-3.5 w-3.5 shrink-0" />
                    LinkedIn
                </a>
            </div>
        </motion.div>
    );
};

const TeamPage = () => {
    return (
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-16">
            <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-4xl font-extrabold text-ink sm:text-5xl"
            >
                Our Team
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mx-auto mt-4 max-w-xl text-center text-lg text-ink-600"
            >
                Meet the people behind the Inclusive Computing Initiative.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mx-auto mt-2 text-center text-base font-medium text-brand-700"
            >
                Have a question? Reach out to us anytime! &#128075;
            </motion.p>

            <div className="mt-16">
                <span className="section-eyebrow">Founders</span>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {founders.map((member, i) => (
                        <TeamCard key={member.name} member={member} i={i} />
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <span className="section-eyebrow">Board Members</span>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {boardMembers.map((member, i) => (
                        <TeamCard key={member.name} member={member} i={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamPage;
