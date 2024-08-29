const RegisterForm = ({ setIsForgotPassword, setIsLogin }) => {
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
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="mt-1 px-3 py-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
      >
        Register
      </button>
      <p className="text-sm text-center cursor-pointer mt-4">
        Already have an account?
        <button
          type="button"
          className="text-fuchsia-700 hover:underline px-1"
          onClick={() => {
            setIsLogin(true);
            setIsForgotPassword(false);
          }}
        >
          Login
        </button>
      </p>
    </form>
  );
};

export default RegisterForm;
