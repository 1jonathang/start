"use client";

import { FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      setSearchTerm("");
    }
    return;
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      className="flex items-center justify-center border dark:border-slate-600 rounded-b rounded-md pl-2 mr:2 bg-white dark:bg-slate-600"
    >
      <input
        className="border-none outline-none w-[20rem] bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-400"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" className="p-2 text-red-300">
        <Search className="w-5 h-5" />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
