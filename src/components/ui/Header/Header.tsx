import Link from "next/link";
import style from './Header.module.scss'
import {clsx} from "clsx";
import Container from "@/src/components/ui/Container/Container"

interface Props {
    className?: string;
    children?: React.ReactNode

}


const Header = ({children, className}: Props) => {
    return (
        <header className={clsx(style.header, className)}>
            {children}
        </header>
    );
};
export default Header