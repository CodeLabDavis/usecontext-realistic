import { useContext } from "react";
import { Post, PostsContext } from "../lib/store/PostsContext";

interface PostCardProps {
    post: Post;
}

function PostCard({ post }: PostCardProps) {
    const { posts, setPosts } = useContext(PostsContext);

    const onDelete = () => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div
            key={post.id}
            className="min-h-64 flex w-64 flex-col items-center justify-center gap-2 rounded-sm border-2 border-black bg-yellow-100 p-6"
        >
            <h2 className="text-xl">{post.title}</h2>
            <p className="text-md">{post.body}</p>
            <button
                className="mt-2 rounded border-2 border-black bg-red-500 px-4 py-1 font-bold text-white hover:bg-red-600"
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default PostCard;
