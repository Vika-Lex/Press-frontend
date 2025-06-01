import {Button} from "@/components/ui/button";
import Link from "next/link";
import {clsx} from "clsx";
import style from "./AddUser.module.scss"


interface Props {
    className?: string
}


const AddUser = ({}: Props) => {
    return (
        <>
            <Button asChild className={clsx(style.button)}>
                <Link href='/admin/users/create'>Створити користувача</Link>
            </Button>
        </>
    );
};
export default AddUser