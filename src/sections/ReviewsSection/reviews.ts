type Review = {
  id: number;
  avatar: string;
  name: string;
  place: string;
  date: string;
  content: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    avatar: "M",
    name: "Mariusz",
    place: "Bilsko",
    date: "4 grudnia 2020",
    content:
      "Pełen profesjonalizm i super podejście do klienta. Odpowiada wyczerpująco na każde pytanie. Wymarzony fachowiec.",
  },
  {
    id: 2,
    avatar: "A",
    name: "Andrzej",
    place: "Bochnia",
    date: "22 września 2020",
    content:
      "Profesjonalna robota, dobre doradztwo, szybki czas realizacji. Polecam serdecznie.",
  },
  {
    id: 3,
    avatar: "M",
    name: "Maria",
    place: "Bochnia",
    date: "2 września 2020",
    content:
      "Bardzo szybka wycena i szybki termin. Fachowiec był słowny, bardzo dobrze wykonał zleconą pracę.",
  },
  {
    id: 4,
    avatar: "R",
    name: "Rafał",
    place: "Kraków",
    date: "26 sierpnia 2020",
    content: "Wyjątkowo tania usługa jak na wiele godzin pracy. Polecam!",
  },
];
