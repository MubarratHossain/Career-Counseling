import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Authprovider/Authprovider";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(authContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                console.log("User signed in:", result.user);
                e.target.reset();
                navigate('/');
                toast.success("Login successful!");
            })
            .catch((error) => {
                console.error("Login error:", error.message);
                toast.error("Login failed. Please check your credentials.");
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                console.log("Google sign-in:", result.user);
                navigate('/');
                toast.success("Google login successful!");
            })
            .catch((error) => {
                console.error("Google sign-in error:", error.message);
                toast.error("Google login failed. Please try again.");
            });
    };
    const handleForgotPassword = () => {
        const emailInput = document.querySelector('input[name="email"]');
        const email = emailInput?.value || '';
        navigate(`/forgot-password?email=${encodeURIComponent(email)}`);
    };
    

    return (
        <div className="hero bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome Back!</h1>
                    <p className="text-gray-600">Login to your account</p>
                </div>
                <div className="card w-full">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-gray-700 font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text text-gray-700 font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                            <label className="label">
                                <a
                                    
                                    onClick={handleForgotPassword}
                                    className="label-text-alt text-blue-500 hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mb-4">
                            <button className="btn bg-gradient-to-r from-orange-300 to-orange-500 hover:from-orange-400 hover:to-orange-600 shadow-md  text-white font-semibold w-full">
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-gray-600">
                        New to this website?{" "}
                        <Link to="/register">
                            <button className=" text-white font-semibold py-1 px-3 rounded-md bg-gradient-to-r from-orange-300 to-orange-500 hover:from-orange-400 hover:to-orange-600 shadow-md  transition">
                                Register
                            </button>
                        </Link>
                    </p>
                </div>
                <div className="divider text-gray-400">OR</div>
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center bg-white border border-gray-300 rounded-lg px-4 py-2 w-full hover:bg-gray-100 transition shadow-sm"
                >
                    <img
                        src="https://i.postimg.cc/0QJVDHzQ/image8-2.webp"
                        alt="Google Logo"
                        className="h-6 mr-3"
                    />
                    <span className="text-gray-600 font-medium">Sign in with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
