import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props) {
  return(
    <li className="Produit">
      <img src={"images-produits/" + props.id + ".png"} alt=""/>
      <div className="info">
        <p className="cours">{props.titre}</p>
        <p className="modification">Modifié le :{props.modification}</p>
      </div>
    </li>
  );
}