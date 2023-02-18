import React , {useLayoutEffect, useRef, useState} from 'react'
import UserSuggestions from '../Cards/UserSuggestions'
import HashtagSuggestions from '../Cards/HashtagSuggestions'

type props = {
    value : string,
    setValue : React.Dispatch<React.SetStateAction<string>>,
    setFocus : React.Dispatch<React.SetStateAction<boolean>>
}

const Input : React.FC<props> = ({
    setFocus,
    value,
    setValue
}) => {

  return (
    <div
    className='
    relative
    py-3
    min-h-[54px]
    h-fit
    w-full
    '>

        <p
        draggable="false"
        className='
        text-neutral-700
        w-[100%]
        h-fit
        break-words
        absolute
        top-0
        left-0
        bg-transparent
        pointer-events-none
        py-3
        text-[1.25rem]
        '>
            { value && value.replaceAll("\n" , " \n ").split(" ").map((item , idx , array) => {
                if(item === "\n") return<br/>
                
                if(/^#[0-9A-Za-z_]{1,}$/i.test(item)){
                    if(value.replaceAll("\n" , " \n ").split(" ").length === idx + 1)
                    return(
                    <div
                    key={idx}
                    className='
                    inline-flex
                    flex-col
                    relative
                    '>
                        <span
                        className='
                        text-violet-500
                        '>
                            {item + " "}
                        </span>

                        <HashtagSuggestions
                        text={item}
                        key={idx}
                        setData={(data) => {
                            setValue(prev => {
                                let str = prev.split("")
                                str.splice(str.lastIndexOf("#"),str.length)
                                return str.join("") + data + " "
                            })
                        }}
                        />

                    </div>
                    )

                    return(
                        <span
                        key={idx}
                        className='
                        text-violet-500
                        '>
                            {item + " "}
                        </span> 
                    )
                }
                
                if(/^@[0-9A-Za-z_]{1,}$/i.test(item)){
                    if(value.replaceAll("\n" , " \n ").split(" ").length === idx + 1) return(
                    <div
                    key={idx}
                    className='
                    inline-flex
                    flex-col
                    relative
                    '>
                        <span
                        className='
                        text-violet-500
                        '>
                            {item + " "}
                        </span>

                        <UserSuggestions
                        setData={(data) => {
                            setValue(prev => {
                                let str = prev.split("")
                                str.splice(str.lastIndexOf("@"),str.length)
                                return str.join("") + data + " "
                            })
                        }}
                        text={item}
                        />

                    </div>
                    )

                    return(
                        <span
                        key={idx}
                        className='
                        text-violet-500
                        '>
                            {item + " "}
                        </span> 
                    )
                
                }

                if(item === "") return(
                    <span
                    className='
                    break-words
                    inline
                    '
                    key={idx}>
                        &nbsp;
                    </span>
                )

                return(
                    <span
                    className='
                    inline
                    break-words
                    '
                    key={idx}>
                        {item + " "}
                    </span>
                )
            })}
        </p>

        <textarea
        onFocus={() => {
            setFocus(true)
        }}
        placeholder="What's Happening?"
        rows={1}
        value={value}
        className='
        break-words
        w-[100%]
        selection:text-transparent
        selection:bg-neutral-300
        text-transparent
        caret-black
        resize-none
        focus:outline-none
        text-[1.25rem]
        '
        onChange={(e) => {
            let target = e.target
            if(target.value.length < value.length) target.style.height = 0 + "px"
            target.style.height = target.scrollHeight + "px"
            setValue(target.value)
        }}
        />

    </div>
  )
}

export default Input