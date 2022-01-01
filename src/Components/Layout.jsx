const Layout = () => {
  return (
    <div className=" bg-gray-100 ">
      <div className="">
        <main className="px-16 py-6 bg-gray-100 col-span-2 ">
          <div className="flex justify-center md:justify-end">
            <a
              href="#"
              className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500 "
            >
              Log in
            </a>
            <a
              href="#"
              className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
            >
              Log Out
            </a>
          </div>
          <div>
            <header>
              <h2 className="text-gray-700 text-6xl font-semibold ">Recipes</h2>
              <h3 className="text-2xl font-semibold">For Dream</h3>
            </header>
          </div>
          <h4 className="font-bold mt-12 pb-12 border-b border-gray-200">
            Latest Receipes
          </h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-10 ">
            <div className="bg-white rounded overflow-hidden shadow-md relative ">
              <img
                src="/images/stew.png"
                alt="stew"
                className="w-full h-32 sm-h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chilli Stew</span>
                <span className="block text-gray-500 text-sm">
                  Receipe By Mario
                </span>
              </div>
              <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <svg
                  className="w-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 Mins</span>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden shadow-md relative">
              <img
                src="/images/noodle.jpg"
                alt="Noodle"
                className="w-full h-32 sm-h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Veg Noodle</span>
                <span className="block text-gray-500 text-sm">
                  Receipe By Mario
                </span>
              </div>
              <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <svg
                  className="w-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 Mins</span>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden shadow-md relative">
              <img
                src="/images/curry.jpg"
                alt="curry"
                className="w-full h-32 sm-h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Tofu Curry</span>
                <span className="block text-gray-500 text-sm">
                  Receipe By Mario
                </span>
              </div>
              <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <svg
                  className="w-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 Mins</span>
              </div>
            </div>

            <h4 className="ont-bold mt-12 pb-12 border-b border-gray-200">
              Most popular
            </h4>

            <div className="mt-8"></div>
            <div className="flex justify-center items-center pl-32">
              <div className="btn bg-secondary-100 text-secondary-200 transform hover:scale-125">
                Load More
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
