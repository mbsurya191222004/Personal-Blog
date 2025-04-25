const BASE_URL : string = "https://bytesofme.onrender.com/"

const TOKEN = localStorage.getItem("authToken");

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
    console.log("Login function called with username:", username, "and password:", password);

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

        if (data.token) {
            localStorage.setItem("authToken", data.token);
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

export { SignUp, Login , TOKEN };