const Footer = () => {
  return (
    <>
      <div className="my-3">
        <div className="flex gap-2">
          <a target="_blank" href="https://github.com/luthfikamaal" className="bg-slate-800 text-white px-3 py-2 rounded-lg">
            <i className="bi bi-github"></i>
          </a>
          <a target="_blank" href="https://instagram.com/luthfikml_" className="bg-red-500 text-white px-3 py-2 rounded-lg">
            <i className="bi bi-instagram"></i>
          </a>
          <a target="_blank" href="https://twitter.com/luthfikml_" className="bg-blue-500 text-white px-3 py-2 rounded-lg">
            <i className="bi bi-twitter"></i>
          </a>
          <a target="_blank" href="mailto:luthfikamal13@gmai.com" className="bg-blue-500 text-white px-3 py-2 rounded-lg">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
