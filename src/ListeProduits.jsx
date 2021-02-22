import './ListeProduits.scss';
import Produit from "./Produit";
import tabProduits from './data/produits.json';
//import tabProduits from './data/liste-dossiers.json';


export default function ListeProduits(props) {

  return (
    <div className="ListeProduits">
      <ul>
        {}
        
        {tabProduits.map(prd => 
         <Produit key={prd.id} titre={prd.titre} modification={prd.dateModif} couleur={prd.couleur} id={prd.id} />
        )}
      </ul>
    </div>
  );
}