import { useEffect, useState } from "react";
import { GetBlogs } from "../../API/api";
import BlogCard from "../../components/BLogCard";

function Home() {

    const [Blogs,setBlogs] = useState([]);

    

    
    useEffect(() => {
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