//import { MouseEvent } from "react";

import { useState } from "react";

function Message() {
    let items = ['New york', 'San Francisco', 'Teyvat'];
    //let selectedIndex = 0;
        const [selectedIndex, setSelectedIndex] = useState(-1);
    

   /* if (grp.length === 0) {
        return <p>There are no elements to be displayed</p>;
    }*/
  /*  if(items.length != 0)
        return <><p>There is nothing on <b>me</b></p>
        {items.map((item)=> <li key={item}>{item}</li>)}
        </>*/

    //{items.length!=0 ? <p>There are elements present in this</p> : <p> There are no elements present</p>}
    //const message = items.length!=0 ? <p>There are elements present in this</p> : <p> There are no elements present</p>
    //{message}
//const handleClick =  (event:MouseEvent) => console.log(event);
    return <> 
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li 
                    className= {selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                     key={item}
//                     onClick={() => console.log("Clicked OMG !!!!")}
                   
                     >{item}</li>
                ))}
            </ul>
        </>
    ;
}

export default Message;
