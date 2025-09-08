'use client';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFEFEA]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start  gap-8 lg:gap-12">
          <div className="w-full lg:w-[46%] relative">
            <div 
              className="bg-cover bg-center bg-no-repeat lg:p-14 rounded-lg footer-background"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-[72px] h-[72px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                    <img src='./images/StarFooter.png'/>
                    </div>
                  </div>
                  <h2 className="text-3xl font-medium text-bg-primary-bg font-['Poppins']">
                    GrowX
                  </h2>
                </div>

                <p className="text-sm font-normal leading-sm text-text-text-inverse font-['Poppins'] mb-8 max-w-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>

                <div className="flex items-center gap-2">
                  <img src="/images/img_logo_facebook.svg" alt="Facebook" className="w-6 h-6 hover:opacity-80 transition-opacity cursor-pointer" />
                  <img src="/images/img_logo_linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition-opacity cursor-pointer" />
                  <img src="/images/img_logo_twitter.svg" alt="Twitter" className="w-6 h-6 hover:opacity-80 transition-opacity cursor-pointer" />
                  <img src="/images/img_logo_instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition-opacity cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[54%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium leading-xl text-text-text-primary font-['Poppins'] mb-3">
                Our Company
              </h3>
              <div className="flex flex-col gap-5">
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Home
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  About
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Services
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  News
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium leading-xl text-text-text-primary font-['Poppins'] mb-2">
                Services
              </h3>
              <div className="flex flex-col gap-5">
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Market Research
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Market Analysis
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  SEO Consultancy
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Page Ranking
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  SMM
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              <h3 className="text-xl font-medium leading-xl text-text-text-primary font-['Poppins'] mb-2.5">
                Features
              </h3>
              <div className="flex flex-col gap-5">
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Brand Strategy
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Audience Analytics
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Copywriting
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Team Training
                </a>
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Email Marketing
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-7.5">
              <h3 className="text-xl font-medium leading-xl text-text-text-primary font-['Poppins']">
                Subscribe
              </h3>
              <div className="flex flex-col gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5.5 py-2.5 bg-bg-background-primary text-text-text-secondary rounded-base shadow-[6px_6px_12px_#29292916]"
                  value=""
                  onChange={() => {}}
                />
                <a href="#" className="text-sm font-normal leading-sm text-text-text-primary font-['Poppins'] hover:text-text-primary-brand transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer