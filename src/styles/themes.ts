import { Theme } from '@emotion/react';

export const light: Theme = {
    colors: {
        // black
        text: '#092636',
        // primary
        outlineCircleButtonText: '#235ee7',
        // gray
        hintText: '#748392',
        modalBackground: '#ffffff',
        dropdownBackground: '#ffffff',
        footerDivider: '#ffffff',
    },
};

export const dark: Theme = {
    colors: {
        text: '#ffffff',
        outlineCircleButtonText: '#ffffff',
        hintText: '#ffffff',
        // lightContainers
        modalBackground: '#1E2934',
        // darkContainers
        dropdownBackground: '#121920',
        // BackgroundN
        footerDivider: '#070B0F',
    },
};
