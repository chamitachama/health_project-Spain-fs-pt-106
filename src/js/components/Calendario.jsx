const Calendario = () => {
    return (
    <>
<div className="All container-fluid">
 <div className="calendar d-flex flex-row align-items-center justify-content-center gap-3 mb-4">
    <div className="calendarday rounded-5 shadow border-0 bg-light text-center justify-content-center w-25 p-1 bg-opacity-50">
        <p className="fs-6 m-0 p-0 d-flex justify-content-center align-items-center">Mon</p>
        <p className="fs-6 m-0 p-0 d-flex justify-content-center align-items-center">20</p>
        <a>❌</a>
    </div>
    <div className="calendarday rounded-5 shadow border-0 bg-light text-center justify-content-center w-25 p-1 bg-opacity-50">
        <p className="fs-6 m-0 p-0 d-flex justify-content-center align-items-center">Tue</p>
        <p className="fs-6 m-0 p-0 d-flex justify-content-center align-items-center">21</p>
        <a>❌</a>
    </div>
    <div className="calendarday rounded-5 shadow border-0 bg-light text-center justify-content-center w-25 p-1">
        <p className="fs-6 m-0 p-0 d-flex justify-content-center align-items-center">Wed</p>
        <p className="fs-6 m-0 p-0 d-flex justify-content-center align-items-center">22</p>
        <a>❌</a>
    </div>
    <div className="calendarday rounded-5 shadow border-0 bg-light text-center justify-content-center w-25 p-1 bg-opacity-50">
        <p className="fs-6 m-0 p-0 d-flex justify-content-center align-items-center">Thu</p>
        <p className="fs-6 m-0 p-0 d-flex justify-content-center align-items-center">23</p>
        <a>✔️</a>
    </div>
    <div className="calendarday rounded-5 shadow border-0 bg-light text-center justify-content-center w-25 p-1 bg-opacity-50">
        <p className="fs-6 m-0 p-0 d-flex justify-content-center align-items-center">Fri</p>
        <p className="fs-6 m-0 p-0 d-flex justify-content-center align-items-center">24</p>
        <a>✔️</a>
    </div>
 </div>

 <div className="location rounded-5 w-100 py-4 mb-2 h-30 d-flex flex-column align-items-center justify-content-center bg-light">

    <div className="location-top m-2 h-30 w-100 d-flex flex-row align-items-center justify-content-center">

            <div className="location-top-left shadow p-2 m-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">

                <div className="car-left shadow h-100 w-25 rounded-circle d-flex align-items-center justify-content-center fs-3 p-2">🚍</div>

                <div className="car-middle fs-6 shadow me-3 h-75 w-50 rounded-5 d-flex align-items-center justify-content-center">56 min</div>

                <div className="car-right shadow m-2 h-100 w-25 rounded-circle d-flex align-items-center justify-content-center p-3 fs-4">📌</div>
            </div>
            
            <div className="location-top-right shadow m-2 h-100 w-50 rounded-5 d-flex flex-row align-items-center justify-content-center p-1">

            <div className="weather-left h-100 w-50 rounded-circle d-flex align-items-center justify-content-center fs-1">⛅</div>

            <div className="weather-right w-50 d-flex flex-column justify-content-center align-items-start p-2">
                <div className="fs-6 d-flex align-items-start"><strong>48° F</strong></div>
                <div className="d-flex align-items-start">Cloudy</div>
            </div>
            </div>
    </div>

    <div className="location-bottom my-3 w-100 h-70 d-flex flex-row align-items-center justify-content-center">

            <div className="location-bottom-left h-100 rounded-5 d-flex flex-column align-items-start ms-2 justify-content-center">

            <div className="location-bottom-left-1 my-1 h-100 rounded-5 d-flex flex-row align-items-center">
            <button type="button" className="btn btn-light btn-lg shadow d-flex flex-row rounded-5 p-1 border-0">
                <div className="icon m-2 h-100 w-25 rounded-5 d-flex justify-content-end align-items-center">🩹</div> 
                <div className="pill fs-6 m-2 h-100 w-75 d-flex justify-content-start align-items-center">Atenolol</div>
                </button>
            </div>
            
                <div className="location-bottom-left-2 my-1 h-100 rounded-5 d-flex flex-row align-items-center">
                <button type="button" className="btn btn-light btn-lg shadow d-flex flex-row rounded-5 p-1 border-0">
                <div className="icon m-2 h-100 w-25 rounded-5 d-flex justify-content-end align-items-center">💉</div> 
                <div className="pill fs-6 m-2 h-100 w-75 d-flex justify-content-start align-items-center">Lisinopril</div>
                </button>
                </div>

                <div className="location-bottom-left-3 my-1 h-100  rounded-5 d-flex flex-row align-items-center">
                <button type="button" className="btn btn-light btn-lg shadow d-flex flex-row rounded-5 p-1 border-0">
                <div className="icon m-2 h-100 w-25 rounded-circle d-flex justify-content-end align-items-center">💊</div> 
                <div className="pill fs-6 m-2 h-100 w-75 d-flex justify-content-start align-items-center">Astorvastatin</div>
                </button>
                </div>
            </div>

            <div className="location-bottom-right h-100 rounded-5 d-flex align-items-center justify-content-center">
                <img src="https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/donut-chart-example.svg" className="img-fluid"></img>
            </div>
    </div>
 </div>

 <div className="quality h-60 rounded-5 d-flex flex-column align-items-center justify-content-center">

<div className="quality-top mt-3 h-10 rounded-5 w-100 d-flex flex-row align-items-center justify-content-center">

            <div className="quality-top-1 m-2 h-100 rounded-5 d-flex align-items-center fs-4"><strong>Life Quality</strong></div>

            <div className="quality-top-2 shadow h-75 rounded-circle d-flex align-items-end justify-content-center fs-1 p-2 m-2">...</div>

            <div className="quality-top-3 shadow m-2 h-100 rounded-5 d-flex flex-row align-items-center justify-content-center p-1 gap-5">
            <div className="d-flex flex-row justify-content-center align-items-start p-2">
                <div className="fs-5 d-flex"><strong>Week</strong></div>
            </div>
            <div className="dots h-75 rounded-circle d-flex align-items-end fs-2 p-2">...</div>
            </div>


</div>
<div className="p-2 quality-middle w-100 d-flex flex-row align-items-center justify-content-center border-bottom rounded-5 p-0">
            <div className="quality-middle-1 w-30 d-flex flex-column align-items-center justify-content-center ">
            <div className="fs-"><strong>1,765</strong></div>
            <div className=""><strong>Quality Points</strong></div>
            </div>
            <div className="quality-middle-2 p-2 h-100 w-70 d-flex align-items-center justify-content-center">
                <img src="https://images.pond5.com/blue-equalizer-white-background-footage-097297645_iconl.jpeg" className="img-fluid rounded-5 w-100 h-50 object-fit-cover me-2"></img>
            </div>
</div>
<div className="quality-bottom h-60 d-flex align-items-center justify-content-center">
    <img src="https://pbs.twimg.com/ext_tw_video_thumb/1699440835958292480/pu/img/aN7WW7qkE1t5Ittz.jpg" className="img-fluid h-75 rounded-5"></img>
</div>
 </div>
</div>
</>    
    );
};

export default Calendario;