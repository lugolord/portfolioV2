function Modal ({ description, id }: { description: string, id: number }) {
  const hanldeClick = () => {
    const modal = document.getElementById(`modal-${id}`) as HTMLDialogElement | null
    modal?.showModal()
  }

  return (
    <>
      <button className="btn w-full" onClick={hanldeClick}>
        detalles
      </button>
      <dialog id={`modal-${id}`} className="modal">
        <div className="modal-box w-96 max-w-5xl">
          <h3 className="font-bold text-lg mb-3">Detalles del puesto</h3>
          <div className="space-y-4 text-sm dark:text-neutral-300">
            {description.split('\n').map((p, i) => (
              <p key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default Modal
