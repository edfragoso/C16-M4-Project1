import './Overlay.css';

function OverLay({children, overlayClick}) {
    return (
        <div className='Overlay' onClick={() => overlayClick }>
            {children}
        </div>
    );
};

export default OverLay;