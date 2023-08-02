function Debugger() {
  return (
    <div class="h-48 border-t border-t-blue-300">
      <div class="flex border-b border-b-blue-300 bg-gray-800">
        <div class="fira-thin-italic p-1 text-sm">Debugger</div>
        <span class="ml-auto mr-1 flex">
          <div>Connected</div>
          <div></div>
        </span>
      </div>

      <div class="h-full bg-gray-950"></div>
    </div>
  );
}

export { Debugger };
