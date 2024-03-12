interface LogoProps {logo: string;}
interface NavigationButtonProps { text: string; isBold?: boolean; image?: string; }
interface CategoriesProps { selected? : boolean; text: string}

interface ProductScheme {
    id: number,
    title: string,
    price: number,
    description: string,
    images: any
}

interface CategoryScheme{
    id: number,
    name: string,
    image: string,
    creationAt: string,
    updatedAt: string
    selected?: boolean,
}

export {LogoProps, NavigationButtonProps, CategoriesProps, ProductScheme, CategoryScheme};