import { useSearchParams } from "react-router-dom";

const ForgetPassword = () => {
    const [searchParams] = useSearchParams();
    const emailFromQuery = searchParams.get('email') || '';

    const handleResetPassword = () => {
        window.location.href = 'https://mail.google.com';
    };

    return (
        <div className="hero bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Reset Password</h1>
                    <p className="text-gray-600">Enter your email to reset your password</p>
                </div>
                <form>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-700 font-medium">Email</span>
                        </label>
                        <input
                            type="email"
                            value={emailFromQuery}
                            readOnly
                            className="input input-bordered focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleResetPassword}
                        className="btn bg-gradient-to-r from-orange-300 to-orange-500 text-white font-semibold w-full"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
