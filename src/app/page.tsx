"use client";

import { CustomDialog } from "@/components/Dialog";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Example() {
  const [file, setFile] = useState<File | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const onDrop = useCallback((acceptedFile: File[]) => {
    // Do something with the files
    console.log({ acceptedFile });
    setFile(acceptedFile[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/*": [],
    },
    maxFiles: 1,
  });

  const onSubmit = () => {
    setOpenDialog(true);
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold tracking-tight text-primary sm:text-5xl font-berlim">
          Mok the Poke
        </h2>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900 font-inter"
            >
              Nome
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="organization"
                className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="nickname"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Apelido
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="nickname"
                id="nickname"
                className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="pdf"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Link do PDF
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="pdf"
                id="pdf"
                className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div
            {...getRootProps()}
            className="sm:col-span-2 py-2 bg-gray-100 rounded-full border-0 shadow-sm ring-1 ring-inherit ring-gray-300 cursor-pointer flex content-center justify-center outline-dashed"
          >
            <span className="text-sm font-semibold leading-6 text-gray-500">
              {!!file ? file.name : "Clique para selecionar um video"}
            </span>
            <input
              {...getInputProps()}
              className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            type="button"
            className="block w-full rounded-full bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={onSubmit}
          >
            Criar link!
          </button>
        </div>
      </form>
      <CustomDialog isOpen={openDialog} onClose={setOpenDialog} />
    </div>
  );
}
