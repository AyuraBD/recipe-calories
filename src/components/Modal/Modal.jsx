import React from 'react'

const Modal = () => {
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button> */}
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box text-center">
                <h3 className="font-bold text-lg border-b-2 pb-2">Opps!</h3>
                <p className="py-4">You cannot add the same Recipe again!</p>
                <p>Please choose different one.</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </div>
  )
}

export default Modal