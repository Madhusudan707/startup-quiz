export const Close = ({ nameClass,closeRef }: any) => {
  return (
    <a ref ={closeRef} href="#close" id='modal_close' title="Close">
      <span className={nameClass}>
        <i className="fas fa-times"></i>
      </span>
    </a>
  )
}