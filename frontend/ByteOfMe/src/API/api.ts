const BASE_URL : string = "https://bytesofme.onrender.com/"


async function SignUp(username : string , password : string){
    try{
        const response = await fetch(
            BASE_URL + "SignUp/",{
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    username : username,
                    password : password,
                })
            }
        )
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
        
        return data
    }catch(error){
        console.error(error);
        
    }



}



function main() : void{
        console.log("STARTED !!!!");
        SignUp("surya44","1234");
}
main();