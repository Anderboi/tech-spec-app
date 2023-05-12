import { supabase } from "./supabaseClient";

export default async function getProjects() {
  const projects = await supabase.from("projects").select("*").order("id");

  if (!projects) throw new Error("Projects not found");
  console.log(projects);

  return projects.data;
}
