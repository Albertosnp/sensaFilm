import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import { Header } from "./Header";

describe('Header', () => { 
    const defaultProps = {};
    const getComponent = (props = defaultProps) => <Header {...props} />;

    const setup = (props = defaultProps) => render(getComponent(props));
  
    it('Should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(getComponent(), div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
      const { container } = setup();
      expect(container).toMatchSnapshot();
    });
 })