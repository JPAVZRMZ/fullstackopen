const PersonForm = ({onSubmit,nameValue,phoneValue, onNameChange, onPhoneChange,text}) => {
    return (
        <form onSubmit={onSubmit}>
        <div>
          name: <input value={nameValue} onChange={onNameChange}/> <br></br>
          Phone: <input value={phoneValue} onChange={onPhoneChange}/>
        </div>
        <div>
          <button type="submit">{text}</button>
        </div>
      </form>
    )
}

export default PersonForm