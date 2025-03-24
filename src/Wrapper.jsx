function Wrapper({children,color='green', margin='5px',border='5px solid green'}){
    return(
        <div style={{color:color, border:border, width:"300px", margin:margin}}>
    {children}
        </div>
    )
}
export default Wrapper