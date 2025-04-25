import { useEffect, useState } from "react";
import { GetBlogs, Logout, TOKEN } from "../../API/api";
import BlogCard from "../../components/BLogCard";
import { useNavigate } from "react-router-dom";

function Home() {

    interface Blog {
        title: string;
        blog: string;
    }

    const [Blogs, setBlogs] = useState<Blog[]>([]);
    const navigate = useNavigate();

    const handleLogoutClick = () =>{
        Logout();
        navigate("/login")
    }

    

    
    useEffect(() => {
        console.log(TOKEN)
        if(!localStorage.getItem("authToken")){
            navigate("/login");
        }

        const getblogsready = async () => {
                try{
                    const data = await GetBlogs();
                    console.log(data)

                    if(data.success){
                        setBlogs(data.data);
                    }

                }catch{
                    console.log("Oops");
                    
                    
                }
        }
        getblogsready();

        return () => {setBlogs([])}
    }
    
        ,[]
    )


    return (  
    <>
        <div id="navbar">
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
        {
            Blogs.map(
                (blog) => <BlogCard Title={blog.title} Blog={blog.blog} IsEditable={false}/>
            )
        }
        <BlogCard Title="" Blog="" IsEditable={true}/>
    </> 
    );
}

export default Home;