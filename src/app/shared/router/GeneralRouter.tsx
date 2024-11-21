import { Routes, Route } from "react-router-dom";
import { GeneralLayout } from "../layout";
import { Posts } from "../../posts";
import { About } from "../../about";
import { NotFound } from "../components";
import { Projects } from "../../projects";
import { Contact } from "../../contact";

export const GeneralRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/feed" index element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
