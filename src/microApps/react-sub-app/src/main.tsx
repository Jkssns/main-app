import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client';
import { App } from './App.tsx';
import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper';

let root: ReactDOM.Root | null = null
const render = (container) => {
    console.log('container::: ', container);
  root = createRoot(container ? container.querySelector('#root')! : document.querySelector('#root'));
  root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
};

const initQianKun = () => {
    renderWithQiankun({
        mount(props: QiankunProps) {
            const {container} = props;
            render(container);
        },
        bootstrap() {},
        unmount() {
          root.unmount();
        },
        update() {}
    });
};

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();
