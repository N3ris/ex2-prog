import '../Produit.scss';


export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier">

      <div className="couverture">
        
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié :{dateModif}</p>
      </div>
    </article>
  );
}