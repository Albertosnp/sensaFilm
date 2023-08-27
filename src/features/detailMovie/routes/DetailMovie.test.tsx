import { createRoot } from "react-dom/client";
import { useParams } from "react-router-dom";
import { DetailMovie } from "./DetailMovie";
import { render } from "@testing-library/react";
import { vi } from "vitest";
import { useGetMovie } from "../hooks/useGetMovie";
import { useGetSimilarMovies } from "../hooks/useGetSimilarMovies";
import React from "react";

vi.mock("react-router-dom", async () => {
  return {
    ...vi.importMock("react-router-dom"),
    useParams: vi.fn(),
    Link: ({ children, to }: { children: JSX.Element; to: string }) =>
      React.createElement("a", { href: to }, children),
  };
});

vi.mock("../hooks/useGetMovie", () => {
  return {
    ...vi.importMock("../hooks/useGetMovie"),
    useGetMovie: vi.fn(),
  };
});

vi.mock("../hooks/useGetSimilarMovies", () => {
  return {
    ...vi.importMock("../hooks/useGetSimilarMovies"),
    useGetSimilarMovies: vi.fn(),
  };
});

const movies = [
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [99],
    id: 1158004,
    original_language: "en",
    original_title: "Careless Reef: Part 2: Abu Kiffan",
    overview: "",
    popularity: 0.6,
    poster_path: null,
    release_date: "2005-07-01",
    title: "Careless Reef: Part 2: Abu Kiffan",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [16, 10402],
    id: 1148993,
    original_language: "en",
    original_title: "Bug Fixed",
    overview: "",
    popularity: 0.6,
    poster_path: "/xzQS1AeZAuhJZdQa5bko0GDnAsx.jpg",
    release_date: "1994-01-12",
    title: "Bug Fixed",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: "/qGwEyTNBoGQ0e5XBYNUdAPS292T.jpg",
    genre_ids: [9648, 53, 18],
    id: 1146585,
    original_language: "ar",
    original_title: "منتصف الليل",
    overview: "",
    popularity: 1.113,
    poster_path: "/qzIi2wjm3mMWm4GNJzolF9E3zuR.jpg",
    release_date: "2023-07-05",
    title: "منتصف الليل",
    video: false,
    vote_average: 10,
    vote_count: 1,
  },
];
const movie = {
  adult: false,
  backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
  belongs_to_collection: null,
  budget: 200000000,
  genres: [
    {
      id: 16,
      name: "Animación",
    },
    {
      id: 35,
      name: "Comedia",
    },
    {
      id: 10751,
      name: "Familia",
    },
    {
      id: 14,
      name: "Fantasía",
    },
    {
      id: 10749,
      name: "Romance",
    },
  ],
  homepage: "https://www.disney.es/peliculas/elemental",
  id: 976573,
  imdb_id: "tt15789038",
  original_language: "en",
  original_title: "Elemental",
  overview:
    "En una ciudad donde los residentes del fuego, el agua, la tierra y el aire viven juntos, una joven apasionada y un chico que se deja llevar por la corriente descubrirán algo elemental: cuánto tienen en común.",
  popularity: 3167.104,
  poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
  production_companies: [
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US",
    },
    {
      id: 3,
      logo_path: "/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png",
      name: "Pixar",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2023-06-14",
  revenue: 458822015,
  runtime: 102,
  spoken_languages: [
    {
      english_name: "Spanish",
      iso_639_1: "es",
      name: "Español",
    },
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Los opuestos se atraen.",
  title: "Elemental",
  video: false,
  vote_average: 7.787,
  vote_count: 1474,
};

describe("DetailMovie", () => {
  const defaultProps = {};
  const getComponent = (props = defaultProps) => <DetailMovie {...props} />;
  const setup = (props = defaultProps) => render(getComponent(props));

  beforeEach(() => {
    // @ts-ignore
    useParams.mockReturnValue({ idMovie: "976573" });
    // @ts-ignore
    useGetMovie.mockReturnValue({ movie });
    // @ts-ignore
    useGetSimilarMovies.mockReturnValue({ movies });
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
