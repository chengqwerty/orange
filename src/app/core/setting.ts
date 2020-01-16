export interface AppSettings {
    theme: string;
    headerPos: string;
    showHeader: boolean;
    showSidenav: boolean;
}

export const defaults: AppSettings = {
    theme: 'red',
    headerPos: 'fixed',
    showHeader: true,
    showSidenav: true
};
