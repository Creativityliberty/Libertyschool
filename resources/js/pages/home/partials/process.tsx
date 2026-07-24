import { motion } from 'framer-motion';
import { Search, UserPlus, PlayCircle, Award } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Trouvez votre formation',
        description:
            'Parcourez notre catalogue de cours en YouTube, WordPress, Bande Dessinée, Animation 2D et E-Commerce.',
    },
    {
        number: '02',
        icon: UserPlus,
        title: 'Rejoignez la plateforme',
        description:
            'Créez votre compte gratuitement pour débloquer votre accès immédiat et suivre votre progression pas-à-pas.',
    },
    {
        number: '03',
        icon: PlayCircle,
        title: 'Apprenez par la pratique',
        description:
            'Suivez des cours structurés sous forme de modules vidéo et réalisez des projets concrets avec l’aide de formateurs.',
    },
    {
        number: '04',
        icon: Award,
        title: 'Monétisez vos compétences',
        description:
            'Validez votre certificat de complétion de fin d’études et commencez à proposer vos services en Freelance ou à l’international.',
    },
] as const;

export function Process() {
    return (
        <section className="relative py-24 md:py-32 bg-background">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-primary/[0.03] blur-[120px] dark:bg-primary/[0.05]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-brand-primary-soft px-4 py-2 text-xs font-semibold tracking-[0.25em] text-primary uppercase backdrop-blur dark:border-border/60 dark:bg-brand-primary-soft/20">
                        Comment ça marche
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Un parcours d'apprentissage simple et orienté résultats
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        En quelques étapes, accédez à des cours dispensés par des professionnels en activité et transformez votre passion créative en métier.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Horizontal line for desktop */}
                    <div className="absolute top-[2.6rem] right-0 left-0 hidden h-px bg-border/50 lg:block" />

                    <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{
                                        duration: 0.6,
                                        ease: 'easeOut',
                                        delay: index * 0.12,
                                    }}
                                    className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                                >
                                    {/* Icon container */}
                                    <div className="relative z-10 mb-6 flex h-[5.2rem] w-[5.2rem] items-center justify-center rounded-2xl border border-border/40 bg-background backdrop-blur-sm dark:border-border/50 dark:bg-background/80 shadow-sm">
                                        <Icon
                                            className="h-7 w-7 text-primary"
                                            aria-hidden="true"
                                        />

                                        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
