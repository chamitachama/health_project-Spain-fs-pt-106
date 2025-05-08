import React from "react";


function Corazon() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <main className="bg-white rounded-5 w-100" style={{ maxWidth: "100%", height: "100%", padding: "24px" }}>
                    {/* Navigation */}
                    <nav className="d-flex gap-2 flex-wrap align-items-center mb-4">
                        <button className="btn btn-primary fw-semibold px-3 py-2">Blood pressure</button>
                        <button className="btn btn-light text-dark px-3 py-2">Saturation</button>
                        <button className="btn btn-light text-dark px-3 py-2">Temperature</button>
                        <button
                            className="btn btn-danger ms-auto rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: 40, height: 40 }}
                        >
                            <i className="fas fa-exclamation-triangle text-white"></i>
                        </button>
                        <button
                            className="btn btn-light rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: 40, height: 40 }}
                        >
                            <i className="fas fa-cog text-dark"></i>
                        </button>
                    </nav>

                    {/* Heart */}
                    <div className="d-flex justify-content-center mb-4">
                        <div
                            className="rounded-circle border border-warning border-4 d-flex align-items-center justify-content-center"
                            style={{ width: 128, height: 128 }}
                        >
                            <img
                                src="https://dvl2h13awlxkt.cloudfront.net/assets/general-images/Knowledge/_800x800_crop_center-center_82_none/heart-anatomy.png?mtime=1675729924"
                                alt="Heart illustration"
                                width="85"
                                height="85"
                            />
                        </div>
                    </div>

                    {/* Pressure Text */}
                    <div className="text-center mb-4">
                        <p className="fw-semibold text-dark mb-1">Blood pressure</p>
                        <h1 className="fw-bold display-4 mb-1">120/60</h1>
                        <p className="fw-semibold text-secondary">
                            <span role="img" aria-label="star">
                                ⭐
                            </span>{" "}
                            It’s a great result Emily!
                        </p>
                    </div>

                    {/* Min/Max Section */}
                    <div className="d-flex gap-3 flex-wrap mb-4">
                        <div className="border rounded-4 d-flex flex-grow-1 min-w-50">
                            <div className="border-end p-3 text-center flex-fill">
                                <p className="fw-semibold text-secondary">
                                    <span role="img" aria-label="heart">
                                        ❤️
                                    </span>{" "}
                                    Minimum
                                </p>
                                <h4 className="fw-bold">90/30</h4>
                            </div>
                            <div className="p-3 text-center flex-fill">
                                <p className="fw-semibold text-secondary">
                                    <span role="img" aria-label="tools">
                                        🧰
                                    </span>{" "}
                                    Maximum
                                </p>
                                <h4 className="fw-bold">170/90</h4>
                            </div>
                        </div>
                        <button
                            className="btn btn-primary rounded-4 d-flex flex-column justify-content-center align-items-center"
                            style={{ width: 96, height: 96 }}
                        >
                            <i className="fas fa-arrow-up-right text-white fs-5"></i>
                            <svg fill="none" height="12" viewBox="0 0 32 12" width="32">
                                <path
                                    d="M0 6C4 6 6 0 10 0C14 0 16 12 20 12C24 12 26 6 32 6"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* History */}
                    <section className="bg-primary text-white rounded-4 p-4 position-relative overflow-hidden">
                        <p className="fw-semibold small mb-3">Treatment History</p>
                        <div className="d-flex gap-3 align-items-center justify-content-center mb-4">
                            <div className="bg-opacity-75 bg-secondary px-3 py-2 rounded-pill text-white d-flex flex-column align-items-center">
                                <span className="fw-bold">120/60</span>
                                <small className="text-warning">Blood Pressure</small>
                            </div>
                            <div
                                className="bg-white rounded-circle shadow d-flex justify-content-center align-items-center"
                                style={{ width: 40, height: 40 }}
                            >
                                <span role="img" aria-label="thumbs-up" className="fs-4">
                                    👍
                                </span>
                            </div>
                        </div>

                        <svg className="w-100" height="112" viewBox="0 0 360 112" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 100C40 80 80 40 120 60C160 80 200 40 240 60C280 80 320 40 360 60"
                                stroke="#F5E88B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M0 90C40 70 80 30 120 50C160 70 200 30 240 50C280 70 320 30 360 50"
                                stroke="#D75A5A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                fill="none"
                            />
                            <circle cx="120" cy="60" r="3" fill="#F5E88B" />
                            <line x1="120" x2="120" y1="0" y2="112" stroke="#F5E88B" strokeDasharray="2 2" />
                        </svg>

                        <button className="btn btn-secondary rounded-circle position-absolute top-0 end-0 m-3 p-2">
                            <i className="fas fa-chevron-up"></i>
                        </button>
                    </section>
                </main>
            </div>
        </>
        
    );
}
export default Corazon;
