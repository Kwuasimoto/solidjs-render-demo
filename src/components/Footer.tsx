import { solidLogo, tailwindLogo } from "@images";

export const Footer = () => {
  return (
    <footer class="mb-2 mr-5 mt-auto flex items-center justify-end text-gray-300">
      <div class="fira-bold-italic mr-3">Powered By</div>
      <img src={solidLogo} alt="SolidJS Logo" class="h-8" />
      <div class="fira-bold mx-3"> & </div>
      <img src={tailwindLogo} alt="Tailwind Logo" class="h-7" />
    </footer>
  );
};
