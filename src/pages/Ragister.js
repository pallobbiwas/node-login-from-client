import React from "react";
import { useForm } from "react-hook-form";

const Ragister = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    reset();
  };
  return (
    <div className="flex justify-center mt-40">
      <div className="w-1/2 bg-slate-400 rounded-lg p-5">
        <div className="px-10">
          <h1 className="text-3xl text-center pb-4">Ragister here</h1>
          <hr />
        </div>
        <form
          className="mx-auto flex flex-col p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Type here email"
            class="input input-bordered input-primary w-3/4 mx-auto"
            {...register("email", { required: true })}
          />
          <br />
          <input
            placeholder="Type here password"
            class="input input-bordered input-primary w-3/4 mx-auto "
            type="password"
            {...register("password", { required: true })}
          />
          <br />
          <input className="btn btn-sm w-1/4 mx-auto" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Ragister;
