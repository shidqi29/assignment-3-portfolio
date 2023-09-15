const Home = () => {
  return (
    <div className="-mt-20 flex flex-col items-center justify-center gap-10 md:flex-row">
      <div className="h-64 w-64">
        <img src="profile.jpg" alt="" className="h-full w-full rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl">Hi, I am</p>
        <h1 className="text-3xl font-bold tracking-wide">Shidqi Amirul Haq</h1>
        <p className="text-2xl tracking-widest">a <span className="font-bold text-primary">Front-End Developer</span></p>
      </div>
    </div>
  );
};

export default Home;
