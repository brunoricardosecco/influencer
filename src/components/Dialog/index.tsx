import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export function CustomDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <CheckIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Criado com sucesso!
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="w-full max-w-sm">
                        <div className="mb-2 flex justify-between items-center">
                          <label
                            htmlFor="website-url"
                            className="text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Verify your website:
                          </label>
                        </div>
                        <div className="flex items-center">
                          <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary border rounded-s-full">
                            URL
                          </span>
                          <div className="relative w-full">
                            <input
                              id="website-url"
                              type="text"
                              aria-describedby="helper-text-explanation"
                              className="bg-gray-50 border border-e-0 border-gray-300 text-gray-900   text-sm border-s-0 focus:ring-primary focus:border-primary block w-full p-2.5"
                              value="https://influencer.mokthepoke.com.br/MariaClara"
                              readOnly
                              disabled
                            />
                          </div>
                          <button
                            data-tooltip-target="tooltip-website-url"
                            data-copy-to-clipboard-target="website-url"
                            className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-primary rounded-e-full hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/60 border border-primary hover:border-primary/90"
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                "https://influencer-five.vercel.app/MariaClara"
                              );
                            }}
                          >
                            <span id="default-icon">
                              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 20"
                              >
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                              </svg>
                            </span>
                            <span
                              id="success-icon"
                              className="hidden inline-flex items-center"
                            >
                              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 12"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M1 5.917 5.724 10.5 15 1.5"
                                />
                              </svg>
                            </span>
                          </button>
                          <div
                            id="tooltip-website-url"
                            role="tooltip"
                            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                          >
                            <span id="default-tooltip-message">Copy link</span>
                            <span
                              id="success-tooltip-message"
                              className="hidden"
                            >
                              Copied!
                            </span>
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-full bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    onClick={() => onClose(false)}
                  >
                    Fechar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
