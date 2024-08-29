const ForgotPasswordForm = ({ setIsForgotPassword }) => {
  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 px-3 py-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
      >
        Reset Password
      </button>
      <div
        className="text-sm text-fuchsia-700 cursor-pointer mt-4"
        onClick={() => setIsForgotPassword(false)}
      >
        Back to Sign in
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
