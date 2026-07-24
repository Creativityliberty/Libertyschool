import { Head, usePage } from '@inertiajs/react';
import { BookOpen, CreditCard, GraduationCap, Users } from 'lucide-react';
import admin from '@/routes/admin';

type Props = {
    stats: {
        totalCourses: number;
        totalTrainers: number;
        totalStudents: number;
        totalEnrollments: number;
    };
};

export default function AdminDashboard() {
    const { stats } = usePage<Props>().props;

    const cards = [
        { label: 'Formations', value: stats.totalCourses, icon: BookOpen },
        { label: 'Formateurs', value: stats.totalTrainers, icon: Users },
        { label: 'Étudiants', value: stats.totalStudents, icon: GraduationCap },
        { label: 'Inscriptions', value: stats.totalEnrollments, icon: CreditCard },
    ];

    return (
        <>
            <Head title="Dashboard" />

            <div className="container mx-auto space-y-6 p-4">
                <div className="flex flex-col space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">Vue d'ensemble de la plateforme.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {cards.map(({ label, value, icon: Icon }) => (
                        <div
                            key={label}
                            className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-muted-foreground">{label}</p>
                                <Icon className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <p className="mt-2 text-3xl font-bold">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

AdminDashboard.layout = {
    breadcrumbs: [{ title: 'Dashboard', href: admin.dashboard() }],
};
