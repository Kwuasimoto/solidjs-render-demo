import {solidLogo, tailwindLogo} from "@images";

function Footer() {
    return (
        <footer class="flex mt-auto items-center justify-end mb-2 mr-5">
            <div class="mr-3 fira-bold-italic">Powered By</div>
            <img src={solidLogo} alt="SolidJS Logo" class="h-8"/>
            <div class="fira-bold mx-3"> & </div>
            <img src={tailwindLogo} alt="Tailwind Logo" class="h-7"/>
        </footer>
    )
}


export { Footer }