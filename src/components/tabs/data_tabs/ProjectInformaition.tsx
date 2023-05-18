"use client";

import React, { useEffect, useState } from "react";
import ProjectDataBlockLayout from "../project_data_block/ProjectDataBlockLayout";
import Input from "../../base/inputs/Input";
import Button from "../../base/inputs/Button";
import ProjectDataBlock from "../project_data_block/ProjectDataBlock";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/router";
import { Project } from "../../../types/types";

const ProjectInformation = () => {
  const router = useRouter();
  const id = router.query.id;

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(""); // set address value
  const [area, setArea] = useState(""); // set area value
  const [floors, setFloors] = useState(""); // set floors value
  const [colivers, setColivers] = useState(""); // set colivers value

  //! Fetching data from 'Projects' table on Supabase
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data: projects, error }: any = await supabase
          .from("projects")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          throw new Error(error.message);
        }
        console.log(projects);
        setAddress(projects.address);
        setArea(projects.project_area);
        setLoading(false);
      } catch (error: any) {
        console.log("Error fetching data:", error.message);
      }
    };
    fetchData();
    setEditMode(false);
  }, []);

  //! Update data from 'Projects' table on Supabase

  const updateData = async (id: any, newData: any) => {
    //TODO: make upload update to supabase
    try {
      const { error } = await supabase
        .from("projects")
        .update(newData)
        .eq("id", id);
      if (error) {
        throw new Error(error.message);
      }
      console.log("Data updatede successfully");
    } catch (error: any) {
      console.error("Error updating data:", error.message);
    }
  };

  return (
    <ProjectDataBlockLayout
      title="Общая информация по объекту"
      onEditClick={() => setEditMode(true)}
    >
      <ProjectDataBlock title="Адрес: ">
        {editMode ? (
          <Input value={address} onChange={(e) => setAddress(e.target.value)} />
        ) : (
          address
        )}
      </ProjectDataBlock>
      <ProjectDataBlock title="Площадь объекта: ">
        {editMode ? (
          <Input value={area} onChange={(e) => setArea(e.target.value)} />
        ) : (
          area
        )}
      </ProjectDataBlock>
      <ProjectDataBlock title="Этажность: ">
        {editMode ? <Input value={floors} /> : "project.floors"}
      </ProjectDataBlock>
      <ProjectDataBlock title="Количество единовременно проживающих: ">
        {editMode ? <Input value={colivers} /> : "project.colivers"}
      </ProjectDataBlock>
      {editMode && (
        <Button
          mode="action"
          onClick={() => {
            updateData(id, { address: address });
    setEditMode(false);

          }}
        >
          Save
        </Button>
      )}
    </ProjectDataBlockLayout>
  );
};

export default ProjectInformation;
