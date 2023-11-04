import { useNavigate } from "react-router-dom";
import Registration from "./auth/Registration";

const Home = ({ loggedInStatus, handleLogin }) => {
    const navigate = useNavigate();
    const handleSuccessfulAuth = (data) => {
        // TODO update parent component
        handleLogin(data);
        navigate("/dashboard");
    }
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
            <h2>Status: {loggedInStatus}</h2>
            <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
        </div>
    );
};
export default Home;