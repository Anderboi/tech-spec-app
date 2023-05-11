import React from "react";
import FormBlock from "../components/base/form/formBlock/FormBlock";
import style from "./addProject.module.scss";
import Button from "../components/base/inputs/Button";
import Input from "../components/base/inputs/Input";
import handler from "./api/createProject";

const AddProject = () => {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      // name: { value: string };
      area: { value: number };
      address: { value: string };
      city: { value: string };
      street: { value: string };
      number: { value: number };
    };

    // const name = target.name.value;
    const area = target.area.value;
    const address = `${target.city.value}, ${target.street.value} ${target.number.value}`;

    const data = {
      // name: name,
      area: area,
      address: address,
    };
    const JSONdata = JSON.stringify(data);

    const endpoint = "api/createProject";

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    
    const result = await response.json();

    // handler(data, result);

    alert(result.data);
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
            />
            <Input
              type="text"
              placeholder="Улица"
              name="street"
              id="street"
              className={style.input}
            />
            <Input
              type="number"
              placeholder="Номер"
              name="number"
              id="number"
              className={style.input}
            />
            <Input
              type="number"
              placeholder="Плошадь"
              name="area"
              id="area"
              min={1}
              className={style.input}
            />
          </div>
          <Input
            type="email"
            placeholder="Email клиента"
            id="email"
            name="email"
            className={style.input}
            required
          />
          <Input
            type="tel"
            placeholder="Номер телефона клиента"
            id="phone"
            name="phone"
            className={style.input}
            required
          />
        </FormBlock>
        <div className={style.buttonBlock}>
          <Button mode="ghost">Cancel</Button>
          <Button mode="action">Create</Button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
