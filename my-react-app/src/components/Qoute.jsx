
function Qoute({id,title,author}){
  return (
    <div key={id}>
      <p><q>{title}</q></p>
      <p>{author}</p>
    </div>
  )
}

export default Qoute;