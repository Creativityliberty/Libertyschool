import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from '@inertiajs/react';

export function Hero() {
    const marqueeItems = [
        "Intelligence Artificielle",
        "Marketing Digital",
        "Création d'Avatar",
        "Développement Web",
        "Montage Vidéo",
        "Copywriting",
        "Design Graphique",
        "E-commerce"
    ];

    return (
        <section
            className="relative pt-12 pb-24 overflow-hidden bg-background"
            role="region"
            aria-label="Hero Liberty Creativity School"
        >
            {/* Background elements */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-20 mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-brand-primary-soft/50 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-primary uppercase backdrop-blur dark:border-border/60 dark:bg-brand-primary-soft/20">
                            <Sparkles className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                            Nouvelle École Créative
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                            Apprends des compétences <span className="text-primary">concrètes</span> avec des formations structurées.
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
                            Des cours conçus par des experts pour transformer vos passions en métiers.
                            Accédez à des contenus pédagogiques de haute qualité, partout et à votre rythme.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto min-w-[200px] rounded-full group gap-2" asChild>
                                <Link href="/courses">
                                    Parcourir les cours
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </Link>
                            </Button>
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px] rounded-full" asChild>
                                <Link href="/register">
                                    Commencer maintenant
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Feature Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/40 bg-background/50 p-2 shadow-2xl backdrop-blur mb-16 dark:border-border/60"
                >
                    <img
                        src="/assets/images/hero_banner.png"
                        alt="Workspace Liberty Creativity School"
                        className="w-full h-auto aspect-[16/9] object-cover rounded-2xl"
                    />
                </motion.div>

                {/* Categories Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full overflow-hidden flex whitespace-nowrap"
                >
                    <div className="flex animate-marquee min-w-max items-center gap-12 md:gap-24 opacity-60 py-4">
                        {/* First set */}
                        {marqueeItems.map((item, idx) => (
                            <div key={`set1-${idx}`} className="flex items-center gap-3">
                                <span className={`font-bold text-xl md:text-2xl tracking-widest uppercase ${idx % 2 === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                                    {item}
                                </span>
                            </div>
                        ))}

                        {/* Duplicated set for seamless loop */}
                        {marqueeItems.map((item, idx) => (
                            <div key={`set2-${idx}`} className="flex items-center gap-3">
                                <span className={`font-bold text-xl md:text-2xl tracking-widest uppercase ${idx % 2 === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
