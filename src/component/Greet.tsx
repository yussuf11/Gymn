type GreetProps = { 
    name: string
    message?: number
    isLoggedin: boolean
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            {
                props.isLoggedin ? 
            
            <h2>Welcome {props.name} You have {props.message} unread messages.</h2>
            : "Welcome Guest"

}
        </div>
    )
}