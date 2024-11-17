const Footer = () => {
    return (
      <footer className="footer bg-base-200 text-base-content p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
  
          
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
  
          
          <nav className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
  
          
          <form className="flex flex-col">
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-full">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="input input-bordered flex-grow"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  