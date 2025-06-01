import CommentForm from "@/src/components/Comments/AddComment/CommentForm";

interface Props {
    className?: string
}


const CreateCommentPage = ({}: Props) => {
    return (
        <>
            <CommentForm/>
        </>
    );
};
export default CreateCommentPage