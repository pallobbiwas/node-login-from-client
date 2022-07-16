import React from "react";

const Home = () => {
  return (
    <div>
      <aside className="bg-pink-200 py-40 flex items-center">
        <div className="p-10 px-32 text-center">
          <h1 className="text-4xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            excepturi?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit minus
            architecto nulla minima, hic repellendus quam tempore, voluptatibus
            optio labore quos. Optio molestiae deleniti dolore rerum alias
            praesentium at error?
          </p>
        </div>
      </aside>
      <aside>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch"
              class="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 class="text-5xl font-bold">Box Office News!</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://placeimg.com/260/400/arch"
              class="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 class="text-5xl font-bold">Box Office News!</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </aside>
      <aside>
        <footer class="footer p-10 bg-neutral text-neutral-content">
          <div>
            <span class="footer-title">Services</span>
            <a class="link link-hover">Branding</a>
            <a class="link link-hover">Design</a>
            <a class="link link-hover">Marketing</a>
            <a class="link link-hover">Advertisement</a>
          </div>
          <div>
            <span class="footer-title">Company</span>
            <a class="link link-hover">About us</a>
            <a class="link link-hover">Contact</a>
            <a class="link link-hover">Jobs</a>
            <a class="link link-hover">Press kit</a>
          </div>
          <div>
            <span class="footer-title">Legal</span>
            <a class="link link-hover">Terms of use</a>
            <a class="link link-hover">Privacy policy</a>
            <a class="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </aside>
    </div>
  );
};

export default Home;
