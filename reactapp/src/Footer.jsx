import React from 'react'

function Footer({...prop}) {
const {weight, material} = prop
  return (
    <div>
      <div>Вес: {weight}</div>
      <div>Материал: {material}</div>
    </div>
  )
}
Footer.defaultProps = {
  weight: 10,
  material: 'wood'
}
export default Footer;

// export default class Footer extends React.Component {
//   render() {
//     const nameCard = 'Отвертка'
//     const stoct = 0
//     const params = {
//       weight: 10,
//       material: '',
//     }
//     return (
      
//       <div className="card">  
//         <div className="card-body">
//           <h4 className="card-title">{nameCard}</h4>
//           {
//             stoct > 0
//       ? (
//           <div>
//             Кол-во товара: {stoct}
//           </div>
//         )
//       : <div>Товар закончился</div>
//           }
//           <div {...params}>
//             Параметры: {params.material}
//           </div>

//           <p className="card-text">Some quick example text to build on the card</p>
//           <button type="button" className="btn btn-primary">Go somewhere</button>
//         </div>
//       </div>
//     )
//   }
// }

// Footer.defaultProps = {
//   weight: 10,
//   material: 'wood',
// }

