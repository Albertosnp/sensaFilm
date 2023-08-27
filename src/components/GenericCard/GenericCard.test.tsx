import React from 'react';
import { createRoot } from 'react-dom/client'
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import GenericCard from './GenericCard';

vi.mock('react-router-dom', async () => {
  return {
    ...vi.importMock('react-router-dom'),
    useHistory: vi.fn(),
    useParams: vi.fn(),
    useLocation: () => ({
      search: '',
      pathname: '/',
    }),
    matchPath: vi.fn(),
    withRouter: vi.fn(),
    useRouteMatch: vi.fn(),
    Link: ({ children, to }: { children: JSX.Element; to: string }) =>
      React.createElement('a', { href: to }, children),
    Router: () => vi.fn(),
    HashRouter: () => vi.fn(),
    Switch: () => vi.fn(),
  };
});

describe('GenericCard', () => { 
  const defaultProps = {
    image: 'https://image.tmdb.org/t/p/w500',
    title: 'title',
    vote_average: 99,
    path: 'path',
    id: 1,
  };
  const getComponent = (props = defaultProps) => <GenericCard {...props} />;
  const setup = (props = defaultProps) => render(getComponent(props));

  it('Should render without crashing', () => {
    const div = document.createElement('div');
    createRoot(div).render(getComponent());
    createRoot(div).unmount();
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
 })