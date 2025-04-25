import { useEffect, useState } from "react";
import { GetBlogs, TOKEN } from "../../API/api";
import BlogCard from "../../components/BLogCard";
import { useNavigate } from "react-router-dom";

function Home() {

    const [Blogs,setBlogs] = useState([]);
    const navigate = useNavigate();

    

    
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