// import logo from './logo.svg';
import './App.css';
// <img src={logo} className="App-logo" alt="logo" />
import Header from "./components/Header";
import Footer from './components/Footer';
import MobileLaptopFigure from './images/illustration-laptop-mobile.svg';
import MobileEditorFigure from './images/illustration-editor-mobile.svg';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Body */}
      <div className="pt-36 pb-18 text-blg-blue-blue-dark bg-editor">
        <h4 className="text-center font-Overpass font-bold text-2xl pb-8 sm:pb-24">Designed for the future</h4>
        <img src={MobileLaptopFigure} className="sm:hidden" alt="" />

        <div className="px-8 md:px-16 pb-10">
          <div style={{maxWidth: '350px'}} className="font-medium font-Ubuntu">
            <h5 className="pb-4 text-lg">Introducing an extensible editor</h5>

            <p className="font-light font-Ubuntu">
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
              change the looks of a blog.
            </p>
          </div>
        </div>
        <div className="px-8 md:px-16">
          <div style={{maxWidth: '350px'}} className="font-medium font-Ubuntu">
            <h5 className="pb-4 text-lg">Robust content management</h5>

            <p className="font-light font-Ubuntu">
              Flexible content management enables users to easily move through posts. Increase the usability of your blog 
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
        </div>
      </div>
      {/* Editor Section */}
      <div className="flex flex-col place-items-end py-36 px-8 md:px-16 text-blg-blue-blue-dark bg-laptop">
        
        <img src={MobileEditorFigure} className="sm:hidden" alt="" />

        <div className="pb-10">
          <div style={{maxWidth: '350px'}} className="font-medium font-Ubuntu">
            <h5 className="pb-4 text-lg">
              Free, open, simple
            </h5>

            <p className="font-light font-Ubuntu">
              Blogr is a free and open source application backed by a large community of helpful developers. It supports 
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
            </p>
          </div>
        </div>

        <div>
          <div style={{maxWidth: '350px'}} className="font-medium font-Ubuntu">
            <h5 className="pb-4 text-lg">Powerful tooling</h5>

            <p className="font-light font-Ubuntu">
              Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
