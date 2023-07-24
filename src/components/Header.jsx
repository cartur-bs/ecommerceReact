import "./Header.css";

import { useContext } from "react";
import { counterContext } from "../contexts/counterContext"

import imgLogo from "/logo.svg";
import imgMenu from "/icon-menu.svg";
import imgCarrinho from "/icon-cart.svg";
import imgAvatar from "/image-avatar.png";

const Header = () => {
  
  const { counter } = useContext(counterContext);

  return (
    <div className="headerDiv">
      <div className="menuDiv">
        <img src={imgMenu} alt="ícone para abrir o menu" />
        <img src={imgLogo} alt="logo da loja Sneakers" />
      </div>

      <p> {chosen} </p>

      <div className="acessoAoPerfilDiv">
        <img src={imgCarrinho} alt="ícone para abrir o carrinho de compras" />
        <span></span>
        <img
          src={imgAvatar}
          alt="ícone de acesso ao seu perfil"
          className="avatarImg"
        />
      </div>
    </div>
  );
};

export default Header;
