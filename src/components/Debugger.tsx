import { Icon } from "@components";

function Debugger() {
  return (
    <div class="h-48 border-t border-t-blue-300">
      <div class="flex border-b border-b-blue-300 bg-gray-800">
        <div class="fira-thin-italic p-1 text-sm">SolidJS Debugger</div>
        <span class="ml-auto mr-1 flex">
          <div class="fira-thin p-1 text-sm">Connected: </div>
          <Icon
            containerClass="pt-1"
            iconifyProps={{ icon: "mdi:rss", height: 18 }}
          ></Icon>
        </span>
      </div>
      <div class="h-full bg-gray-950"></div>
    </div>
  );
}

export { Debugger };
