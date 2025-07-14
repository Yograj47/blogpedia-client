import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Blog from './pages/Blog';
import BlogPage from "./pages/BlogDetailPage";
import About from './pages/AboutPage';
import Contact from './pages/Contact';

const router = createBrowserRouter([

  // Home path
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
      </>
    ),
  },

  // Dynamic path seperate for each blog
  {
    path: "/blog/:blogId",
    element: (
      <>
        <NavBar />
        <BlogPage />
      </>
    ),
  },

  // All the blogs 
  {
    path: "/blogs",
    element: (
      <>
        <NavBar />
        <Blog />
      </>
    ),
  },

  // Page not found
  {
    path: "*",
    element: (
      <>
        <NavBar />
        <h1>404 Not Found</h1>
      </>
    ),
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;