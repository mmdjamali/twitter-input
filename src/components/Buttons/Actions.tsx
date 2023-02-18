import React from 'react'
import { RiFileGifLine, RiImage2Line, RiTimeLine } from 'react-icons/ri'
import { BsUiRadios } from 'react-icons/bs'
import { FaRegSmile } from 'react-icons/fa'
import ButtonWithTooltip from './ButtonWithTooltip'

const Actions = ({
    value,
    length
} : {value : string , length : number}) => {
  return (
    <div
    className='
    flex
    items-center
    justify-between
    '>
        <div
        className='
        flex
        items-center
        -translate-x-3
        '>
            {actionsList.map(({name,Icon} , idx) => {
                return(
                    <ButtonWithTooltip
                    key={idx}
                    name={name}
                    Icon={Icon}
                    />
                )
            })}
        </div>

        <div
        className='
        flex
        relative
        items-stretch
        gap-3
        '>
            <span
            style={{
                "backgroundImage" : 
                `conic-gradient(
                    ${value?.length <= length ?
                        value.length < length - 20 ? "rgba(64,64,64)" : "rgb(250,204,21)"
                            :
                        "rgb(239,68,68)"
                    }
                    ${(value?.length / length) * 360}deg,
                    #eee
                    ${(value?.length / length) * 360}deg 
                )`
            }}
            className='
            relative
            inline-flex
            justify-center
            items-center
            p-1
            rounded-full
            '>
                <span
                className={`
                ${value?.length <= length ?
                    value?.length < length - 20 ? "text-neutral-700" : "text-yellow-400"
                    :
                    "text-red-500"
                }
                flex
                items-center
                justify-center
                text-[12px]
                bg-white
                w-[30px]
                rounded-full
                aspect-square
                `}>
                    {360 - value.length < 100 ? 360 - value.length : ""}
                </span>
            </span>

            <button
            className={`
            ${!value || value.length > length ? "bg-neutral-700/60 pointer-events-none" : "bg-neutral-700"}
            text-white
            px-4
            py-1.5
            rounded-full
            font-bold
            `}>
                Tweet
            </button>

        </div>

    </div>
  )
}

export default Actions

const actionsList = [
    {
        name : "Media",
        Icon : RiImage2Line
    },
    {
        name : "GIF",
        Icon : RiFileGifLine
    },
    {
        name : "Poll",
        Icon : BsUiRadios
    },
    {
        name : "Emoji",
        Icon : FaRegSmile
    },
    {
        name : "Schedule",
        Icon : RiTimeLine
    },
]