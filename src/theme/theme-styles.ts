export type Theme = {
    colors: {
        primary: string;
        secondary: string;
        error: string;
        warning: string;
        info: string;
        success: string;
        disabled: string;
        black: string;
        white: string;
    };
    background: {
        primary: string;
        secondary: string;
        bg: string;
    };
    fontSizes: {
        xxxxs: string;
        xxxs: string;
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
        xxxl: string;
    };
};

export const defaultTheme: Theme = {
    colors: {
        primary: '#1E1E1E',
        secondary: '#999999',
        error: '#FF4C55',
        warning: '#FFB959',
        info: '#55C5F4',
        success: '#49D879',
        disabled: '#BFBFBF',
        black: '#000000',
        white: '#FFFFFF',
    },
    background: {
        primary: '#1E1E1E',
        secondary: '#727272',
        bg: '#F8F7FF',
    },
    fontSizes: {
        xxxxs: '0.875rem',
        xxxs: '1rem',
        xxs: '1.125rem',
        xs: '1.25rem',
        s: '1.5rem',
        m: '2rem',
        l: '2.25rem',
        xl: '2.5rem',
        xxl: '3rem',
        xxxl: '4rem',
    },
};
