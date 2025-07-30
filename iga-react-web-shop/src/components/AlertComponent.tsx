type alertProps = {
    message:string;
    iconStyle?: string;
};


const AlertComponent: React.FC<alertProps> = ({message,iconStyle}) => {
    return(
        <div role="alert" className="alert border-none bg-blue-950 toast shadow-lg toast-bottom toast-center duration-130 ease-in-out text-white">
            <i className={iconStyle}></i>
            <p className="text-lg">{message}</p>
        </div>
    );
};

export default AlertComponent;