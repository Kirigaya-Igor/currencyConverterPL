import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            text: string;
            outlineCircleButtonText: string;
            hintText: string;
            modalBackground: string;
            dropdownBackground: string;
            footerDivider: string;
        };
    }
}
