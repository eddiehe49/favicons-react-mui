import React, { useState } from "react";
import '../App.css';
import logo from "../logo.svg";
import { useEffect } from "react";
import { init } from '@waline/client';
import '@waline/client/dist/waline.css';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function About(params) {
    const [drawerOpen, setDrawerOpen] = useState(false)
    useEffect(() => {
        const locale = {
            placeholder: "Comments will be displayed after review for a healthy network environment."
        }
        const waline = init({
            el: "#waline",
            serverURL: 'https://eddiehe-favicons-waline.vercel.app',
            dark: 'auto',
            lang: 'en',
            locale,
        })
        waline.update()
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* <Button onClick={() => { setDrawerOpen(true) }} variant="contained" style={{ margin: "2% 0 2% 0" }}>What are favicons?</Button> */}
                <Drawer
                    anchor={'bottom'}
                    open={drawerOpen}
                    onClose={() => { setDrawerOpen(false) }}
                >
                    <p style={{ margin: "0 auto", padding: "0 0 2% 0" }}>
                        <br />
                        Check out this <a href="https://eddiehe.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#757de8" }}>
                            site
                        </a> on your desktop browser.
                        <br />
                        Do you see the tiny icon in the left of the tab?
                        <br />
                        That's a favicon!
                    </p>
                </Drawer>
                <p>
                    Powerd by&nbsp;
                    <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        React
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://mui.com/" target="_blank" rel="noopener noreferrer">
                        MUI
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">
                        JSONPlaceholder
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://app.krat.es/" target="_blank" rel="noopener noreferrer">
                        Krates
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                        Vercel
                    </a>
                </p>
                <p>Coded by&nbsp;
                    <a className="App-link" href="https://eddiehe.super.site/" target="_blank" rel="noopener noreferrer">
                        Eddie He
                    </a>
                </p>
            </header>
            <div id="waline" style={{ padding: "5% 20% 0 20%", backgroundColor: "#282c34" }}></div>
        </div >
    )
}

export default About;