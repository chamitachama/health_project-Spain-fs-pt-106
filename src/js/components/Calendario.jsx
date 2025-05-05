const Calendar = () => {
    return (
        
<div className="All vh-100 container-fluid vh-100 m-auto col-12 col-md-4 d-flex flex-column">
 <div className="calendar h-10 d-flex flex-row align-items-center justify-content-center gap-3 my-3">
    <div className="calendarday rounded-5 shadow-lg border-0 bg-light text-center justify-content-center w-25">
        <p>Mon</p>
        <p>20</p>
        <a>X</a>
    </div>
    <div className="calendarday rounded-5 shadow-lg border-0 bg-light text-center justify-content-center w-25">
        <p>Tue</p>
        <p>21</p>
        <a>X</a>
    </div>
    <div className="calendarday rounded-5 shadow-lg border-0 bg-light text-center justify-content-center w-25">
        <p>Wed</p>
        <p>22</p>
        <a>X</a>
    </div>
    <div className="calendarday rounded-5 shadow-lg border-0 bg-light text-center justify-content-center w-25">
        <p>Thu</p>
        <p>23</p>
        <a>Y</a>
    </div>
    <div className="calendarday rounded-5 shadow-lg border-0 bg-light text-center justify-content-center w-25">
        <p>Fri</p>
        <p>24</p>
        <a>Y</a>
    </div>
 </div>

 <div className="location rounded-5 w-100 my-2 h-30 d-flex flex-column align-items-center justify-content-center bg-light">

    <div className="location-top m-2 h-30 w-100 d-flex flex-row align-items-center justify-content-center">

            <div className="location-top-left m-2 my-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">
                <div className="car-left m-2 my-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">1</div>
                <div className="car-middle m-2 my-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">2</div>
                <div className="car-right m-2 my-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">3</div>
            </div>
            
            <div className="location-top-right m-2 h-100 w-25 rounded-5 d-flex flex-row align-items-center justify-content-center">
            <div className="weather-left m-2 my-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">1</div>
            <div className="weather-right m-2 my-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">2</div>
            </div>
    </div>

    <div className="location-bottom my-2 w-100 h-70 d-flex flex-row align-items-center justify-content-center">
            <div className="location-bottom-left m-2 my-2 h-100 w-75 rounded-5 d-flex flex-column align-items-center justify-content-center">
            <div className="car-left m-2 my-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">Atenolol</div>
                <div className="car-middle m-2 my-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">Lisinopril</div>
                <div className="car-right m-2 my-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">Astorvastatin</div>
            </div>

            <div className="location-bottom-right m-2 h-100 w-25 rounded-5 d-flex flex-row align-items-center justify-content-center">2</div>
    </div>
 </div>

 <div className="quality my-2 h-60 rounded-5 d-flex flex-column align-items-center justify-content-center bg-light">

<div className="quality-top my-3 h-10 rounded-5 d-flex flex-row align-items-center justify-content-center bg-light">
            <div className="quality-top-1 m-2 my-2 h-100 w-50 rounded-5 d-flex align-items-center justify-content-center">Life Quality</div>
            <div className="quality-top-2 m-2 my-2 h-100 w-25 rounded-5 d-flex align-items-center justify-content-center">...</div>
            <div className="quality-top-3 m-2 my-2 h-100 w-25 rounded-5 d-flex align-items-center justify-content-center">Week ...</div>
</div>
<div className="quality-middle my-2 h-30 rounded-5 d-flex flex-row align-items-center justify-content-center bg-light">
            <div className="quality-middle-1 m-2 my-2 h-100 w-25 rounded-5 d-flex flex-row align-items-center justify-content-center">1</div>
            <div className="quality-middle-2 m-2 my-2 h-100 w-75 rounded-5 d-flex flex-row align-items-center justify-content-center">2</div>
</div>
<div className="quality-bottom my-2 h-60 rounded-5 d-flex flex-row align-items-center justify-content-center bg-light">3</div>

 </div>
</div>
    );
};

export default Calendar;