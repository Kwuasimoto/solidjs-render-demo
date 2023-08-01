import { solidLogo } from "@images";

function Footer() {
    return (
        <footer class="flex items-center justify-center">
            <div class="mr-5">Powered By</div>
            <img src={solidLogo} alt="SolidJS Logo" class="h-8"/>
        </footer>
    )
}


export { Footer }