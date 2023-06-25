const Clock = (props) => {
    return <p>{new Date().toLocaleTimeString()}<span  onClick={()=>props.setShowClock(false)}>x</span></p>
};

export default Clock;