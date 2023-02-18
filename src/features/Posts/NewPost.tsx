import React, { useState } from 'react'
import Input from '../../components/Fields/Input'
import ChooseAudience from '../../components/Buttons/ChooseAudience'
import WhoCanReply from '../../components/Buttons/WhoCanReply'
import Actions from '../../components/Buttons/Actions'

const NewPost = () => {
  const [value , setValue] = useState<string>("")
  const [focus , setFocus] = useState<boolean>(false)
  const [status , setStatus] = useState({
    audience : "Everyone",
    who_can_reply : "Everyone"
  })

  return (
    <div
    className='
    flex
    px-4
    gap-3
    py-2
    w-full
    '>
        <div
        className='
        flex
        flex-shrink-0
        '>
            <img
            src='https://media.licdn.com/dms/image/D4D03AQEx8MHAxQ22Dg/profile-displayphoto-shrink_800_800/0/1667734269324?e=1681948800&v=beta&t=9d2jRhHOp1yDtMK022c7BMq6KvfEqFBlvxmqxbtvB30'
            className='
            w-[48px]
            h-[48px]
            rounded-full
            '
            />
        </div>
        <div
        className='
        flex
        flex-col
        w-[100%]
        '>

            { focus && <ChooseAudience
            setValue={setStatus}
            value={status.audience}/>}

            <Input
            setFocus={setFocus}
            value={value}
            setValue={setValue}
            />

            { focus && <WhoCanReply
            setValue={setStatus}
            value={status.who_can_reply}
            />}

            { focus && <span
            className='
            mt-2
            -ml-3
            block
            my-3
            h-[1px]
            w-[calc(100%_+_12px)]
            bg-neutral-200
            '
            />}

            <Actions
            value={value}
            length={360}/>
        </div>
    </div>
  )
}

export default NewPost