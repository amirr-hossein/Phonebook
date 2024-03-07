const Backdrop=(props)=>{
    return props.modal ? <div className={"backdrop bg-black opacity-25"} onClick={props.close}></div> : null
}
export default Backdrop