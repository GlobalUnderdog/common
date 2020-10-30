export declare type CollectContactStatus = 'invalid' | 'success' | 'error';
export declare type Projects = 'virtual-coffee' | 'social-pull' | 'globalunderdog' | 'insurance';
export interface Contact {
    /** Timestamp in ms */
    created?: number;
    id?: string;
    name?: string;
    email: string;
    project: Projects;
    linkedinUrl?: string;
    googleTrackingId?: string;
}
export interface ContactVirtualCoffee extends Contact {
    project: 'virtual-coffee';
    asMentee: boolean;
    asMentor: boolean;
}
export interface ContactSocialPull extends Contact {
    project: 'social-pull';
}
