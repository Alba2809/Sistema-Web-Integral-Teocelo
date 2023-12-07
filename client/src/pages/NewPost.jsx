import { Controller, useForm } from "react-hook-form";
import InputSelect from "../components/InputSelect";
import Footer from "../components/Footer";
import UploadImage from "../components/UploadImage";
import { motion } from "framer-motion";
import { usePosts } from "../context/PostContext";
import AlertMessage from "../components/AlertMessage";
import { useEffect, useState } from "react";
import { Collapse } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const options = ["Noticia", "Comunicado", "Convocatoria"];

function NewPost() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { createPost, errors: createPostErrors } = usePosts();
  const [collapseErrors, setCollapseErrors] = useState(false);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    formData.append("image", data.image);
    formData.append("title", data.title);
    formData.append("type", data.type);
    formData.append("body", data.body);

    try {
      const responseData = await createPost(formData);
      navigate("/posts");
    } catch (error) {}
  });

  useEffect(() => {
    if (createPostErrors.length > 0) {
      setCollapseErrors(true);

      const timer = setTimeout(() => {
        setCollapseErrors(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [createPostErrors]);

  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center text-center">
          <p>Nueva publicación</p>
        </div>
        <div className="m-10">
          <Collapse open={collapseErrors}>
            <div>
              {createPostErrors.map((error, i) => (
                <AlertMessage key={i} message={error} />
              ))}
            </div>
          </Collapse>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-10 grid grid-cols-2 gap-10 font-montserrat"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="w-1/2">
              <p className="font-bold text-xl">Título del contenido:</p>
              <div className={errors.title ? "-mb-5" : "mb-1"}>
                <input
                  type="text"
                  placeholder="Ingresa un título llamativo..."
                  {...register("title", { required: true })}
                  className="shadow border border-black py-1 px-3 w-full"
                />
                {errors.title && (
                  <p className="text-red-500">El título es requerido</p>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <p className="font-bold text-xl">Tipo de contenido:</p>
              <div className={errors.type ? "-mb-5" : "mb-1"}>
                <InputSelect options={options} register={register} />
                {errors.type && (
                  <p className="text-red-500">
                    Se requiere seleccionar un tipo
                  </p>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <p className="font-bold text-xl">Cuerpo de la publicación:</p>
              <div className={errors.body ? "-mb-5" : "mb-1"}>
                <textarea
                  {...register("body", { required: true })}
                  className="w-full text-black px-4 py-2 rounded-md border border-black resize-none shadow"
                  placeholder="..."
                  rows={8}
                ></textarea>
                {errors.body && (
                  <p className="text-red-500">
                    Se requiere la información de la publicación
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-5">
              <p className="font-bold text-xl">Cargar imagen:</p>
              {errors.image && (
                <p className="text-red-500">Se requiere una imagen</p>
              )}
            </div>
            <div className="w-1/2 flex items-center h-[22rem]">
              <Controller
                name="image"
                control={control}
                rules={{ required: true }}
                render={({ field: { ref, ...field } }) => (
                  <UploadImage {...field} />
                )}
              />
            </div>
          </div>
          <div className="col-span-2 flex justify-center">
            <motion.div className="w-72 flex" whileTap={{ scale: 0.95 }}>
              <div
                to="#"
                className="bg-white border-[#6d1610] border-2 p-1 rounded-full w-full"
              >
                <button
                  className="bg-[#6d1610] text-white rounded-full font-montserrat text-3xl py-1 px-5 w-full"
                  type="submit"
                >
                  Publicar
                </button>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default NewPost;
