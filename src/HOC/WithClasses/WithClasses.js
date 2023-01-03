import styles from "./WithClasses.module.css"

export function WithClasses(Control) {
    return function (props) {
        return (
            <div className={props.classes}>
                <Control {...props} />
            </div>
        )
    }
}