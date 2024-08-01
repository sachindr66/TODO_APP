import React from 'react'

const Tag = ({tagName, selectTag,selected}) => {

    const tagstyle={
            HTML:{backgroundColor:"#E34E26", padding:"3px 12px", fontSize:"12px",},
            CSS:{backgroundColor:"#0F74B8", padding:"3px 12px", fontSize:"12px",},
            Javascript:{backgroundColor:"#EED910", padding:"3px 12px", fontSize:"12px",},
            Reactjs:{backgroundColor:"#53C0DE", padding:"3px 12px", fontSize:"12px",},
            default:{backgroundColor:"#ffffff33", padding:"4px 12px", fontSize:"14px",}
    }

  return (
        <button className='tags'
        type='button' 
        onClick={()=>selectTag(tagName)}
        style={selected? tagstyle[tagName]:tagstyle.default}
        >
        {tagName}</button>
  )
}

export default Tag
