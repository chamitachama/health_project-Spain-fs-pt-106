const Calendar = () => {
    return (
    <>
<div className="All vh-100 container-fluid vh-100 m-auto col-12 col-md-4 d-flex flex-column">
 <div className="calendar h-10 d-flex flex-row align-items-center justify-content-center gap-3 my-4">
    <div className="calendarday rounded-5 shadow border-0 bg-light text-center justify-content-center w-25 p-1 bg-opacity-50">
        <p className="fs-4 m-0 p-0 d-flex justify-content-center align-items-center">Mon</p>
        <p className="fs-4 m-0 p-0 d-flex justify-content-center align-items-center">20</p>
        <a>❌</a>
    </div>
    <div className="calendarday rounded-5 shadow border-0 bg-light text-center justify-content-center w-25 p-1 bg-opacity-50">
        <p className="fs-4 m-0 p-0 d-flex justify-content-center align-items-center">Tue</p>
        <p className="fs-4 m-0 p-0 d-flex justify-content-center align-items-center">21</p>
        <a>❌</a>
    </div>
    <div className="calendarday rounded-5 shadow border-0 bg-light text-center justify-content-center w-25 p-1">
        <p className="fs-4 m-0 p-0 d-flex justify-content-center align-items-center">Wed</p>
        <p className="fs-4 m-0 p-0 d-flex justify-content-center align-items-center">22</p>
        <a>❌</a>
    </div>
    <div className="calendarday rounded-5 shadow border-0 bg-light text-center justify-content-center w-25 p-1 bg-opacity-50">
        <p className="fs-4 m-0 p-0 d-flex justify-content-center align-items-center">Thu</p>
        <p className="fs-4 m-0 p-0 d-flex justify-content-center align-items-center">23</p>
        <a>✔️</a>
    </div>
    <div className="calendarday rounded-5 shadow border-0 bg-light text-center justify-content-center w-25 p-1 bg-opacity-50">
        <p className="fs-4 m-0 p-0 d-flex justify-content-center align-items-center">Fri</p>
        <p className="fs-4 m-0 p-0 d-flex justify-content-center align-items-center">24</p>
        <a>✔️</a>
    </div>
 </div>

 <div className="location rounded-5 w-100 py-4 my-2 h-30 d-flex flex-column align-items-center justify-content-center bg-light">

    <div className="location-top m-2 h-30 w-100 d-flex flex-row align-items-center justify-content-center">

            <div className="location-top-left shadow p-2 px-3 m-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">
                <div className="car-left shadow h-100 w-25 rounded-circle d-flex align-items-center justify-content-center fs-3">📍</div>

                <div className="car-middle shadow m-3 h-100 w-50 rounded-5 d-flex align-items-center justify-content-center fs-5">56 min</div>

                <div className="car-right shadow m-3 h-100 w-25 rounded-circle d-flex align-items-center justify-content-center">⚫</div>
            </div>
            
            <div className="location-top-right shadow m-2 h-100 w-50 rounded-5 d-flex flex-row align-items-center justify-content-center p-1">

            <div className="weather-left m-3 h-100 w-50 rounded-circle d-flex align-items-center justify-content-center fs-1">⛅</div>

            <div className="weather-right m-4 w-50 d-flex flex-column justify-content-center align-items-start p-2">
                <div className="fs-5 d-flex align-items-start"><strong>48° F</strong></div>
                <div className="d-flex align-items-start">Cloudy</div>
            </div>
            </div>
    </div>

    <div className="location-bottom my-3 mb-3 w-100 h-70 d-flex flex-row align-items-center justify-content-center">

            <div className="location-bottom-left h-100 w-50 rounded-5 d-flex flex-column align-items-center justify-content-center">

            <div className="location-bottom-left-1 my-1 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">
            <button type="button" className="btn btn-light btn-lg w-100 shadow d-flex flex-row rounded-5 p-1 border-0">
                <div className="icon m-2 h-100 w-25 rounded-5 d-flex justify-content-end align-items-center">💊</div> 
                <div className="pill m-2 h-100 w-75 d-flex justify-content-start align-items-center">Atenolol</div>
                </button>
            </div>
            
                <div className="location-bottom-left-2 my-1 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn-lg w-100 shadow d-flex flex-row rounded-5 p-1 border-0">
                <div className="icon m-2 h-100 w-25 rounded-5 d-flex justify-content-end align-items-center">💊</div> 
                <div className="pill m-2 h-100 w-75 d-flex justify-content-start align-items-center">Lisinopril</div>
                </button>
                </div>

                <div className="location-bottom-left-3 my-1 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn-lg w-100 shadow d-flex flex-row rounded-5 p-1 border-0">
                <div className="icon m-2 h-100 w-25 rounded-circle d-flex justify-content-end align-items-center">💊</div> 
                <div className="pill m-2 h-100 w-75 d-flex justify-content-start align-items-center">Astorvastatin</div>
                </button>
                </div>
            </div>

            <div className="location-bottom-right m-2 h-100 w-50 rounded-5 d-flex flex-row align-items-center justify-content-center">
                <img src="https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/donut-chart-example.svg" className="img-fluid "></img>
            </div>
    </div>
 </div>

 <div className="quality my-2 h-60 rounded-5 d-flex flex-column align-items-center justify-content-center bg-light">

<div className="quality-top my-3 h-10 rounded-5 w-100 d-flex flex-row align-items-center justify-content-center bg-light">

            <div className="quality-top-1 mx-3 h-100 w-50 rounded-5 d-flex align-items-center fs-3">Life Quality</div>

            <div className="quality-top-2 m-2 h-100 rounded-circle d-flex align-items-center justify-content-center fs-1 ">...</div>

            <div className="quality-top-3 m-2 h-100 w-25 rounded-5 d-flex flex-row align-items-center justify-content-center">
                <div className="Week m-2 h-100 w-50 rounded-5 d-flex flex-row align-items-center justify-content-center fs-4">Week</div>
                <div className="dots m-2 h-100 w-50 rounded-5 d-flex flex-row align-items-center justify-content-center text-center fs-1">...</div>
            </div>
</div>
<div className="quality-middle my-2 h-30 w-100 d-flex flex-row align-items-center justify-content-center bg-light">
            <div className="quality-middle-1 m-2 h-100 w-25 d-flex flex-column align-items-center justify-content-center ">
            <div className="fs-2">1.765</div>
            <div className="">Quality Points</div>
            </div>
            <div className="quality-middle-2 m-2 h-100 w-75 d-flex flex-row align-items-center justify-content-center">2</div>
</div>
<div className="quality-bottom m-2 h-60 d-flex align-items-center justify-content-center bg-light">3</div>

 </div>
</div>
</>    
    );
};

export default Calendar;