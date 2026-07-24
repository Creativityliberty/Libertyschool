import React from 'react';
import { Head } from '@inertiajs/react';
import { Calendar, Clock, Video, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const events = [
    {
        id: 1,
        title: "Live : Découvrir les bases du montage vidéo avec DaVinci Resolve",
        type: "En ligne (Zoom)",
        date: "Dimanche 19 Juillet 2026",
        time: "20:00 - 21:30",
        trainer: "Sophie Lefèvre",
        price: "Gratuit",
        description: "Atelier découverte en direct pour apprendre les fondamentaux du montage vidéo : import, timeline, transitions et export.",
        limit: "100 participants max",
        spotsLeft: 12
    },
    {
        id: 2,
        title: "Workshop : Créer son premier site WordPress en 2h",
        type: "En ligne (Zoom)",
        date: "Mercredi 22 Juillet 2026",
        time: "18:30 - 20:30",
        trainer: "Kiran Mehta",
        price: "15 €",
        description: "Suivez pas à pas la création d'un site WordPress fonctionnel : hébergement, thème, pages essentielles et plugins indispensables.",
        limit: "30 participants max",
        spotsLeft: 5
    },
    {
        id: 3,
        title: "Masterclass Copywriting : Écrire des fiches produits qui vendent",
        type: "En ligne (Zoom)",
        date: "Samedi 25 Juillet 2026",
        time: "10:00 - 11:30",
        trainer: "Valérie Renaud",
        price: "Gratuit",
        description: "Apprenez la méthode AIDA pour rédiger des descriptions de produits percutantes et maximiser vos conversions.",
        limit: "50 participants max",
        spotsLeft: 22
    },
    {
        id: 4,
        title: "Atelier : Dessiner son premier personnage de BD sur Procreate",
        type: "En ligne (Zoom)",
        date: "Mardi 28 Juillet 2026",
        time: "19:00 - 20:30",
        trainer: "Marie-Laure Dubois",
        price: "20 €",
        description: "Introduction pratique au character design sur tablette : proportions, expressions faciales et mise en couleur.",
        limit: "40 participants max",
        spotsLeft: 8
    }
];

export default function Events() {
    return (
        <>
            <Head title="Ateliers en direct & Workshops - Liberty Creativity School" />
            
            <div className="relative min-h-screen pt-20">
                {/* Background Decor */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/3 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/[0.02] blur-[140px] dark:bg-primary/[0.04]" />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur">
                            Événements & Ateliers
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl mb-6">
                            Nos prochains ateliers collectifs en direct
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Connectez-vous en direct avec nos mentors et la communauté lors de workshops interactifs dédiés à la création.
                        </p>
                    </div>

                    {/* Events Grid */}
                    <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                        {events.map((event) => (
                            <Card 
                                key={event.id}
                                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border/60 hover:shadow-md dark:border-border/50 dark:bg-background/40"
                            >
                                <div>
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                            <Video className="h-3 w-3" /> {event.type}
                                        </span>
                                        <span className="text-sm font-semibold text-primary">{event.price}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-4 leading-snug">{event.title}</h3>
                                    
                                    <p className="text-sm leading-relaxed text-foreground/60 mb-6">{event.description}</p>
                                    
                                    <hr className="border-border/30 mb-6" />
                                    
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center gap-2.5 text-sm text-foreground/75">
                                            <Calendar className="h-4 w-4 text-primary shrink-0" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-sm text-foreground/75">
                                            <Clock className="h-4 w-4 text-primary shrink-0" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-sm text-foreground/75">
                                            <Users className="h-4 w-4 text-primary shrink-0" />
                                            <span>Formateur : <strong className="text-foreground">{event.trainer}</strong></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between gap-4 mt-auto">
                                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                                        {event.spotsLeft} places restantes
                                    </span>
                                    <Button className="rounded-full gap-1.5" size="sm">
                                        S'inscrire <ArrowRight className="h-3.5 w-3.5" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
