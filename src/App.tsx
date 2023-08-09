import { useContext, useEffect } from "react";
import "./App.css";
import { PostsContext } from "./lib/store/PostsContext";
import { posts } from "./lib/data/fakedata";
import Posts from "./components/Posts";

function App() {
    const { setPosts } = useContext(PostsContext);

    useEffect(() => {
        setPosts(posts);
    }, []);

    return (
        <>
            <div className="flex w-full flex-wrap justify-center p-10">
                <div className="flex w-2/3 flex-wrap gap-y-10">
                    <h1 className="w-full text-center text-4xl">Posts</h1>
                    <div className="flex flex-wrap justify-center">
                        <Posts />
                    </div>
                </div>

                <p className="mt-4 w-full text-center text-sm text-gray-500">
                    Note: To reset the posts, refresh the page.
                </p>
            </div>
        </>
    );
}

export default App;
