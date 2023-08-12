import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline:'none',
    p: 4,
}
// &#9587;
const SignInModal = () => {
    const [open, setOpen] = useState(true)
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box borderRadius={2} sx={style}>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <h2 className='font-mont text-[24px] leading-9'>Title</h2>
                        <button onClick={() => setOpen(false)} className="flex flex-col justify-center items-center w-12 h-12  border-[#040C13] hover:border rounded-md">&#9587;</button>
                    </div>
                    <p>Msg</p>
                    <div className='flex gap-4 justify-center'>
                        <button onClick={() => setOpen(false)} className='rounded-md w-40 font-semibold hover:bg-[#72757E] transition-all flex justify-center gap-4 items-center ease-in-out bg-[#1D252C] h-[46px] text-white'>
                            OK
                        </button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
export default SignInModal;