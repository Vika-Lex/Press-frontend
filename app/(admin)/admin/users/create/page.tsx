import UserForm from "@/src/components/Admin/Users/AddUser/UserForm";

interface Props {
    className?: string
}


const Page = ({}: Props) => {
    return (
        <>
          <UserForm/>
        </>
    );
};
export default Page