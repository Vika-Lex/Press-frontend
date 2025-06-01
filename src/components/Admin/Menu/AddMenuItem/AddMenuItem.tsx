import {Button} from "@/components/ui/button";
import {clsx} from "clsx";
import style from "@/src/components/Admin/Users/AddUser/AddUser.module.scss";
import Link from "next/link";

interface Props {
    className?: string
}


const AddMenuItem = ({}: Props) => {
    return (
        <>
            <Button asChild className={clsx(style.button)}>
                <Link href='/admin/menu/create'>Створити пункт меню</Link>
            </Button>
        </>
    );
};
export default AddMenuItem