"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/utilities/lotus-icon.svg";
import conteudos from "@/public/icons/nav/conteudos.svg";
import galeria from "@/public/icons/nav/galeria.svg";
import perfil from "@/public/icons/nav/Ativo/profile.svg";
import laranja from "@/public/icons/nav/nav-laranja.png";
import config from "@/public/icons/utilities/settings-white.svg";
import edit from "@/public/icons/utilities/edit-pencil-orange.svg";
import verif from "@/public/icons/profile-information/verificado.png";
import logout from "@/public/icons/nav/Ativo/logout.png";
import arrow from "@/public/icons/utilities/arrow-pink.svg";
import book from "@/public/icons/utilities/book-pink.svg";

export default function Home() {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cpf, setCpf] = useState("");
  const [dob, setDob] = useState("");
  const [yearsAsDoula, setYearsAsDoula] = useState("");

  const fetchUserInfo = async (id) => {
    const userData = {
      name: "Vitória Castro",
      specialization: [
        "Consultoria em aleitamento materno",
        "Doula de parto",
        "Doula do luto"
      ],
      profilePicture: null,
    };
    setUserInfo(userData);
  };

  const handleIdSubmit = (e) => {
    e.preventDefault();
    fetchUserInfo(userId);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfilePicture = () => {
    setProfilePicture(selectedImage);
    toggleModal();
  };

  return (
    <div className="font-ABeeZee bg-white font-inter min-h-screen p-8 flex gap-8 overflow-hidden">
      <div className="flex flex-col items-start w-1/5 fixed left-0 pl-8 h-full">
        <div className="inline-flex items-center mb-4">
          <Image src={logo} alt="logo" className="w-24 h-16" />
          <h1 className="text-pink-3 text-lg font-medium ml-2">Lotus</h1>
        </div>

        <button className="w-full text-left text-gray-3">
          <div className="flex items-center p-4 gap-2">
            <Image src={conteudos} alt="Conteúdos" className="w-9 h-11" />
            <h1 className="text-gray-3 font-medium">Conteúdos</h1>
          </div>
        </button>

        <button className="w-full text-left">
          <div className="flex items-center p-4 gap-2">
            <Image src={galeria} alt="Galeria" className="w-9 h-16" />
            <h1 className="text-gray-3 font-medium">Galeria</h1>
          </div>
        </button>

        <button className="w-full text-left">
          <div className="flex items-center p-4 gap-2">
            <Image src={perfil} alt="Perfil" className="w-9 h-16" />
            <h1 className="text-gray-3 font-medium">Perfil</h1>
          </div>
        </button>

        <button className="absolute bottom-8 left-4">
          <div className="flex items-center">
            <Image src={logout} alt="Logout" />
          </div>
        </button>
      </div>

      <div className="bg-gray-1 flex-grow h-screen w-[80%] rounded-3xl ml-[20%] p-8 relative">
        <div className="absolute top-0 left-0 w-full">
          <Image src={laranja} alt="Nav Laranja" className="w-full h-32 lg:h-24" />

          <button>
            <Image
              src={config}
              alt="Configurações"
              className="absolute right-16 top-2 w-9 h-16"
            />
          </button>

          <button onClick={toggleModal}>
            <Image
              src={edit}
              alt="Editar"
              className="absolute right-4 top-2 w-9 h-16 rounded-full"
            />
          </button>
        </div>

        <form onSubmit={handleIdSubmit} className="flex items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Insira o ID do usuário"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border rounded p-2"
            required
          />
          <button type="submit" className="bg-pink-3 text-white rounded p-2">
            Buscar
          </button>
        </form>

        <div className="flex items-center gap-4 relative">
          <div className="relative">
            <div className="bg-white lg:h-72 w-72 opacity-100 rounded-full flex items-center justify-center">
              <div className="absolute top- left-6 z-20 h-60 w-60 lg:h-60 lg:w-60 shadow-lg rounded-full flex items-center justify-center">
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Perfil"
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-gray-400">Foto de Perfil</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <div className="flex gap-5 items-center">
              <h1 className="text-[40px] text-gray-4 font-ABeeZee z-40 font-thin">
                {userInfo ? userInfo.name : "Nome do Usuário"}
              </h1>
              <Image src={verif} alt="verificado doula" className="size-9 content-center" />
            </div>

            <div>
              <h1 className="text-[15px] text-gray-3 font-semibold">Especialização em:</h1>
              <div className="flex gap-4 mt-4 text-gray-4">
                {userInfo && userInfo.specialization ? (
                  userInfo.specialization.map((spec, index) => (
                    <div key={index} className="bg-white shadow-md rounded-full p-4 h-12 flex items-center justify-center">
                      <span>{spec}</span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="bg-white shadow-md rounded-full p-4 h-12 flex items-center justify-center">
                      <span>Especialização 1</span>
                    </div>
                    <div className="bg-white shadow-md rounded-full p-4 h-12 flex items-center justify-center">
                      <span>Especialização 2</span>
                    </div>
                    <div className="bg-white shadow-md rounded-full p-4 h-12 flex items-center justify-center">
                      <span>Especialização 3</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-20">
          <div className="flex-1">
            <h1 className="text-gray-3 text-[23px] font-ABeeZee">Doula a 5 anos</h1>
            <h1 className="text-xl text-gray-4 break-words max-w-xl mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has sido el texto de muestra estándar de la indústria desde os anos 1500.
            </h1>
          </div>

          <div className="flex-1">
            <h1 className="text-gray-3 text-[23px] font-ABeeZee">Conteúdos publicados:</h1>

            <div className="mt-4 space-y-4">
              <div className="flex items-start cursor-pointer border-2 border-gray-300 rounded-lg hover:bg-gray-200 bg-white">
                <div className="bg-pink-3 h-28 w-3 rounded-s"></div>
                <div className="flex-grow text-left pl-2 ">
                  <div className="flex items-center text-[20px] text-pink-3">
                    <Image src={book} alt="Ícone de livro" className="h-5 w-5 mr-1" />
                    <span>Nicho: Amamentação</span>
                  </div>
                  <span className="text-gray-4 text-[25px] pt-2">Desvendando a amamentação</span>
                  <div className="text-[20px] text-gray-3 pt-2">Atualizado: 01/01/2024</div>
                </div>
                <div className="flex items-center justify-center ml-2">
                  <Image src={arrow} alt="Seta rosa" className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 relative">
              <h2 className="text-xl font-semibold mb-4">Editar Informações</h2>
              <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-500">X</button>
              <div className="mb-4">
                <label className="block mb-2">Alterar Foto de Perfil:</label>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative h-32 w-32 border border-gray-300 flex items-center justify-center">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Nova foto de perfil"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400">Preview da Imagem</span>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">CPF:</label>
                  <input
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="Digite seu CPF"
                    className="border rounded p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Data de Nascimento:</label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="border rounded p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Tempo como Doula:</label>
                  <input
                    type="text"
                    value={yearsAsDoula}
                    onChange={(e) => setYearsAsDoula(e.target.value)}
                    placeholder="Anos de experiência"
                    className="border rounded p-2 w-full"
                  />
                </div>
                <button onClick={handleSaveProfilePicture} className="bg-pink-3 text-white rounded p-2">
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
