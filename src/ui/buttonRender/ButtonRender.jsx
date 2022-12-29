export function ButtonRender({ render }) {
    return (
        <button>{render((<i>_render</i>))}</button>
    )
}