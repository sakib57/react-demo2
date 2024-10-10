import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
                <h2>Home</h2>
                <Link className="mt-2 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white" to="/users">Users</Link>
            </div>
        </div>
    );
};

export default Home;
