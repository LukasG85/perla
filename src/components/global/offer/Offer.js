import React, { Component } from 'react'
import Card from './OfferCard'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
// import Img from 'gatsby-image'

const OFFER_ITEMS = graphql`
  {
    items: allContentfulOffer {
      edges {
        node {
          title
          price
          id
          text
          img {
            fixed(width: 220) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default class Offer extends Component {
  state = {
    offer: [
      {
        id: 1,
        title: 'strzyżenie damskie',
        price: '20zł',
        info: `Wykreujemy twój wymarzony image przy użyciu najmodniejszych technik strzyżenia i stylizacji. Pomożemy Ci w doborze
                odpowiedniej fryzury uwzględniając twój rodzaj włosów oraz kształt twarzy.`,
        img: 'offerImages/Woman.jpg',
      },
      {
        id: 2,
        title: 'strzyżenie dziecięce',
        price: '10zł',
        info: `Przyjazna atmosfera i otwartość naszego salonu sprawia, że dzieci chętnie przychodzą do nas. U nas dzieci
                nie boją się strzyżenia i&nbsp;radosne opuszczają fotel fryzjerski, chętne do następnego spotkania.`,
        img: './offerImages/Kids.jpeg',
      },
      {
        id: 3,
        title: 'strzyżenie męskie',
        price: '15zł',
        info: `Obojętne czy zamierzasz iść z&nbsp;duchem czasu podążając za najmodniejszymi trendami, czy też po prostu wybierasz
        eleganckie strzyżenie klasyczne, nasz salon zadba o to abyś był w pełni usatysfakcjonowany.`,
        img: './offerImages/Man.jpeg',
      },
      {
        id: 4,
        title: 'Fryzury okolicznościowe',
        price: '30zł',
        info: `Oferujemy szeroką gamę upięć i fryzur wieczorowych dopasowanych do różnego rodzaju okazji. Opuszczając nasz salon
        poczujesz się jak gwiazda!`,
        img: './offerImages/offer/Okolicznosciowe.jpeg',
      },
      {
        id: 5,
        title: 'Fryzury ślubne',
        price: '80zł',
        info: `Wykonujemy fryzury ślubne, które zdecydowanie oddadzą pełnię wdzięku Panny Młodej. Twój ślub to jeden z najważniejszych
        dni w twoim życiu. Panna młoda musi mieć pewność, że oczaruje gości weselnych.`,
        img: './offerImages/Wedding.jpeg',
      },
      {
        id: 6,
        title: 'Farbowanie włosów',
        price: '50zł',
        info: `Metody: klasyczna koloryzacja z&nbsp;refleksami pasemka (balayage), koloryzacja flash ombre/sombre, dekoloryzacja
        flamboyage, koloryzacja panelowa.`,
        img: './offerImages/Kolorowanie.jpg',
      },
      {
        id: 7,
        title: 'Keratynowe prostowanie',
        price: '200zł',
        info: `Już po jednym zabiegu ENCANTO DO BRASIL widoczny będzie niesamowity efekt prostych, odżywionych i pełnych połysku
        i elastyczności włosów. (Zapraszamy na konsultację i wycenę zabiegu).`,
        img: './offerImages/pielegnica.jpeg',
      },
      {
        id: 8,
        title: 'Modelowanie',
        price: '25zł',
        info: `Na bieżąco śledzimy i szkolimy się w najnowszych trendach modelowania fryzur. Poprzez indywidualne podejście
        do każdego klienta jesteśmy w stanie sprostać każdym wyzwaniom i propozycjom.`,
        img: './offerImages/Modeling.jpeg',
      },
      {
        id: 9,
        title: 'Rekonstrukcja włosów',
        price: '40zł',
        info: `Promienie podczerwieni powodują lepsze wnikanie składników odżywczych znajdujących się w stosowanych ampułkach,
        a także regenerują zniszczone tkanki włosów i stymulują cyrkulację krwi w skórze głowy.`,
        img: './offerImages/Prostowanie.jpeg',
      },
      {
        id: 10,
        title: 'Sauna',
        price: '40zł',
        info: `Sauna na włosy sprawia, że odżywcze składniki wnikają dobrze we włosy. Głębokie nawilżenie szczególnie dobrze robi
        włosom zmęczonym słońcem i farbowanym Włosy są lśniące łatwiej je rozczesać.`,
        img: './offerImages/sauna.jpeg',
      },
      {
        id: 11,
        title: 'Styling',
        price: '50zł',
        info: `Pianka zapewnia włosom naturalny, miękki skręt od 4 do 6 tygodni w zależności od rodzaju włosów. Ondulacja
        Parametr T artego jest prosta i przyjemna, pozostawia krótkotrwałą zmianę wizerunku.`,
        img: './offerImages/Styling.jpeg',
      },
      {
        id: 12,
        title: 'Trwała ondulacja',
        price: '50zł',
        info: `Trwała ondulacja wraca! Styliści ogłosili wielki powrót trwałej ondulacji. Jeśli marzysz burzy loków, możesz
        się na nią zdecydować. Najpierw sprawdź jednak, czy "loki na stałe" to zabieg dla Ciebie.`,
        img: './offerImages/Ondulacja.jpg',
      },
    ],
  }
  render() {
    return (
      <OfferWrapper>
        <StaticQuery
          query={OFFER_ITEMS}
          render={data => {
            const offers = data.items.edges
            return offers.map(item => {
              return <Card key={item.node.id} offer={item.node} />
            })
          }}
        />
      </OfferWrapper>
    )
  }
}

const OfferWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  /* width: 220px; */
  /* margin: 2rem; */
  /* display: grid;
  grid-template-columns: 220px;
  grid-gap: 2rem; */
  justify-content: center;
  flex-wrap: wrap;
  /* @media (min-width: 476px) {
    width: 90%;
    grid-template-columns: repeat(2, 220px);
  }

  @media (min-width: 776px) {
    grid-template-columns: repeat(3, 220px);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 220px);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 220px);
  }

  @media (min-width: 1480px) {
    grid-template-columns: repeat(5, 220px);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(6, 220px);
  } */
`
