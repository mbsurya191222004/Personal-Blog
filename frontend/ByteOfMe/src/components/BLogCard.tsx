
import { useState } from "react";
import { PostBlog } from "../API/api";

interface BlogCardProps {
    Title: string;
    Blog: string;
    IsEditable : boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({Title="",Blog="",IsEditable=true}) => {
    const [isEditable, setIsEditable] = useState(IsEditable);
    const [title, setTitle] = useState(Title);
    const [content, setContent] = useState(Blog);

    const handleSubmit = async () => {
        PostBlog(title, content);
        setIsEditable(false);
        await new Promise(resolve => setTimeout(resolve, 200));
        window.location.reload();
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
            {isEditable ? (
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "8px",
                        width: "100%",
                    }}
                />
            ) : (
                <h1>{title}</h1>
            )}
            {isEditable ? (
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{
                        width: "100%",
                        height: "100px",
                        marginBottom: "8px",
                    }}
                />
            ) : (
                <p>{content}</p>
            )}
            {isEditable && (
                <button onClick={handleSubmit} style={{ padding: "8px 16px", cursor: "pointer" }}>
                    Submit
                </button>
            )}
        </div>
    );
};

export default BlogCard;