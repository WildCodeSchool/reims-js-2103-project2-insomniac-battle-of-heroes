/* eslint-disable max-len */
import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import './Home.css';

function Home() {
  return (
    <>
      <div className="Home">
        <div className="homeLogoContent">
          <Logo />
        </div>
        <div className="homeNavBar">
          <NavBar />
        </div>
        <div className="rules">
          <p>
            <p className="pBold">Règles du jeu Insomniac : Battle of Heroes</p>
            <br />
            <p className="pBold">Devenez le maître des super-héros !</p>
            <br />
            Ces règles vous expliquent tout ce que vous devez savoir pour jouer au jeu de cartes Insomniac : Battle of Heroes.
            <br />
            <br />
            Dans Insomniac : Battle of Heroes, vos super-héros affrontent les super-héros de votre adversaire. Le premier joueur dont les points de vie arrivent à 0 perd la partie.
            <br />
            <br />
            <p className="pBold">Les zones du jeu :</p>
            La main (hand) :
            Les cartes que vous piochez vont dans votre main. Les joueurs ne peuvent pas regarder la main de leur adversaire.
            <br />
            La zone de combat (combat zone) :
            La première ligne de jeu est appelée la zone de combat. C’est à cet endroit que les super-héros s’affrontent. Chaque joueur doit placer un super-héros sur la zone de combat : le super-héros actif. Un joueur ne peut avoir qu’un seul super-héros actif à la fois.
            <br />
            <br />
            <p className="pBold">Comment l’affrontement des super-héros actifs se passe-t-il ?</p>
            Chaque joueur dispose de 300 points de vie au commencement de la partie. Les points de vie sont calculés et déduits à chaque fois qu’un joueur perd une carte.
            <br />
            Le combat prend en compte les statistiques suivantes de chaque carte des super-héros actifs : la force (strength), la puissance (power) et la résistance (durability).
            <br />
            Les dommages infligés à une carte sont directement égaux à la force de la carte qui l’attaque. Les dommages infligés sont soustraits à la résistance de la carte qui les subit.
            <br />
            Lorsque la résistance d’une carte arrive à 0, le super-héros est battu, la carte est perdue.
            Quand un joueur perd une carte, il perd des PV équivalents à la statistique puissance de la carte perdue.
            <br />
            Le premier joueur dont les points de vie (PV) arrivent à 0 perd la partie.
            <br />
            <br />
            <p className="pBold">Préparation de la partie :</p>
            Chaque joueur tire 5 cartes au hasard dans la pioche (draw). Ces 5 cartes constituent sa main (hand) de départ.
            <br />
            <br />
            <p className="pBold">Les étapes d’un tour :</p>
            A chaque tour, le joueur peut soit :
            Poser une carte sur la zone de combat (si il n’y en a pas).
            Piocher une carte (si sa main est inférieure à 5) ou attaquer / utiliser une action spéciale.
            Le joueur qui démarre ne peut pas utiliser d’attaque ou d’action spéciale durant le 1er tour de jeu.
            Votre tour est terminé. C’est au tour de l’adversaire. Son tour comporte les mêmes étapes que le vôtre.
            <br />
            <br />
            <p className="pBold">Les différentes actions :</p>
            Attack : Une attaque basique, la carte inflige un montant de dégats égal à sa strength.
            <br />
            Power strike : Tentez une attaque puissante pour effectuer des dégats allant jusque 3 fois la strength de votre carte. Peut également infliger des dégats normaux ou échouer.
            <br />
            Sacrifice : Sacrifiez votre carte pour remplir votre main. Vous pourrez rejouer immédiatement mais vous subissez la même pénalité que si votre carte a été détruite normalement.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
