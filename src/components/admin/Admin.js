import { useState } from "react";

const Admin = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            {loggedIn ? 
                <div>
                    admin page here
                </div>
            :
                <div>
                    Administrator login
                    <form>
                        <label id='username'></label>
                        <input type='text' for='username'></input>
                        <br/>
                        <label id='password'></label>
                        <input type='password' for='password'></input>
                        <input type='submit'></input>
                    </form>
                </div>
            }
        </div>
    )
}

export default Admin;