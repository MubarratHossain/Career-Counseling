import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { authContext } from "../Authprovider/Authprovider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const { signUpUser, signInWithGoogle } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;

        const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordValidation.test(password)) {
            toast.error(
                "Password must be at least 6 characters long and include both uppercase and lowercase letters."
            );
            return;
        }

        signUpUser(email, password)
            .then((result) => {
                const user = result.user;
                return updateProfile(user, { displayName: name, photoURL })
                    .then(() => {
                        toast.success(`Welcome, ${name}! Your account has been created.`);
                        e.target.reset();

                        
                        setTimeout(() => {
                            navigate("/login");
                        }, 4000);
                    })
                    .catch((error) => {
                        toast.error("Failed to update profile: " + error.message);
                    });
            })
            .catch((error) => {
                toast.error("Registration failed: " + error.message);
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                toast.success("Signed in with Google successfully!");
            })
            .catch((error) => {
                toast.error("Google Login failed: " + error.message);
            });
    };

    return (
        <div className="hero bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <ToastContainer position="top-center" autoClose={2000} />
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">Create an Account</h1>
                    <p className="text-gray-600">Join us today and start exploring!</p>
                </div>
                <div className="card w-full">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-gray-700 font-medium">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                className="input input-bordered focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-gray-700 font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                className="input input-bordered focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-gray-700 font-medium">Photo URL</span>
                            </label>
                            <input
                                type="url"
                                name="photoURL"
                                placeholder="Your photo URL"
                                className="input input-bordered focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div className="form-control mb-6 relative">
                            <label className="label">
                                <span className="label-text text-gray-700 font-medium">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Your password"
                                className="input input-bordered focus:outline-none focus:ring focus:ring-blue-300 pr-10"
                                required
                            />
                            <span
                                className="absolute top-11 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                            </span>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold w-full">
                                Register
                            </button>
                        </div>
                    </form>
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
        </div>
    );
};

export default Register;
