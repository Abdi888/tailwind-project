const Navpar = ()=>{
     return(
          <div className="col-span-1 md:flex md:justify-end ">
           <nav className="text-right">
                <div className="flex justify-between items-center">
                     <h1 className="font-bold uppercase p-4 border-b border red-100">
                          <a href="#">Dream Food</a>
                     </h1>
                     <div className="px-4 cursor-pointer md:hidden" id="burger">
                     <svg className="w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                     </div>
                </div>
                <ul className="text-sm mt-6 hidden md:block" id="menu">
                     <li className="text-gray-700 font-bold py-1">
                          <a href="#" className="px-4 flex justify-end border-r-4 border-primary">
                               <span>Home</span>
                               <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                          </a>
                     </li>
                     <li className="py-1">
                          <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                               <span>About</span>
                               <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>
                          </a>
                     </li>
                     <li className="py-1">
                          <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                               <span>Contact</span>
                               <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          </a>
                     </li>
                </ul>
           </nav>
          </div>
     );
}
export default Navpar