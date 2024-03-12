interface LogoProps {logo: string;}
interface NavigationButtonProps { text: string; isBold?: boolean; }
interface CategoriesProps { selected? : boolean; text: string}

interface ProductScheme {
    id: number,
    title: string,
    price: number,
    description: string,
    images: any
}

export {LogoProps, NavigationButtonProps, CategoriesProps, ProductScheme};