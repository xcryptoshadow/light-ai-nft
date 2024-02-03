import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const SuccessModal = ({ txHash, openMintModal, handleOnClose }) => {
  return (
    <>
      <Transition appear show={openMintModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 font-serif"
          onClose={handleOnClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Creation Successful!!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You can now proceed to verify your transaction on the
                      Scroll scan.
                      <br /> <br />
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="text-white bg-slate-900 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-xl text-sm px-4 py-2 hover:opacity-70"
                      //   onClick={closeModal}
                    >
                      <a
                        target="_blank"
                        href={'https://sepolia.scrollscan.dev/tx/' + txHash}
                      >
                        Confirm on Scroll Scan
                      </a>
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-xl text-sm px-4 py-2 hover:opacity-70"
                      //   onClick={closeModal}
                    >
                      <a href="/profile">View in profile</a>
                    </button>
                    &nbsp;&nbsp;
                    {/* <button
                      type="button"
                      className="text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 hover:opacity-70 "
                      //   onClick={closeModal}
                    >
                      <a target="_blank" href="">
                        {' '}
                        Confirm on Opensea
                      </a>
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SuccessModal;
