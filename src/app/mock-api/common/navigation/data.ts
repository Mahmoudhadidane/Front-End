/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'apps.help-center',
        title: 'checkings',
        type: 'collapsable',
        icon: 'heroicons_outline:support',
        link: '/example',
        children: [
            {
                id: 'apps.helpc-center.home',
                title: 'Create Checking',
                type: 'basic',
                link: '/admin/create-checking',
                exactMatch: true,
            },
            {
                id: 'apps.help-center.home',
                title: 'Create Collective Checkings',
                type: 'basic',
                link: '/admin/create-collective-checkings',
                exactMatch: true,
            },

            {
                id: 'apps.help-center.guides',
                title: 'View Checkings',
                type: 'collapsable',

                children: [
                    {
                        id: 'apps.help-center.guides',
                        title: 'My Checkings',
                        type: 'basic',
                        link: '/admin/view-person-checkings',
                    },
                ],
            },
        ],
    },
];

export const adminNavigation: FuseNavigationItem[] = [
    {
        id: 'apps.help-center',
        title: 'checkings',
        type: 'collapsable',
        icon: 'heroicons_outline:support',
        link: '/example',
        children: [
       
            {
                id: 'apps.helpc-center.home',
                title: 'Create checking',
                type: 'basic',
                link: '/admin/create-checking',
                exactMatch: true,
            },
            {
                id: 'apps.help-center.home',
                title: 'Create Persons Checkings',
                type: 'basic',
                link: '/admin/create-persons-checkings',
                exactMatch: true,
            },

            {
                id: 'apps.help-center.guides',
                title: 'View Checkings',
                type: 'collapsable',

                children: [
                    {
                        id: 'apps.helpc-center.home',
                        title: 'All checkings',
                        type: 'basic',
                        link: '/admin/all-checkings-list',
                        exactMatch: true,
                    },
                    {
                        id: 'apps.help-center.guides',
                        title: 'Person Checkings',
                        type: 'basic',
                        link: '/admin/view-person-checkings',
                    },
                    {
                        id: 'apps.help-center.guides',
                        title: 'Persons Checkings',
                        type: 'basic',
                        link: '/admin/view-persons-checkings',
                    },
                    {
                        id: 'apps.help-center.guides',
                        title: 'Day Checkings',
                        type: 'basic',
                        link: '/admin/day-checkings',
                    },
                    {
                        id: 'apps.help-center.guides',
                        title: 'Collective Checkings',
                        type: 'basic',
                        link: '/admin/collective-checkings',
                    },
                    {
                        id: 'apps.help-center.guides',
                        title: 'User Checkings',
                        type: 'basic',
                        link: '/admin/user-checkings',
                    },
                ],
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'azedazed',
        title: 'checkings',
        type: 'collapsable',
        icon: 'heroicons_outline:support',
        link: '/example',
        children: [
            {
                id: 'apps.helpc-center.home',
                title: 'Create Checking',
                type: 'basic',
                link: '/user/create-checking',
                exactMatch: true,
            },
            {
                id: 'azedazed.home',
                title: 'Create Collective Checkings',
                type: 'basic',
                link: '/user/create-collective-checkings',
                exactMatch: true,
            },

            {
                id: 'azedazed.guides',
                title: 'View Checkings',
                type: 'basic',
                link: '/user/user-checkings',

              
            },
        ],
    },
];
