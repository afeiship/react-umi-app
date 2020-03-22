import RuaBootstrap from '@/components/views/rua-bootstrap';
import RuaVirtualRoot from '@/components/views/rua-virtual-root';
import * as umi from 'umi';
import { useEffect } from 'react';

console.log(umi);

// const store = umi.useStore();

// console.log(store);

export function rootContainer(container, args) {
  return (
    <RuaBootstrap className="root-container">
      {container}
      <RuaVirtualRoot />
    </RuaBootstrap>
  );
}

export async function getInitialState() {
  return {
    fei: 'feizheng',
    user: {},
  };
}

export function render(oldRender, args) {
  // useEffect(() => {
  //   const app = umi.getDvaApp();
  //   console.log(app);
  //   return () => {};
  // }, []);

  console.log(umi.getDvaApp());
  // console.log(oldRender);
  return oldRender();
}
