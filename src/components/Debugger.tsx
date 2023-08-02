import { env, http } from "@services";
import { Icon } from "@components";

export function Debugger() {
  const [helloWorld, reHelloWorld] = http.get<{ payload: string }, string>(
    "https://render-spring-kotlin-demo.onrender.com/test",
  );

  return (
    <div class="border-t border-t-blue-300 text-gray-300">
      <div class="flex border-b border-b-blue-300 bg-gray-800">
        <div class="fira-thin-italic p-1 text-sm">SolidJS Debugger</div>
        <span class="ml-auto mr-1 flex">
          <div class="fira-thin p-1 text-sm">Connected: </div>
          <Icon
            containerClass={
              "pt-1 " +
              (helloWorld.state === "pending"
                ? "text-gray-300"
                : helloWorld.state === "errored"
                ? "text-red-500"
                : "text-green-500")
            }
            iconifyProps={{ icon: "mdi:rss", height: 18 }}
          ></Icon>
        </span>
      </div>
      <div class="flex h-48 flex-col bg-gray-950">
        <div class="flex border-b border-b-gray-700">
          <div class="fira-regular p-1 text-sm text-gray-300">
            Environment: <span class="fira-thin-italic">{env.mode()}</span>
          </div>
        </div>
        <div class="flex flex-grow">
          <div class="flex-grow border-r border-r-gray-700"></div>
          <div class="flex-grow border-r border-r-gray-700"></div>
          <div class="flex-grow border-r border-r-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
