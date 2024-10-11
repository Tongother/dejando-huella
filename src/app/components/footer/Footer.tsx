import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo_sin_fondo from "../../../../public/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F6A700]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="" className="flex items-center">
                <Image src={logo_sin_fondo.src} alt="Logo" width={80} height={80}></Image>
                <span className="self-center text-2xl font-semibold whitespace-nowrap bd-[#000000]">
                Dejando Huella
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold bd-[#000000] uppercase ">
                Comunidad
                </h2>
                <ul className="bd-[#000000] font-medium">
                  <li className="mb-4">
                    <Link
                      href="https://flowbite.com/"
                      className="hover:underline"
                    >
                      Fotos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Rescatistas
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase bd-[#000000]">
                  Siguenos
                </h2>
                <ul className="bd-[#000000] font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase bd-[#000000]">
                  Sobre nosotros
                </h2>
                <ul className="bd-[#000000] font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Acerca de
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-dark-200 sm:mx-auto bd-[#000000] lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center bd-[#000000]">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Dejando Huella™
              </a>
              .Derechos reservados.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link
                href="#"
                className="text-dark-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                href="#"
                className="bd-[#000000] dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
