import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import * as THREE from 'three'
import React, { Suspense } from 'react'
import Lights from './Light'
import Iphone from './Iphone'
import Loader from './Loader'
// import { div } from 'three/webgpu'


const ModelView = (props) => {
    const {index , groupRef , gsapType  ,controlRef, setrotationSize  ,size, item} = props
  return (
    <View
    index={index}
    id={gsapType}
    className={` w-full h-full absolute ${index==2?'right-[-100%]':''}`}
    >
        {/* ambientlign */}
        <ambientLight intensity={0.5}/>

        <PerspectiveCamera makeDefault position={[0,0,4]} />

        <Lights/>

        <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0,0,0)}
        onEnd={()=>{setrotationSize(controlRef.current.getAzimuthalAngle())}}

        />
        {/* <Iphone/> */}

         <group  name={`${index===1}?'small':'large`} position={[0,0,0]} >

        <Suspense fallback={<Loader/>}>
           <Iphone
           scale={index === 1?[15,15,15]:[17,17,17]} item={item} size={size}/>
        </Suspense>
         </group> 
       
    </View>
    
  )
}

export default ModelView
