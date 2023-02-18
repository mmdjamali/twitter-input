import React, { useLayoutEffect, useRef, useState } from 'react'

type props = {
    text : string,
    setData : (data : string) => void
}

const HashtagSuggestions : React.FC<props> = ({
    text,
    setData
}) => {
    const [position , setPosition] = useState<string>("")
    const [hidden , setHidden] = useState (false)
    const container = useRef<null | HTMLDivElement>(null);

    useLayoutEffect(() => {
        if(container.current){
            let top = container?.current.getBoundingClientRect().top;
            let height = innerHeight / 2;

            if(top > height){
                setPosition("bottom-[32px]")
                return
            }
            else{
                setPosition("top-[32px]")
                return
            }
        }
    },[container])

    const list = hashtags.filter((item) => item.toLowerCase().search(text.toLowerCase()) >= 0)
  
    if(hidden || !list.length) return<></>
  
    return (
    <div
    ref={container}
    className={`
    animate-open
    transition-all
    flex
    flex-col
    items-stretch
    absolute
    ${position}
    bg-white
    z-50
    rounded-md
    overflow-hidden
    pointer-events-auto
    w-[250px]
    border-[1px]
    border-neutral-700
    `}
    >
        {list.slice(0,4).map((item , idx) => {
            return(
                <button
                onClick={() => {
                    setData(item || "")
                    setHidden(true)
                }}
                className='
                sm:hover:bg-neutral-200
                text-neutral-700
                text-[.9rem]
                px-4
                py-2
                flex
                items-start
                '
                key={idx}>
                    {item}
                </button>
            )
        })}

    </div>
  )
}

export default HashtagSuggestions

const string = `#coding #programmer #developer #coder #java #computerscience #technology #python #javascript #webdeveloper #html #code #webdevelopment #programmers #linux #php #programmingmemes #webdesign #hacking #css #codinglife #tech #cybersecurity #coders #geek #softwaredeveloper #programmingjokes #softwareengineer #iot #nodejs
#style #love #instagood #ootd #moda #beautiful #model #photooftheday #beauty #fashionblogger #instafashion #photography #fashionista #girl #cute #picoftheday #dress #outfit #happy #makeup #instagram #look #follow #stylish #shopping #summer #art #lifestyle #me #instadaily`

const hashtags = string.split(" ")