import RuaBootstrap from '@/components/views/rua-bootstrap';
import RuaVirtualRoot from '@/components/views/rua-virtual-root';

export function rootContainer(container, args) {
  return (
    <RuaBootstrap className="root-container">
      {container}
      <RuaVirtualRoot />
    </RuaBootstrap>
  );
}