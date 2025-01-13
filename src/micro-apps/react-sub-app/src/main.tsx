import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client';
// import App from './App.tsx';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import type { QiankunProps } from 'vite-plugin-qiankun/dist/helper';

let root: ReactDOM.Root | null = null
const render = (container?: HTMLElement | undefined) => {
    // @ts-ignore
  root = createRoot(container ? container.querySelector('#root') : document.querySelector('#root'));
//   root.render();
};

const initQianKun = () => {
    renderWithQiankun({
        mount(props: QiankunProps) {
            const {container} = props;
            render(container);
        },
        bootstrap() {},
        unmount() {
          root!.unmount();
        },
        update() {}
    });
};

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    initQianKun();
} else {
    render();
}
