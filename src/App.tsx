import './app.scss';
import './main.scss';
import { Heading } from "@syren-dev-tech/confects/decorations";
import { Outlet } from "react-router-dom";
import { Page, PageBody, PageFooter, PageHeader } from "@syren-dev-tech/confects/containers";
import { RouterNav } from "@syren-dev-tech/confects-md/routers";
import { themes } from "@syren-dev-tech/confetti/themes";
import { useEffect } from "react";

export default function App() {

    useEffect(() => { themes.init('light', 'tea', new Set('tea')) })

    return <Page className={themes.getStyles({ background: { style: 'main' } })}>
        <PageHeader>
            <Heading className={themes.getStyles({ background: { style: 'primary' } })}>
                Chris' Coding Crypt
            </Heading>

            <RouterNav />
        </PageHeader>

        <PageBody>
            <Outlet />
        </PageBody>

        <PageFooter>
            Made by Chris :)
        </PageFooter>
    </Page>
}