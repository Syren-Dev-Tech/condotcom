import { CRouter, markdownRouter } from "@syren-dev-tech/confects-md/routers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const router = new CRouter(
    {
        noNav: true,
        path: "",
        routes: [
            {
                path: '/',
                markdown: {
                    href: '/pages/index.md'
                }
            },
            {
                path: '/web-dev',
                markdown: {
                    href: '/pages/web-dev.md'
                }
            },
            {
                path: '/minecraft',
                content: {
                    href: '/pages/content/minecraft.json'
                }
            }
        ]
    }
);
router.setElement(() => <App />)

export default function Router() {
    return <BrowserRouter>
        <Routes>
            {markdownRouter(router, Route)}
        </Routes>
    </BrowserRouter>
}