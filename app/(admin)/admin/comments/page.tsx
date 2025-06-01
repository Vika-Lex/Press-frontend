import CommentsList from "@/src/components/Comments/CommentsList";

interface Props {
    className?: string
}


const CommentsPage = ({}: Props) => {
    return (
        <>
           <CommentsList/>
        </>
    );
};
export default CommentsPage