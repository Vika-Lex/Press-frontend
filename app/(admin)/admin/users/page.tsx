import UsersList from "@/src/components/Admin/Users/UsersList";


interface Props {
    className?: string
}


const UsersPage = async ({}: Props) => {

    return (
        <>
            <UsersList />
        </>
    );
};
export default UsersPage