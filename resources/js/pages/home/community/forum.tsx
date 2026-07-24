import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { MessageSquare, Eye, Clock, Search, Filter, MessageCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const categories = ["Tous", "YouTube & Montage", "WordPress & Web", "Bande Dessinée & Art", "E-Commerce & Marketing", "Retours & Avis"];

const initialThreads = [
    {
        id: 1,
        title: "Quel logiciel de montage vidéo choisir pour débuter sur YouTube ?",
        author: "Camille Bernard",
        avatarInitials: "CB",
        category: "YouTube & Montage",
        replies: 18,
        views: 342,
        likes: 24,
        time: "Il y a 2 heures",
        solved: true
    },
    {
        id: 2,
        title: "Vos meilleurs plugins WordPress gratuits pour un site vitrine ?",
        author: "Marc Lemaire",
        avatarInitials: "ML",
        category: "WordPress & Web",
        replies: 12,
        views: 215,
        likes: 15,
        time: "Il y a 5 heures",
        solved: false
    },
    {
        id: 3,
        title: "Comment créer un personnage de BD cohérent d'une planche à l'autre ?",
        author: "Amandine Petit",
        avatarInitials: "AP",
        category: "Bande Dessinée & Art",
        replies: 29,
        views: 580,
        likes: 42,
        time: "Il y a 1 jour",
        solved: true
    },
    {
        id: 4,
        title: "WooCommerce : comment configurer les frais de livraison par zone ?",
        author: "Valérie Renaud",
        avatarInitials: "VR",
        category: "E-Commerce & Marketing",
        replies: 7,
        views: 120,
        likes: 19,
        time: "Il y a 2 jours",
        solved: false
    },
    {
        id: 5,
        title: "Partage de retours sur la formation DaVinci Resolve",
        author: "Julien Roux",
        avatarInitials: "JR",
        category: "YouTube & Montage",
        replies: 14,
        views: 260,
        likes: 31,
        time: "Il y a 3 jours",
        solved: true
    }
];

export default function Forum() {
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [search, setSearch] = useState("");

    const filteredThreads = initialThreads.filter(t => {
        const matchesCategory = selectedCategory === "Tous" || t.category === selectedCategory;
        const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase()) || 
                              t.author.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Head title="Forum d'échange & Entraide - Liberty Creativity School" />
            
            <div className="relative min-h-screen pt-20">
                {/* Background Decor */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[120px] dark:bg-primary/[0.04]" />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur">
                            Forum communautaire
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl mb-6">
                            Partagez, échangez, grandissez ensemble
                        </h1>
                        <p className="text-lg text-foreground/60">
                            Rejoignez notre espace de discussion ouvert pour poser vos questions, échanger vos ressentis et progresser aux côtés de nos formateurs certifiés.
                        </p>
                    </div>

                    {/* Toolbar & Filters */}
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between max-w-5xl mx-auto">
                        <div className="flex flex-1 items-center gap-2 max-w-md">
                            <div className="relative w-full">
                                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/45" />
                                <Input 
                                    placeholder="Rechercher un sujet ou un auteur..." 
                                    className="pl-10 rounded-full border-border/40 bg-background/50 backdrop-blur-sm focus:border-primary/50"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                        <Button className="rounded-full gap-2 self-start md:self-auto">
                            <MessageCircle className="h-4.5 w-4.5" /> Créer un sujet
                        </Button>
                    </div>

                    {/* Main Grid */}
                    <div className="grid gap-8 lg:grid-cols-[1fr_3fr] max-w-5xl mx-auto">
                        {/* Sidebar filters */}
                        <div className="flex flex-col gap-1.5 self-start">
                            <h3 className="text-sm font-semibold tracking-wider text-foreground/45 uppercase px-2 mb-3">Catégories</h3>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-primary text-primary-foreground' : 'text-foreground/75 hover:bg-muted/40 hover:text-foreground'}`}
                                >
                                    <span>{cat}</span>
                                </button>
                            ))}
                        </div>

                        {/* Threads List */}
                        <div className="flex flex-col gap-4">
                            {filteredThreads.length > 0 ? (
                                filteredThreads.map((thread) => (
                                    <div 
                                        key={thread.id}
                                        className="group relative flex flex-col sm:flex-row justify-between gap-4 rounded-2xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border/60 hover:shadow-sm dark:border-border/50 dark:bg-background/40"
                                    >
                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                                {thread.avatarInitials}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors pr-2 leading-tight">
                                                    {thread.title}
                                                </h3>
                                                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground/40">
                                                    <span className="font-medium text-foreground/60">{thread.author}</span>
                                                    <span>•</span>
                                                    <span className="rounded-full bg-secondary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary uppercase">{thread.category}</span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {thread.time}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-5 sm:self-center shrink-0 text-foreground/40 text-xs">
                                            <span className="flex items-center gap-1">
                                                <MessageSquare className="h-3.5 w-3.5" /> {thread.replies}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Eye className="h-3.5 w-3.5" /> {thread.views}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Heart className="h-3.5 w-3.5 text-rose-500/80 fill-rose-500/10" /> {thread.likes}
                                            </span>
                                            {thread.solved && (
                                                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-600 uppercase border border-emerald-500/20">
                                                    Résolu
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center rounded-2xl border border-border/40 bg-background/50 py-16 text-center backdrop-blur-sm">
                                    <p className="text-lg font-medium text-foreground/60">Aucun sujet trouvé</p>
                                    <p className="mt-1 text-sm text-foreground/40">Modifiez vos critères de recherche</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
