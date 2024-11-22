const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white p-10 rounded-lg mb-2 max-w-[95%] mx-auto animate-shake">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <nav className="flex flex-col">
          <h6 className="footer-title text-xl font-semibold mb-4">Services</h6>
          <a className="link link-hover hover:text-orange-500 transition-all">Branding</a>
          <a className="link link-hover hover:text-orange-500 transition-all">Design</a>
          <a className="link link-hover hover:text-orange-500 transition-all">Marketing</a>
          <a className="link link-hover hover:text-orange-500 transition-all">Advertisement</a>
        </nav>

        <nav className="flex flex-col">
          <h6 className="footer-title text-xl font-semibold mb-4">Company</h6>
          <a className="link link-hover hover:text-orange-500 transition-all">About us</a>
          <a className="link link-hover hover:text-orange-500 transition-all">Contact</a>
          <a className="link link-hover hover:text-orange-500 transition-all">Jobs</a>
          <a className="link link-hover hover:text-orange-500 transition-all">Press kit</a>
        </nav>

        <nav className="flex flex-col">
          <h6 className="footer-title text-xl font-semibold mb-4">Legal</h6>
          <a className="link link-hover hover:text-orange-500 transition-all">Terms of use</a>
          <a className="link link-hover hover:text-orange-500 transition-all">Privacy policy</a>
          <a className="link link-hover hover:text-orange-500 transition-all">Cookie policy</a>
        </nav>

        <form className="flex flex-col">
          <h6 className="footer-title text-xl font-semibold mb-4">Newsletter</h6>
          <fieldset className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="flex space-x-2 flex-col gap-4 items-start ">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered flex-grow ]"
              />
              <button className="btn bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 hover:scale-105 transform transition-all duration-300 ">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
