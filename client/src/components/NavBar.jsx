import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LogoHorizontal from "../assets/Logos/LogoHorizontal.png";
import EscudoVertical from "../assets/Logos/EscudoVertical.png";
import IconoConstancias from "../assets/Icons/IconoConstancias.png";
import IconoQuejas from "../assets/Icons/IconoQuejas.png";
import IconoX from "../assets/Icons/IconoX.png";
import NavBarOptions from "./NavBarOptions";

function NavBar() {
  const { register } = useForm();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <div className="flex bg-[#6D1610] font-montserrat text-xs text-white w-full h-8 items-center justify-center">
        <p>GOBIERNO DE TEOCELO 2022 - 2025</p>
      </div>
      <div className="grid grid-cols-2 gap-0">
        <div className="flex">
          <img
            src={EscudoVertical}
            alt="Imagen vertical"
            className="ml-5 mr-16 my-5 h-20"
          />
          <img
            src={LogoHorizontal}
            alt="Imagen horizontal"
            className="my-5 h-20"
          />
        </div>
        <div className="flex items-center justify-end mr-5">
          <form method="get" className="mr-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar"
                {...register("search", { required: true })}
                className="w-full text-black pr-10 pl-10 py-2 rounded-3xl border border-black bg-[#efefef] block"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm leading-5">
                <FaSearch size="1.5em" style={{ color: "#848488" }} />
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <FaCircleXmark size="1.5em" style={{ color: "#848488" }} />
              </div>
            </div>
          </form>
          <button
            onClick={handleOpen}
            className="bg-[#6d1610] text-white rounded-3xl font-playfair text-lg py-2 px-10"
          >
            Me gustaría...
          </button>
        </div>
      </div>

      <div className="w-full h-10 flex items-center justify-center bg-[#efeeee] shadow-lg">
        <NavBarOptions
          options={{
            title: "INICIO",
            others: {
              INICIO: "#",
            },
          }}
        />
        <NavBarOptions
          options={{
            title: "TEOCELO",
            others: {
              "Opción 1": "#",
              "Opción 2": "#",
              "Opción 3": "#",
            },
          }}
        />
        <NavBarOptions
          options={{
            title: "GOBIERNO MUNICIPAL",
            others: {
              "Opción 1": "#",
              "Opción 2": "#",
              "Opción 3": "#",
            },
          }}
        />
        <NavBarOptions
          options={{
            title: "DIRECTORIO",
            others: {
              "Opción 1": "#",
              "Opción 2": "#",
              "Opción 3": "#",
            },
          }}
        />
        <NavBarOptions
          options={{
            title: "TRANSPARENCIA",
            others: {
              "Opción 1": "#",
              "Opción 2": "#",
              "Opción 3": "#",
            },
          }}
        />
        <NavBarOptions
          options={{
            title: "TURISMO",
            others: {
              "Opción 1": "#",
              "Opción 2": "#",
              "Opción 3": "#",
            },
          }}
        />
        <NavBarOptions
          options={{
            title: "TRÁMITES Y SERVICIOS",
            others: {
              INICIO: "#",
            },
          }}
        />
      </div>

      <>
        <Dialog
          open={open}
          handler={handleOpen}
          size="lg"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>
            <div className="grid grid-cols-2 rounded-lg bg-[#6D1610] w-full h-16 items-center text-white">
              <div className="justify-self-start ml-5 font-montserrat text-3xl">
                Me gustaría...
              </div>
              <button className="justify-self-end mr-5 mt-2" onClick={handleOpen}>
                <img src={IconoX} alt="Icono de la marca X" className="w-[80%]" />
              </button>
            </div>
          </DialogHeader>
          <DialogBody>
            <div className="flex gap-8">
              <div className="flex-col basis-1/3 text-black">
                <div className="flex items-center gap-3 mb-8">
                  <div className="rounded-full bg-[#6D1610] max-h-[5em] max-w-[5em]">
                    <img
                      src={IconoConstancias}
                      alt="Icono de gotas de agua"
                      className="py-3"
                    />
                  </div>
                  <span className="font-extrabold text-2xl">Solicitar</span>
                </div>
                <Link className="flex items-center gap-2 mb-5">
                  <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-xl">
                    Conexión de agua o drenaje
                  </span>
                </Link>
                <Link className="flex items-center gap-2 mb-5">
                  <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-xl">
                    Instalación de una lámpara
                  </span>
                </Link>
                <Link className="flex items-center gap-2 mb-5">
                  <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-xl">Constancia ganadera</span>
                </Link>
                <Link className="flex items-center gap-2 mb-5">
                  <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-xl">Constancia agrícola</span>
                </Link>
                <Link className="flex items-center gap-2 mb-5">
                  <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-xl">
                    Guía de traslado de bambú
                  </span>
                </Link>
                <Link className="flex items-center gap-2">
                  <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-xl">
                    Préstamo de unidad deportiva
                  </span>
                </Link>
              </div>
              <div className="flex-col basis-1/3 text-black">
                <div className="flex items-center gap-3 mb-8">
                  <div className="rounded-full bg-[#6D1610] max-h-[5em] max-w-[5em]">
                    <img
                      src={IconoQuejas}
                      alt="Icono de gotas de agua"
                      className="py-3"
                    />
                  </div>
                  <span className="font-extrabold text-2xl">Reportar</span>
                </div>
                <Link className="flex items-center gap-2 mb-5">
                  <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-xl">
                    Tubería de agua o drenaje dañada
                  </span>
                </Link>
                <Link className="flex items-center gap-2 mb-5">
                  <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-xl">
                    Luminaria descompuesta
                  </span>
                </Link>
                <Link className="flex items-center gap-2 mb-5">
                  <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-xl">
                    Servicio de limpia pública
                  </span>
                </Link>
                <Link className="flex items-center gap-2 mb-5">
                  <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-xl">
                    Algún servidor público
                  </span>
                </Link>
              </div>
              <div className="flex-col basis-1/4">
                <div className="flex justify-center">
                  <Link to="/login">
                    <button className="bg-[#6d1610] text-white rounded-xl font-montserrat text-3xl py-1 px-5">
                      Iniciar sesión
                    </button>
                  </Link>
                </div>
                <div>
                  <div className="flex items-center">
                    <hr className="flex-1 border-t border-[#494848] border" />
                    <span className="px-4 text-center font-montserrat font-extrabold text-[#494848]">
                      O
                    </span>
                    <hr className="flex-1 border-t border-[#494848] border" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link to="/register">
                    <button className="bg-[#6d1610] text-white rounded-xl font-montserrat text-3xl py-1 px-5">
                      Registrarme
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <div className="absolute">
              <img
                src={LogoHorizontal}
                alt="Logo horizontal"
                className="w-1/4 ml-[75%] mb-16"
              />
            </div>
          </DialogFooter>
        </Dialog>
      </>
    </div>
  );
}

export default NavBar;
