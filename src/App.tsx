import { createBrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { styled } from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Ref from "./components/Ref";

const PageWrapper = styled.div`
    width:80vw;
    margin:0 auto;
`;

function Root(){
  return(
    <>
      <PageWrapper>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/education"} element={<Education/>} />
          <Route path={"/experience"} element={<Experience/>} />
          <Route path={"/projects"} element={<Projects/>} />
          <Route path={"/skills"} element={<Skills/>} />
          <Route path={"/references"} element={<Ref/>} />
        </Routes>
        <Footer />
      </PageWrapper>
    </>
  );

}

const router = createBrowserRouter(
  [
    {path:"*", Component:Root},
  ]
);

export default function App(){
  return(
    <RouterProvider router={router}/>
  );
}