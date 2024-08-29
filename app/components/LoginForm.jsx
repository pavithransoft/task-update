const LoginForm = ({ setIsForgotPassword, setIsLogin }) => {
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
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 px-3 py-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 text-fuchsia-600 border-gray-300 rounded focus:ring-fuchsia-500"
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>
        <div
          className="text-sm text-fuchsia-700 cursor-pointer"
          onClick={() => setIsForgotPassword(true)}
        >
          Forgot password?
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
      >
        Sign in
      </button>
      <div
        className="text-sm text-center cursor-pointer mt-4"
        onClick={() => setIsLogin(false)}
      >
        {`Don't`} have an account?
        <span className="text-fuchsia-700 px-1">Sign up</span>
      </div>
    </form>
  );
};

export default LoginForm;
