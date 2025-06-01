import Link from "next/link";
import style from "@/src/components/ui/Header/Header.module.scss";


interface Props {
    className?: string
}


const Logo = ({}: Props) => {
    return (
        <>
            <Link href=''
                  className={style.logo}
            >
                <img src='/images/logo.png'
                     alt=''
                />
            </Link>
        </>
    );
};
export default Logo