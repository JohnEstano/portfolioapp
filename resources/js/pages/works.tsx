import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { FollowerPointerCard } from '@/components/ui/following-pointer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const blogContent = {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "You",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
        "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: "/demo/thumbnail.png",
    authorAvatar: "/manu.png",
};

const TitleComponent = ({
    title,
    avatar,
}: {
    title: string;
    avatar: string;
}) => (
    <div className="flex items-center space-x-2">
        <img
            src={avatar}
            height="20"
            width="20"
            alt="thumbnail"
            className="rounded-full border-2 border-white"
        />
        <p>{title}</p>
    </div>
);

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  
                    <FollowerPointerCard
                        title={
                            <TitleComponent
                                title={blogContent.author}
                                avatar={blogContent.authorAvatar}
                            />
                        }
                    >
                        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
                                <img
                                    src={blogContent.image}
                                    alt="thumbnail"
                                    className="h-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="my-4 text-lg font-bold text-zinc-700">
                                    {blogContent.title}
                                </h2>
                                <h2 className="my-4 text-sm font-normal text-zinc-500">
                                    {blogContent.description}
                                </h2>
                                <div className="mt-10 flex flex-row items-center justify-between">
                                    <span className="text-sm text-gray-500">{blogContent.date}</span>
                                    <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                                        Read More
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FollowerPointerCard>

                    {/* Remaining placeholders */}
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}