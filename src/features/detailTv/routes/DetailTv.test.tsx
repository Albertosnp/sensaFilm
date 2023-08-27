import { createRoot } from "react-dom/client";
import { useParams } from "react-router-dom";
import { DetailTv } from "./DetailTv";
import { render } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";
import { useGetTv } from "../hooks/useGetTv";
import { useGetSimilarTv } from "../hooks/useGetSimilarTv";

vi.mock("react-router-dom", async () => {
  return {
    ...vi.importMock("react-router-dom"),
    useParams: vi.fn(),
    Link: ({ children, to }: { children: JSX.Element; to: string }) =>
      React.createElement("a", { href: to }, children),
  };
});

vi.mock("../hooks/useGetTv", () => {
  return {
    ...vi.importMock("../hooks/useGetTv"),
    useGetTv: vi.fn(),
  };
});

vi.mock("../hooks/useGetSimilarTv", () => {
  return {
    ...vi.importMock("../hooks/useGetSimilarTv"),
    useGetSimilarTv: vi.fn(),
  };
});

const tvPrograms = [
  {
    adult: false,
    backdrop_path: "/y8Glqm5Ay02jcvHJxBHQvqBG6cZ.jpg",
    genre_ids: [80, 99],
    id: 123787,
    origin_country: ["US"],
    original_language: "en",
    original_name: "Mastermind of Murder",
    overview: "",
    popularity: 7.295,
    poster_path: "/nljXGd8oHmY9ID0RyiQagcHq1ca.jpg",
    first_air_date: "2021-04-18",
    name: "Mastermind of Murder",
    vote_average: 7.8,
    vote_count: 4,
  },
  {
    adult: false,
    backdrop_path: "/2sjy8Tu8PJGFQI4Foz4682qk8Mw.jpg",
    genre_ids: [18, 9648, 80],
    id: 1620,
    origin_country: ["US"],
    original_language: "en",
    original_name: "CSI: Miami",
    overview:
      'CSI: Miami es una serie de televisión estadounidense creada en 2002 sobre el trabajo del Laboratorio de Criminalística de la Policía de Miami Dade. Es el primer spin off de la serie original CSI: Las Vegas (2000), como posteriormente se haría con CSI: Nueva York (2004).\n\nEl Laboratorio del CSI de la Policía de Miami afronta cada investigación desde el análisis forense de la escena del crimen, combinando el uso de métodos científicos con el trabajo policial. Integrado por un equipo altamente calificado dirigido por el Teniente Horatio Caine,(David Caruso) conocido como "H" o "con H de Honesty" como Supervisor del turno de día, tiene entre sus principales componentes a Calleigh Duquesne, una experta en balística, Eric Delko, investigador experto en el análisis de fibras, Ryan Wolfe, Natalia Boa Vista y Walter Simmons. Junto a ellos, también trabaja el detective de homicidios de la Policía, Frank Tripp.\n\nLa serie refleja también la compleja situación de la ciudad de Miami, combinando los casos de investigación policial con los derivados de la presencia de diversas bandas de procedencia extranjera.',
    popularity: 322.734,
    poster_path: "/pNW64pjaHvf6purNaFhq4SHYRfl.jpg",
    first_air_date: "2002-09-23",
    name: "CSI: Miami",
    vote_average: 7.758,
    vote_count: 1453,
  },
  {
    adult: false,
    backdrop_path: "/aVGnHtStuad0MF03nVvMpzni2c7.jpg",
    genre_ids: [80, 18],
    id: 59791,
    origin_country: ["JP"],
    original_language: "ja",
    original_name: "ジョーカー 許されざる捜査官",
    overview: "",
    popularity: 7.043,
    poster_path: "/sbhseFi3zoa3CSuoCYqRmGGpXGu.jpg",
    first_air_date: "2010-07-13",
    name: "ジョーカー 許されざる捜査官",
    vote_average: 7,
    vote_count: 6,
  },
  {
    adult: false,
    backdrop_path: "/cvlLBcQWpO9X21jDHhgPJnE2aVq.jpg",
    genre_ids: [80, 18, 9648],
    id: 1431,
    origin_country: ["US"],
    original_language: "en",
    original_name: "CSI: Crime Scene Investigation",
    overview:
      "CSI: Crime Scene Investigation es una serie de televisión de ficción estadounidense transmitida por primera vez en los Estados Unidos por la cadena CBS. La serie se centra en torno a un grupo de científicos forenses y criminologos que trabajan en la ciudad estadounidense de Las Vegas (Nevada), investigando los crímenes que en ella suceden. La original fórmula de la serie y su éxito suscitó dos secuelas, CSI: Miami (2002-2012) y CSI: Nueva York (2004-2013), en torno a los equipos de científicos forenses de dichas ciudades, pero además influye en varias series posteriores relacionadas con la investigación criminal, como Bones o NCIS entre otras.",
    popularity: 748.768,
    poster_path: "/i5hmoRjHNWady4AtAGICTUXknKH.jpg",
    first_air_date: "2000-10-06",
    name: "CSI: Las Vegas",
    vote_average: 7.664,
    vote_count: 1037,
  },
  {
    adult: false,
    backdrop_path: "/xm830qzwnKjkAg51sXGHJOocr1.jpg",
    genre_ids: [9648, 18, 35],
    id: 1432,
    origin_country: ["US"],
    original_language: "en",
    original_name: "Veronica Mars",
    overview:
      "La serie muestra la vida de Veronica Mars, una estudiante que, tras el misterioso asesinato de su mejor amiga, deberá alternar sus estudios con el trabajo a tiempo parcial como detective privado en la agencia de su padre. Todo ello, sin abandonar la investigación del trágico suceso. La serie se convierte desde el principio en un cóctel de misterio, intriga, afiladísimos guiones, una buena dosis de humor negro y constantes referencias culturales, lo que la ha convertido en una serie de culto y una de las favoritas de público y crítica.",
    popularity: 156.431,
    poster_path: "/vOdJETEueGgUqJR4UvwTdUoJhvO.jpg",
    first_air_date: "2004-09-22",
    name: "Veronica Mars",
    vote_average: 7.82,
    vote_count: 523,
  },
  {
    adult: false,
    backdrop_path: "/zHA6kd8INvqMfGR9vDrn1GATKxs.jpg",
    genre_ids: [35, 18, 9648],
    id: 1447,
    origin_country: ["US"],
    original_language: "en",
    original_name: "Psych",
    overview:
      "Shawn es un joven muy distinto a los demás. Desde pequeño, su padre, detective de profesión, le enseñaba a fijarse en todos los detalles de su alrededor, incluso hasta en los más nimios. Tanto que sus extraordinarios poderes de observación le hacen ser sospechoso de un crimen que no ha cometido. Sin embargo, gracias a su talento, termina convenciendo a la policía de que se trata de poderes psíquicos. De este modo, el joven se hace pasar desde entonces por un falso médium. El joven Shawn sabe aprovechar su inusual habilidad de observar. Y es que, además de trabajar como asesor de la policía, monta un negocio para enriquecerse a partir de su propia farsa. Con la ayuda de su mejor amigo, Gus, el joven protagonista pone en marcha una agencia de investigación llamada Psych donde, de manera picaresca, intentan solucionar los casos más insospechados, dejando a las fuerzas del orden totalmente impresionadas, aunque siempre quedan los escépticos.",
    popularity: 317.16,
    poster_path: "/fDI15gTVbtW5Sbv5QenqecRxWKJ.jpg",
    first_air_date: "2006-07-07",
    name: "Psych",
    vote_average: 7.874,
    vote_count: 665,
  },
  {
    adult: false,
    backdrop_path: "/8k67coQA1KXLg0HmB5PJBBTL6dX.jpg",
    genre_ids: [9648, 80, 18],
    id: 484,
    origin_country: ["US"],
    original_language: "en",
    original_name: "Murder, She Wrote",
    overview:
      "Tras la muerte de su marido, Jessica Fletcher (Angela Lansbury), una profesora de inglés, empieza a escribir novelas de misterio y, además, a resolver numerosos casos de asesinato, gran parte de ellos ocurridos en Cabot Cove, lugar de residencia de la protagonista. Serie inspirada en el personaje de Miss Marple de Agatha Christie.",
    popularity: 408.828,
    poster_path: "/aZ6ONRcxyJytwTnP1YQuMvW7uYJ.jpg",
    first_air_date: "1984-09-30",
    name: "Se ha escrito un crimen",
    vote_average: 7.581,
    vote_count: 304,
  },
];
const tvDetail = {
  adult: false,
  backdrop_path: "/9xxLWtnFxkpJ2h1uthpvCRK6vta.jpg",
  created_by: [
    {
      id: 117443,
      credit_id: "525743f5760ee36aaa0e0ff8",
      name: "Dick Wolf",
      gender: 2,
      profile_path: "/tRMEuYNVFjXYJ7gh1sGJSxq9Vwq.jpg",
    },
  ],
  episode_run_time: [43],
  first_air_date: "1999-09-20",
  genres: [
    {
      id: 80,
      name: "Crimen",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 9648,
      name: "Misterio",
    },
  ],
  homepage: "http://www.nbc.com/law-and-order-special-victims-unit",
  id: 2734,
  in_production: true,
  languages: ["en"],
  last_air_date: "2023-05-18",
  last_episode_to_air: {
    id: 4358255,
    name: "Dolor es una sola enfermedad",
    overview:
      "En la búsqueda de una red criminal de venganza por encargo, Benson y Stabler combinan fuerzas en un caso que ahora se ha extendido por todo el mundo. Fin y Bruno ayudan a una víctima de violación agredida por segunda vez.",
    vote_average: 9,
    vote_count: 2,
    air_date: "2023-05-18",
    episode_number: 22,
    episode_type: "finale",
    production_code: "",
    runtime: null,
    season_number: 24,
    show_id: 2734,
    still_path: "/pTiji50bPcLKhoJnsMIdoifjE1R.jpg",
  },
  name: "Ley y orden: Unidad de Víctimas Especiales",
  next_episode_to_air: null,
  networks: [
    {
      id: 6,
      logo_path: "/cm111bsDVlYaC1foL0itvEI4yLG.png",
      name: "NBC",
      origin_country: "US",
    },
  ],
  number_of_episodes: 538,
  number_of_seasons: 24,
  origin_country: ["US"],
  original_language: "en",
  original_name: "Law & Order: Special Victims Unit",
  overview:
    '‘Ley y Orden: Unidad de Víctimas Especiales’ es una serie de televisión estadounidense grabada en Nueva York donde es también principalmente producida. Con el estilo de la original ‘Ley y Orden’ los episodios son usualmente "sacados de los titulares" o basados libremente en verdaderos asesinatos que han recibido la atención de los medios.',
  popularity: 2309.24,
  poster_path: "/uCM7F376UCIs5y6fMg2UyVGOmfr.jpg",
  production_companies: [
    {
      id: 25545,
      logo_path: "/jH9KNT9C9fYMrGqD4IKLlRL6MYN.png",
      name: "Wolf Entertainment",
      origin_country: "US",
    },
    {
      id: 26727,
      logo_path: "/jeTxdjXhzgKZyLr3l9MllkTn3fy.png",
      name: "Universal Television",
      origin_country: "US",
    },
    {
      id: 56401,
      logo_path: null,
      name: "Studios USA",
      origin_country: "",
    },
    {
      id: 8301,
      logo_path: "/zrcVDabl14MNfPwxL8DC2IyR12t.png",
      name: "Universal Media Studios",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  seasons: [
    {
      air_date: null,
      episode_count: 6,
      id: 8888,
      name: "Especiales",
      overview: "",
      poster_path: null,
      season_number: 0,
      vote_average: 0,
    },
    {
      air_date: "1999-09-20",
      episode_count: 22,
      id: 8878,
      name: "Temporada 1",
      overview: "",
      poster_path: "/qMME7c87wyvvjy79vq1AUItgNX5.jpg",
      season_number: 1,
      vote_average: 7.3,
    },
    {
      air_date: "2000-10-20",
      episode_count: 21,
      id: 8877,
      name: "Temporada 2",
      overview: "",
      poster_path: "/fPzJ7U7YphQdoBiGKI32M2vEpYa.jpg",
      season_number: 2,
      vote_average: 7.7,
    },
    {
      air_date: "2001-09-28",
      episode_count: 23,
      id: 8876,
      name: "Temporada 3",
      overview: "",
      poster_path: "/8n0eCjSspHz5TGrTsQtCrYUSQ8I.jpg",
      season_number: 3,
      vote_average: 7.8,
    },
    {
      air_date: "2002-09-27",
      episode_count: 25,
      id: 8885,
      name: "Temporada 4",
      overview: "",
      poster_path: "/68ADeZIAAXFgqBfuEeccZfDlcpm.jpg",
      season_number: 4,
      vote_average: 7.6,
    },
    {
      air_date: "2003-09-23",
      episode_count: 25,
      id: 8881,
      name: "Temporada 5",
      overview: "",
      poster_path: "/aEiMYckPixeUsddttsijUyFpzYK.jpg",
      season_number: 5,
      vote_average: 7.6,
    },
    {
      air_date: "2004-09-21",
      episode_count: 23,
      id: 8880,
      name: "Temporada 6",
      overview: "",
      poster_path: "/p3iU1fLz9h8O1d6g4KrOzKbU2vq.jpg",
      season_number: 6,
      vote_average: 7.5,
    },
    {
      air_date: "2005-09-20",
      episode_count: 22,
      id: 8884,
      name: "Temporada 7",
      overview: "",
      poster_path: "/oVhlP9JdUKpyMntbufxe3VfajKO.jpg",
      season_number: 7,
      vote_average: 7.5,
    },
    {
      air_date: "2006-09-19",
      episode_count: 22,
      id: 8879,
      name: "Temporada 8",
      overview: "",
      poster_path: "/mvNHgkbvREA6ty5lJpW4Dj0ks7L.jpg",
      season_number: 8,
      vote_average: 7.7,
    },
    {
      air_date: "2007-09-25",
      episode_count: 19,
      id: 8882,
      name: "Temporada 9",
      overview: "",
      poster_path: "/hSJbnNHL2Hlm6HO2JzrT0s4vNVZ.jpg",
      season_number: 9,
      vote_average: 7.6,
    },
    {
      air_date: "2008-09-22",
      episode_count: 22,
      id: 8883,
      name: "Temporada 10",
      overview: "",
      poster_path: "/j2qRsT11WL8sX1ULWWxS7opu8Dj.jpg",
      season_number: 10,
      vote_average: 7.6,
    },
    {
      air_date: "2009-09-23",
      episode_count: 24,
      id: 8886,
      name: "Temporada 11",
      overview: "",
      poster_path: "/bcuIWfuiH7Tq9YGSQQZfZmf8UYJ.jpg",
      season_number: 11,
      vote_average: 7.3,
    },
    {
      air_date: "2010-09-22",
      episode_count: 24,
      id: 8887,
      name: "Temporada 12",
      overview: "",
      poster_path: "/igsSNddE8ROWQ19pl88Frx8hKOa.jpg",
      season_number: 12,
      vote_average: 7.4,
    },
    {
      air_date: "2011-09-21",
      episode_count: 23,
      id: 8889,
      name: "Temporada 13",
      overview: "",
      poster_path: "/noc79PeGMcZw2qCiVbyQV8B6q42.jpg",
      season_number: 13,
      vote_average: 7.6,
    },
    {
      air_date: "2012-09-26",
      episode_count: 24,
      id: 8890,
      name: "Temporada 14",
      overview: "",
      poster_path: "/mkdMIq9YYfKQXVB48otcbSr3m04.jpg",
      season_number: 14,
      vote_average: 8,
    },
    {
      air_date: "2013-09-25",
      episode_count: 24,
      id: 8891,
      name: "Temporada 15",
      overview: "",
      poster_path: "/9unR6QVh6WBiAv0CK1admWtM8Tx.jpg",
      season_number: 15,
      vote_average: 8.2,
    },
    {
      air_date: "2014-09-24",
      episode_count: 23,
      id: 62900,
      name: "Temporada 16",
      overview: "",
      poster_path: "/fxONX6Mav1LUxtEfMVfRnThUoUw.jpg",
      season_number: 16,
      vote_average: 8.1,
    },
    {
      air_date: "2015-09-23",
      episode_count: 23,
      id: 68816,
      name: "Temporada 17",
      overview: "",
      poster_path: "/ncwK9fT1cxV5LIZkRLhScd0ksFO.jpg",
      season_number: 17,
      vote_average: 8.3,
    },
    {
      air_date: "2016-09-21",
      episode_count: 21,
      id: 79484,
      name: "Temporada 18",
      overview: "",
      poster_path: "/4lgHsCnOfb5YZWZLxmfjxOIg7D3.jpg",
      season_number: 18,
      vote_average: 7.9,
    },
    {
      air_date: "2017-09-27",
      episode_count: 24,
      id: 91257,
      name: "Temporada 19",
      overview: "",
      poster_path: "/8uPtbd8V6Fuy2o8dizHx7nL97M4.jpg",
      season_number: 19,
      vote_average: 8,
    },
    {
      air_date: "2018-09-27",
      episode_count: 24,
      id: 105509,
      name: "Temporada 20",
      overview: "",
      poster_path: "/6pNtye37Rx93W35YHHcFol0ptBL.jpg",
      season_number: 20,
      vote_average: 7.7,
    },
    {
      air_date: "2019-09-26",
      episode_count: 20,
      id: 129334,
      name: "Temporada 21",
      overview: "",
      poster_path: "/7k7T2rL0WoSJiSFFI6zUsq5a0GS.jpg",
      season_number: 21,
      vote_average: 7.7,
    },
    {
      air_date: "2020-11-12",
      episode_count: 16,
      id: 160634,
      name: "Temporada 22",
      overview: "",
      poster_path: "/jDCgWVlejIo8sQYxw3Yf1cVQUIL.jpg",
      season_number: 22,
      vote_average: 8.1,
    },
    {
      air_date: "2021-09-23",
      episode_count: 22,
      id: 202465,
      name: "Temporada 23",
      overview: "",
      poster_path: "/36tKvA2NJRd2XUhM88YeZ8ZeeiA.jpg",
      season_number: 23,
      vote_average: 8.1,
    },
    {
      air_date: "2022-09-22",
      episode_count: 22,
      id: 299109,
      name: "Temporada 24",
      overview: "",
      poster_path: "/uCM7F376UCIs5y6fMg2UyVGOmfr.jpg",
      season_number: 24,
      vote_average: 8.3,
    },
  ],
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Returning Series",
  tagline: "",
  type: "Scripted",
  vote_average: 7.968,
  vote_count: 3352,
};

describe("DetailTv", () => {
  const defaultProps = {};
  const getComponent = (props = defaultProps) => <DetailTv {...props} />;
  const setup = (props = defaultProps) => render(getComponent(props));

  beforeEach(() => {
    // @ts-ignore
    useParams.mockReturnValue({ idTv: "2734" });
    // @ts-ignore
    useGetTv.mockReturnValue({ tvDetail });
    // @ts-ignore
    useGetSimilarTv.mockReturnValue({ tvPrograms });
  });

  it("Should render without crashing", () => {
    const div = document.createElement("div");
    createRoot(div).render(getComponent());
    createRoot(div).unmount();
  });

  it("Should match snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
