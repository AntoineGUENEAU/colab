import React, {ReactElement} from "react";

export default function Footer(): ReactElement{
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            2022 / Antoine GUENEAU
                        </div>
                        <div className="col-md-6">
                            <div className="text-md-right footer-links d-none d-sm-block">
                                <a href="https://www.linkedin.com/in/antoinegueneau">Linkedin</a>
                                <a href="https://github.com/AntoineGUENEAU">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
