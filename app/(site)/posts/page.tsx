import {getAllPosts} from "@/src/libs/posts/getAllPosts";
import PostList from "@/src/components/Posts/PostList";

interface Props {
    className?: string
}


const PostPage = async ({}: Props) => {
    const posts = await getAllPosts()
    return (
        <>
            <PostList posts={posts}/>
        </>
    );
};
export default PostPage