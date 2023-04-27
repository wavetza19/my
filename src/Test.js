import Posts from './Posts';
import Home from './Home';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
function Test() {
  return (
    <BrowserRouter>
       <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">All posts</Link></li>
          <li><Link to="/posts/1">detail item1</Link></li>
          <li><Link to="/posts?fname=korawit&lname=orkphol">korawit</Link></li>
        </ul>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="posts/:id" element={<Posts/>}/>
        </Routes>
    </BrowserRouter>
  );
}
export default Test;
