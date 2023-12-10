import useMutation from "@/libs/client/useMutation";
import React from "react";
import { useForm } from "react-hook-form";

const GuestBook = () => {
  const [enter, { loading, data, error }] = useMutation("/api/client");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const onValid = (data) => {
    enter(data);
    reset();
  };
  const onInvalid = (errors) => {
    console.log(errors);
  };
  return (
    <div id="msg" className="w-[90%] flex flex-col space-y-4 items-center py-8">
      <h1>신랑신부에게 축하메시지를 남겨주세요</h1>
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="flex flex-col space-y-4 bg-neutral-300 p-4 w-full items-center"
      >
        <div className="w-full flex justify-between">
          <input
            {...register("user", {
              required: "이름을 작성해주세요",
            })}
            className="w-[48%] p-1"
            type="text"
            placeholder="이름"
          />
          <input
            {...register("password", {
              required: "비밀번호를 작성해주세요",
            })}
            className="w-[48%] p-1"
            type="text"
            placeholder="비밀번호"
          />
        </div>
        <input
          {...register("content", {
            required: "축하메시지를 작성해주세요",
          })}
          className="w-full pt-1 pb-20 px-1"
          type="text"
          placeholder="축하메시지를 적어주세요 :)"
        />
        {errors.user?.message}
        {errors.password?.message}
        {errors.content?.message}
        <button className="bg-white w-[60%] p-1" type="submit">
          축하 메시지 남기기
        </button>
      </form>
    </div>
  );
};

export default GuestBook;
