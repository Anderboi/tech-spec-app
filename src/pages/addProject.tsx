"use client";

import React, { useState } from "react";
import FormBlock from "../components/base/form/formBlock/FormBlock";
import style from "./addProject.module.scss";
import Button from "../components/base/inputs/Button";
import Input from "../components/base/inputs/Input";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useUser } from "@supabase/auth-helpers-react";

const AddProject = () => {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [area, setArea] = useState("");
  const [formError, setFormError] = useState<string>("");
  const user = useUser();

  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // const area = target.area.value;
    const projectAddress = `${city}, ${street} ${number}`;

    const project_area = area;
    const title = projectAddress;
    const address = projectAddress;

    const projectData = {
      user_id: user?.id,
      title: projectAddress,
      project_area: area,
      address: projectAddress,
      image: null,
      client: null,
    };

    if (!city || !street || !number) {
      setFormError("Please fill in all fields correctly");
      return;
    }
    console.log(projectData);
    const { data, error } = await supabase
      .from("projects")
      .insert([projectData])
      .select();

    if (error) {
      console.log(error);
      setFormError("Please fill in all fields correctly");
    }

    if (data) {
      console.log(data);
      setFormError("");
      router.push("/ProjectsPage");
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>Создать новый проект</h1>
        <FormBlock>
          <div className={style.input__container}>
            <Input
              type="text"
              placeholder="Город"
              name="city"
              id="city"
              className={style.input}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Улица"
              name="street"
              id="street"
              className={style.input}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Номер"
              name="number"
              id="number"
              className={style.input}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Плошадь"
              name="area"
              id="area"
              min={1}
              className={style.input}
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </div>
          <Input
            type="email"
            placeholder="Email клиента"
            id="email"
            name="email"
            className={style.input}
          />
          <Input
            type="tel"
            placeholder="Номер телефона клиента"
            id="phone"
            name="phone"
            className={style.input}
          />
        </FormBlock>
        <div className={style.buttonBlock}>
          <Button mode="ghost">Cancel</Button>
          <Button mode="action" onSubmit={handleSubmit}>
            Create
          </Button>
        </div>
      </form>
      {formError && <span>Fill correctly</span>}
    </div>
  );
};

export default AddProject;
