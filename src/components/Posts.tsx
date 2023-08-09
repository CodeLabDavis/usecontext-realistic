import { useContext } from "react";
import { PostsContext } from "../lib/store/PostsContext";
import PostCard from "./PostCard";

function Posts() {
    const { posts } = useContext(PostsContext);

    return (
        <div className="flex flex-wrap justify-center gap-5">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Posts;
