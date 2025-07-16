import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Layout from "./pages/Layout"
import BlogTitles from "./pages/BlogTitles";
import WriteArticles from "./pages/WriteArticles"
import Community from "./pages/Community"
import GenerateImage from "./pages/ImageGenerator"
import RemoveObject from "./pages/RemoveObject"
import RemoveBackground from "./pages/RemoveBackground"
import ReviewResume from "./pages/ReviewResume"

const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ai" element={<Layout/>}>
        <Route index element={<Dashboard />}/>
        <Route path="BlogTitle" element={<BlogTitles/>} />
        <Route path="WriteArticles" element={<WriteArticles/>} />
        <Route path="Community" element={<Community/>} />
        <Route path="GenerateImage" element={<GenerateImage/>} />
        <Route path="RemoveBackground" element={<RemoveBackground/>} />
        <Route path="RemoveObjects" element={<RemoveObject/>} />
        <Route path="ReviewResume" element={<ReviewResume/>} />
      </Route>
     </Routes>
    </div>
  )
}

export default App
