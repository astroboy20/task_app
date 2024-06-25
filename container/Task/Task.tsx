import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Subscribe } from "@/components/Subscribe";
import React from "react";
import { TaskBoard } from "./TaskBoard";

const Task = () => {
  return (
    <div>
      <Navbar />
      <TaskBoard />
      <Subscribe />
      <Footer />
    </div>
  );
};

export { Task };
