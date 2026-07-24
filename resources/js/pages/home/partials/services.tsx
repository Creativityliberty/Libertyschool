import { motion, type Variants } from 'framer-motion';
import {
    Video,
    Globe,
    PenTool,
    ShoppingBag,
    Palette,
    GraduationCap,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@inertiajs/react';

const services = [
    {
        icon: Video,
        title: 'YouTube & Montage Vidéo',
        description:
            'Construisez une identité forte, produisez du contenu de qualité et monétisez durablement votre audience.',
        href: '/courses?category=YouTube',
    },
    {
        icon: Globe,
        title: 'WordPress & Web-Design',
        description:
            'Apprenez à maîtriser WordPress, Elementor et les meilleures extensions pour lancer des sites web professionnels sans coder.',
        href: '/courses?category=WordPress',
    },
    {
        icon: PenTool,
        title: 'Bande Dessinée & Illustration',
        description:
            'Découvrez les bases du dessin, du storyboard à la création finale de vos planches de BD et illustrations numériques.',
        href: '/courses?category=Bande%20Dessin%C3%A9e',
    },
    {
        icon: ShoppingBag,
        title: 'E-Commerce & Marketing',
        description:
            'Maîtrisez les leviers indispensables du commerce en ligne, de la recherche de produits au copywriting persuasif.',
        href: '/courses?category=E-Commerce',
    },
    {
        icon: Palette,
        title: 'Design Graphique & AI',
        description:
            'Intégrez les outils d’intelligence artificielle dans votre processus de création graphique et de design visuel.',
        href: '/courses',
    },
    {
        icon: GraduationCap,
        title: 'Formations Certifiantes',
        description:
            'Des parcours pédagogiques structurés conçus par des experts pour valider vos compétences par une certification.',
        href: '/courses',
    },
] as const;

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

export function Services() {
    return (
        <section className="relative py-24 md:py-32 bg-bg-soft">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[140px] dark:bg-primary/[0.06]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-brand-primary-soft px-4 py-2 text-xs font-semibold tracking-[0.25em] text-primary uppercase backdrop-blur dark:border-border/60 dark:bg-brand-primary-soft/20">
                        Nos Formations
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Des compétences concrètes pour l'avenir
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Une plateforme pensée pour réunir passionnés et formateurs professionnels autour de la création numérique, du marketing et du design.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                variants={itemVariants}
                            >
                                <Link href={service.href} className="block h-full">
                                    <Card className="group h-full border-border/40 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/60 hover:shadow-lg dark:border-border/50 dark:bg-background/50 cursor-pointer">
                                        <CardContent className="p-7">
                                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                                                <Icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                {service.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
