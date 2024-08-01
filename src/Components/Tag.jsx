import React from 'react'

const Tag = ({tagName, selectTag,selected}) => {

    const tagstyle={
            HTML:{backgroundColor:"#E34E26"},
            CSS:{backgroundColor:"#0F74B8"},
            Javascript:{backgroundColor:"#EED910"},
            Reactjs:{backgroundColor:"#53C0DE"},
            default:{backgroundColor:"#ffffff33"}
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
