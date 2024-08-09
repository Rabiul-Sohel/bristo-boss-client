import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="flex flex-col w-2/3 mx-auto my-10 gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input
        defaultValue="name"
        {...register("name", {
          maxLength: 15,
          pattern:
            /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/i,
        })}
      />
      {errors.name?.type === "maxLength" && <span>Length not over 15</span>}
      {errors.name?.type === "pattern" && <span>Pattern</span>}
      <input defaultValue="age" {...register("age", { min: 10, max: 20 })} />
      {errors.age && <span>10-20</span>}
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue="email" {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      {/* errors will return when field validation fails  */}

      <input className="btn" type="submit" />
    </form>
  );
};

export default Form;
