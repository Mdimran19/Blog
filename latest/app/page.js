
import Blogs from "./component/Blogs";
//import BlogDetails from "./component/blogs/[id]";
import Footer from "./component/Footer";
import Header from "./component/Header";


export default function Home() {
  return (
    <div>
      <Header/>
      <Blogs/>
      
      <Footer/>
    </div>
  );
}
