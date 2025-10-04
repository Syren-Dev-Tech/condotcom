import { CRouter, markdownRouter } from "@syren-dev-tech/confects-md/routers";
import { HashRouter, Route, Routes } from "react-router-dom";
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

const basename = import.meta.env.PUBLIC_URL || '/';

export default function Router() {
    return <HashRouter basename={basename}>
        <Routes>
            {markdownRouter(router, Route)}
        </Routes>
    </HashRouter>
}