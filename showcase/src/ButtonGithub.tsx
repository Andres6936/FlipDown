import './ButtonGithub.css'

export function ButtonGithub() {
    return (
        <div className="buttons">
            <p>Version: <span id="ver">3.0.2</span> (&lt;11KB minified)</p>
            <a href="https://github.com/Andres6936/FlipDown" className="button"><i
                className="fab fa-github"></i> <span>Get started</span></a>
        </div>
    )
}