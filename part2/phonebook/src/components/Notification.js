
const Succes = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="succes">
            {message}
        </div>
    )
}

const Failed = ({ message }) => {
    if (message === null) {
        return null;
    }

    return (
        <div className="error">
            {message}
        </div>
    )
}

export { Succes, Failed };