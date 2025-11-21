const BASE_URL : string = "https://bytesofme-o57l.onrender.com/"

const TOKEN = localStorage.getItem("authToken")


const SignUp = async (username: string, password: string) => {
    console.log("SignUp function called with username:", username, "and password:", password);
    
    try {
        const response = await fetch(BASE_URL + "SignUp/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });


        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        return {
            data: data,
            success: true,
        };
    } catch (error) {
        console.error(error);
        return {
            data: null,
            success: false,
        };
    }
};

const Login = async (username: string, password: string) => {
    console.log("Login function called");
    Logout();

    try {
        const response = await fetch(BASE_URL + "GetToken/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (data.access) {
            
            localStorage.setItem("authToken", data.access);
            
        }
        return {
            data: data,
            success: true,
        };
    } catch (error) {
        console.error(error);
        return {
            data: null,
            success: false,
        };
    }
};

const Logout = () => {
    localStorage.removeItem("authToken");
};

const PostBlog = async (title: string, blog: string) => {
    console.log("PostBlog function called with title:", title, "and blog:", blog);

    try {
        const response = await fetch(BASE_URL + "Blog/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`,
            },
            body: JSON.stringify({
                title: title,
                blog: blog,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        return {
            data: data,
            success: true,
        };
    } catch (error) {
        console.error(error);
        return {
            data: null,
            success: false,
        };
    }
}

const GetBlogs = async () => {
    console.log("GetBlogs function called");

    try {
        const response = await fetch(BASE_URL + "Blog/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        return {
            data: data,
            success: true,
        };
    } catch (error) {
        console.error(error);
        return {
            data: null,
            success: false,
        };
    }
};

export { SignUp, Login , PostBlog, GetBlogs, Logout, TOKEN };