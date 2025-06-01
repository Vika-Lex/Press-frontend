import MenuList from "@/src/components/Admin/Menu/MenuList";
import {getAllMenus} from "@/lib/menu/getAllMenus";
import {NavItemInterface} from "@/src/types/NavItem";

interface Props {
    className?: string
}




const Page = async ({}: Props) => {
    return (
        <>
            <MenuList />
        </>
    );
};
export default Page