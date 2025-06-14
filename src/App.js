// import React, { useState } from 'react';
// import './App.css';
// import frontImage from './image/front.png';
// import frozenImage from './image/Design_Layer.png';
// import home from './image/home.png';
// import ginie from './image/ginie.jpg';
// import istockphoto from './image/istockphoto1.jpg';
// import curve from './image/curvv.png';

// // function DesignLayer({ frozen }) {
// //   let imageSrc = frozen ? frozenImage : frontImage;

// //   return (
// //     <div className={`card-shell ${frozen ? 'frozen' : ''}`}>
// //       <div className="image">
// //         <img
// //           src={imageSrc}
// //           alt="Card State"
// //           style={{ width: '100%', height: '100%', borderRadius: '16px' }}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// function DesignLayer({ frozen }) {
//   const imageSrc = frozen ? frozenImage : frontImage;

//   return (
//     <div className={`card-shell ${frozen ? 'frozen' : ''}`}>
//       <div className="image">
//         <img src={imageSrc} alt="Card State" style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
//       </div>
//     </div>
//   );
// }

// function BottomNavigation() {
//   return (
//     <div className="bottom-nav">
//       <div className='xyz'>
//         <img src={curve}></img>
//       </div>
//       <div className="nav-item">
//         <img src={home} alt="Home" className="nav-icon" />
//         <span className="nav-label">home</span>
//       </div>
//       <div className="nav-item center">
//         <div className="nav-center-border">
//           <img src={istockphoto} alt="Yolo Pay" className="nav-icon" />
//         </div>
//         <span className="nav-label">yolo pay</span>
//       </div>
//       <div className="nav-item">
//         <img src={ginie} alt="Ginie" className="nav-icon" />
//         <span className="nav-label">ginie</span>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [frozen, setFrozen] = useState(false);

//   return (
//     <div className="container">
//       <div className="status-bar">
//         <span className="time">9:41</span>
//         <div className="icons">
//           <span className="signal" />
//           <span className="wifi" />
//           <span className="battery" />
//         </div>
//       </div>

//       <div className="payment-title">select payment mode</div>
//       <div className="payment-description">
//         choose your preferred payment method to make payment.
//       </div>

//       <div className="button-scroll">
//         <button className="btn-pay">pay</button>
//         <button className="btn-card">card</button>
//       </div>

//       <div className="card-label">YOUR DIGITAL DEBIT CARD</div>

//       <div className="card-row">
//         <DesignLayer frozen={frozen} />
//       </div>

//       <div className="freeze-wrapper">
//         <div
//           className={`freeze-btn ${frozen ? 'unfreeze' : 'freeze'}`}
//           onClick={() => setFrozen(prev => !prev)}
//         >
//           <span className="snow">{frozen ? '❄️' : '☃️'}</span>
//         </div>
//         <div className="freeze-label">{frozen ? 'Unfreeze' : 'Freeze'}</div>
//       </div>

//       <BottomNavigation />
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import frontImage from './image/front.png';
import frozenImage from './image/Design_Layer.png';
import home from './image/home.png';
import ginie from './image/ginie.jpg';
import istockphoto from './image/istockphoto1.jpg';
import curve from './image/curvv.png';


function DesignLayer({ frozen }) {
  const imageSrc = frozen ? frozenImage : frontImage;

  return (
    <div className={`card-shell ${frozen ? 'frozen' : ''}`}>
      <div className="image">
        <img src={imageSrc} alt="Card State" style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="bottom-nav">
      <img src={curve} alt="curve" className="nav-curve" />

      <div className="nav-item">
        <button className='abc'><img src={home} alt="Home" className="nav-icon" /></button>
        <span className="nav-label">home</span>
      </div>

      <div className="nav-item center">
        <div className="nav-center-border">
          <button className='abc'><img src={istockphoto} alt="Yolo Pay" className="nav-icon" /></button>
        </div>
        <span className="nav-label">yolo pay</span>
      </div>

      <div className="nav-item">
        <button className='abc'><img src={ginie} alt="Ginie" className="nav-icon" /></button>
        <span className="nav-label">ginie</span>
      </div>
    </div>
  );
}

function App() {
  const [frozen, setFrozen] = useState(false);

  return (
    <div className="container">
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="icons">
          <span className="signal" >🛜</span>
          <span className="wifi">📶</span>
          <span className="battery">🔋</span>
        </div>
      </div>

      <div className="payment-title">select payment mode</div>
      <div className="payment-description">
        choose your preferred payment method to make payment.
      </div>

      <div className="button-scroll">
        <button className="btn-pay">pay</button>
        <button className="btn-card">card</button>
      </div>

      <div className="card-label">YOUR DIGITAL DEBIT CARD</div>

      <div className="card-row">
        <DesignLayer frozen={frozen} />
      </div>

      <div className="freeze-wrapper">
        <div
          className={`freeze-btn ${frozen ? 'unfreeze' : 'freeze'}`}
          onClick={() => setFrozen(prev => !prev)}
        >
          <span className="snow">{frozen ? '❄️' : '☃️'}</span>
        </div>
        <div className="freeze-label">{frozen ? 'Unfreeze' : 'Freeze'}</div>
      </div>

      <BottomNavigation />
    </div>
  );
}

export default App;
