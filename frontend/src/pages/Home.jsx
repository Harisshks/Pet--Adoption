import React from 'react';
import Navbar from '../components/Navbar';
import myim from  '../assests/img/adopt-a-pet.jpg'
import dogImage from '../assests/img/doggie.jpeg'
import dogsearch from '../assests/img/search.png'
import hours from '../assests/img/24.png'
import pethomee from '../assests/img/pethomee.png'
const Home = () => {
  return (
    <>
    <Navbar/>
    
    <div>
      {/* Section 1 */}
    <div className='h-screen w-full'><img src={myim} className='h-full w-full'></img></div>
    <div class="bg-gray-100 py-16 flex flex-col items-center">

  <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
    Re-Home and Adopt a Pet 
  </h1>
  <p class="text-lg text-gray-500 mb-8">
    Every Pet Deserves a Good Home. <span class="font-semibold text-gray-800">#Adoptlove</span>
  </p>
  <a href="/adopt" class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow">
    Adopt a pet
  </a>
</div>

{/* Section 2 */}
<div className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={dogImage}
              alt="Adopt me"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Your Pet Adoption Journey With ThePetNest
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <img
                  src={dogsearch}
                  alt="Search Pet"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Search Pet
                  </h3>
                  <p className="text-gray-600">
                    Adopt a dog or cat who's right for you. Simply enter your
                    city above to start your search.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={hours}
                  alt="Connect"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Connect
                  </h3>
                  <p className="text-gray-600">
                    Once you find a pet, click "Adopt" and fill the form to adopt the pet you like.
                    Contact us to learn more
                    about how to meet and adopt the pet.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={pethomee} 
                  alt="AdoptLove"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    AdoptLove
                  </h3>
                  <p className="text-gray-600">
                    The rescue or pet parents will walk you through their
                    adoption process. Prepare your home for the arrival of your
                    fur baby to help them adjust to their new family.
                  </p>
                </div>
              </div>    
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Section 3 */}

      <div class="flex justify-center space-x-16 my-12">
  <div class="text-center">
    <div class="text-4xl mb-4">
      <i class="fas fa-search"></i>
    </div>
    <h2 class="text-xl font-semibold mb-2">Search</h2>
    <p>Simply enter your city and start your search</p>
  </div>
  <div class="text-center">
    <div class="text-4xl mb-4">
    
      <i class="fas fa-comments"></i>
    </div>
    <h2 class="text-xl font-semibold mb-2">Meet</h2>
    <p>Schedule your appointment to meet the pet you love</p>
  </div>
  <div class="text-center">
    <div class="text-4xl mb-4">
   
      <i class="fas fa-shopping-cart"></i>
    </div>
    <h2 class="text-xl font-semibold mb-2">Adopt</h2>
    <p>Finally adopt the dog or cat you love</p>
  </div>
</div>

    </div>
    </>
  );
};
export default Home;
