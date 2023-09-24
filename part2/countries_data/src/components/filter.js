const Filter = ({ filterString, setFilterString}) => {
    return (
        <form>
            Find Countries: <input value={filterString} onChange={(e) => setFilterString(e.target.value)} />
        </form>
    )
}

export default Filter