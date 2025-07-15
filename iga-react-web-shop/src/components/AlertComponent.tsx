type alertProps = {
    message:string;
    iconStyle?: string;
};


const AlertComponent: React.FC<alertProps> = ({message,iconStyle}) => {
    return(
        <div role="alert" className="alert alert-info bg-[#054274] toast toast-bottom toast-center duration-130 ease-in-out text-white">
            <i className={iconStyle}></i>
            <span className="text-lg">{message}</span>
        </div>
    );
};

export default AlertComponent;