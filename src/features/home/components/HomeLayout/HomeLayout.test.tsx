import { render, screen } from "@testing-library/react";
import { HomeLayout } from "./HomeLayout";
import { createRoot } from "react-dom/client";
import { vi } from "vitest";
import { useGetPopularTvPrograms } from "../../hooks/useGetPopularTvPrograms";
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies";
import React from "react";

vi.mock("../../hooks/useGetPopularMovies", () => {
  return {
    ...vi.importMock("../../hooks/useGetPopularMovies"),
    useGetPopularMovies: vi.fn(),
  };
});

vi.mock("../../hooks/useGetPopularTvPrograms", () => {
  return {
    ...vi.importMock("../../hooks/useGetPopularTvPrograms"),
    useGetPopularTvPrograms: vi.fn(),
  };
});

vi.mock("react-router-dom", async () => {
  return {
    ...vi.importMock("react-router-dom"),
    Link: ({ children, to }: { children: JSX.Element; to: string }) =>
      React.createElement("a", { href: to }, children),
  };
});

const popularTvPrograms = [
  {
    backdrop_path: "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
    first_air_date: "1952-12-26",
    genre_ids: [10763],
    id: 94722,
    name: "Tagesschau",
    origin_country: ["DE"],
    original_language: "de",
    original_name: "Tagesschau",
    overview: "",
    popularity: 4082.266,
    poster_path: "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
    vote_average: 7.5,
    vote_count: 130,
  },
  {
    backdrop_path: "/t2rAdgjSh0WYbXzdOB5zTDqzdCI.jpg",
    first_air_date: "2022-11-02",
    genre_ids: [18],
    id: 213713,
    name: "Faltu",
    origin_country: ["IN"],
    original_language: "hi",
    original_name: "Faltu",
    overview: "",
    popularity: 3157.698,
    poster_path: "/lgyFuoXs7GvKJN0mNm7z7OMOFuZ.jpg",
    vote_average: 7,
    vote_count: 134,
  },
];
const popularMovies = [
  {
    adult: false,
    backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    genre_ids: [16, 28, 12],
    id: 569094,
    original_language: "en",
    original_title: "Spider-Man: Across the Spider-Verse",
    overview:
      "Miles Morales regresa para una aventura épica que transportará al amigable vecino de Brooklyn Spider-Man a través del Multiverso para unir fuerzas con Gwen Stacy y un nuevo equipo de Spider-People, y enfrentarse así a un villano mucho más poderoso que cualquier cosa que hayan conocido antes.",
    popularity: 2044.25,
    poster_path: "/37WcNMgNOMxdhT87MFl7tq7FM1.jpg",
    release_date: "2023-05-31",
    title: "Spider-Man: Cruzando el Multiverso",
    video: false,
    vote_average: 8.4,
    vote_count: 3775,
  },
  {
    adult: false,
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
    genre_ids: [35, 12, 14],
    id: 346698,
    original_language: "en",
    original_title: "Barbie",
    overview:
      "Barbie lleva una vida ideal en Barbielandia, allí todo es perfecto, con chupifiestas llenas de música y color, y todos los días son el mejor día. Claro que Barbie se hace algunas preguntas, cuestiones bastante incómodas que no encajan con el mundo idílico en el que ella y las demás Barbies viven. Cuando Barbie se dé cuenta de que es capaz de apoyar los talones en el suelo, y tener los pies planos, decidirá calzarse unos zapatos sin tacones y viajar hasta el mundo real.",
    popularity: 1659.364,
    poster_path: "/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    video: false,
    vote_average: 7.4,
    vote_count: 3404,
  },
  {
    adult: false,
    backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    genre_ids: [28, 12, 878],
    id: 667538,
    original_language: "en",
    original_title: "Transformers: Rise of the Beasts",
    overview:
      "Cuando surge una nueva amenaza capaz de destruir todo el planeta, Optimus Prime y los Autobots deben unirse a una poderosa facción conocida como los Maximals. Con el destino de la humanidad en juego, los humanos Noah y Elena harán lo que sea necesario para ayudar a los Transformers mientras se involucran en la batalla final para salvar la Tierra.",
    popularity: 1646.07,
    poster_path: "/8HBYMQkF6cFpupgRDhsrrKskXOE.jpg",
    release_date: "2023-06-06",
    title: "Transformers: El despertar de las bestias",
    video: false,
    vote_average: 7.5,
    vote_count: 2947,
  },
];

describe("HomeLayout", () => {
  const defaultProps = {};
  const getComponent = (props = defaultProps) => <HomeLayout {...props} />;
  const setup = (props = defaultProps) => render(getComponent(props));

  beforeEach(() => {
    // @ts-ignore
    useGetPopularMovies.mockReturnValue({ popularMovies });
    // @ts-ignore
    useGetPopularTvPrograms.mockReturnValue({ popularTvPrograms });
  });

  it("Should render without crashing", () => {
    const div = document.createElement("div");
    createRoot(div).render(getComponent());
    createRoot(div).unmount();
  });

  it("Should match snapshot with data", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it("Should change data when click input switch", () => {
    setup();
    expect(screen.queryByText("Tagesschau")).not.toBeInTheDocument();
    screen.getByRole("checkbox").click();
    expect(screen.queryByText("Tagesschau")).toBeInTheDocument();
  });

  it("Should render skeleton without data", () => {
    // @ts-ignore
    useGetPopularMovies.mockReturnValue({});
    // @ts-ignore
    useGetPopularTvPrograms.mockReturnValue({});
    setup();
    screen.getByTestId("skeleton");
  });
});
