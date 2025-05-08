

function ButtonBase({ icon: Icon, onClick, size = 50, className = "", state }) {
  return (
    <button
    onClick={onClick}
    className={`button-custom ${className}`}
    style={{
      width: size,
      height: size,
      }} 
    >
      {Icon && <Icon className="text-black group-hover:text-white transition-colors" />}
    </button>
  );
};

export default ButtonBase;