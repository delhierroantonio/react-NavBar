import { useState } from 'react'
import React from 'react'

    const ItemCount = () => {
    const [count, setCount] = useState(0); 
    const stock = 5;
    function addsUp() {
                if (count < stock) {
                    setCount(count + 1);
                } 
                else {
                    alert('ya no hay stock!')
                }
            }

            function removes() {
                        if (count !== 0) {
                            setCount(count - 1);
                        }
                    }

    return (
        <div>
            {'la cantidad es: ' + count} 
            <br />
            <hr />
            <button onClick={addsUp}>+</button>       
            <button onClick={removes}>-</button>
        </div>
    )
}
export default ItemCount


// import { useState } from 'react'
// import React from 'react'

// export default function ItemCount(stock, initial, onAdd) {
//     // contador start
//     const [count, setCount] = useState(0);   

//     function addsUp() {
//         if (count < 5) {
//             setCount(count + 1);
//         } 
//         else {
//             alert('ya no hay stock!')
//         }
//         // setCount(count + 1);
//     }

//     function removes() {
//         if (count > 0) {
//             setCount(count - 1);
//         }
//     }
//     // contador ends
//     return (
//         <div>
//             {'la cantidad es: ' + count}
//             <br />
//             <hr />
//             <button onClick={addsUp}>+</button>
//             <button onClick={removes}>-</button>
//         </div>
//     )
// }
