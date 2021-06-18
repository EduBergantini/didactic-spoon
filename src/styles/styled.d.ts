import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
    
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
    
            fontPrimary: string;
            detailsColor: string;
    
            success: string;
            info: string;
            warning: string;
        }
    }
}