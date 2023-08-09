import { createContext, useState } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface PostsContextValue {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostsContext = createContext<PostsContextValue>({
    posts: [],
    setPosts: () => {},
});

interface PostsProviderProps {
    children: React.ReactNode;
}

const PostsProvider = ({ children }: PostsProviderProps) => {
    const [posts, setPosts] = useState<Post[]>([]);

    return (
        <PostsContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostsContext.Provider>
    );
};

export type { Post };
export { PostsContext, PostsProvider };
