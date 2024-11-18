/* eslint-disable react/prop-types */
const Banner = ({ title, subtitle, children }) => {
  return (
    <section className={`bg-purple-500 rounded-md mt-24`}>
      <div className="hero  w-[1500px] h-[690px]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold w-[700px] ml-[-120px]">
              {title}
            </h1>
            <p className="p-5 w-[790px] h-[56px] ml-[-170px]">{subtitle}</p>
            {children && <div style={{ marginTop: "20px" }}>{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
