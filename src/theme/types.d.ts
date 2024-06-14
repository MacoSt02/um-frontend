import { Theme } from '../theme/theme-styles';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
