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
        title: 'Device',
        type: 'collapsable',
        icon: 'heroicons_outline:support',
        link: '/example',
        children: [
            {
                id: 'apps.helpc-center.home',
                title: 'Create Device',
                type: 'basic',
                link: '/admin/create-device',
                exactMatch: true,
            },
            {
                id: 'apps.help-center.home',
                title: 'Configure Device',
                type: 'basic',
                link: '/admin/create-collective-checkings',
                exactMatch: true,
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
    {
        id: 'azedazed',
        title: 'Gestion du materiel',
        type: 'collapsable',
        icon: 'heroicons_outline:support',
        link: '/example',
        children: [
            {
                id: 'apps.helpc-center.home',
                title: 'Create device',
                type: 'basic',
                link: '/admin/create-device',
                exactMatch: true,
            },
           
        ],
        
    },
    
];
