export const Close = ({ nameClass }: any) => {
  return (
    <a href="#close" id='modal_close' title="Close">
      <span className={nameClass}>
        <i className="fas fa-times"></i>
      </span>
    </a>
  )
}