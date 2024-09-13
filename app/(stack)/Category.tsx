import { useEffect, useRef } from 'react'
import Header from '@/layout/header'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import { CameraView, useCameraPermissions, useMicrophonePermissions } from 'expo-camera'
import { CameraType } from 'expo-camera/build/legacy/Camera.types'
import { FontAwesome } from '@expo/vector-icons'
import { usePermissions, createAssetAsync } from 'expo-media-library'

const Category = () => {
  const [camPermission, requestCamPermission] = useCameraPermissions()
  const [micPermission, requestMicPermission] = useMicrophonePermissions()
  const [mediaPermission, requestMediaPermission] = usePermissions()
  const camRef = useRef<CameraView>(null)

  useEffect(() => {
    if (camPermission) {
      if (!camPermission.granted) requestCamPermission()
    } else requestCamPermission()
    if (mediaPermission) {
      if (!mediaPermission.granted) requestMediaPermission()
    } else requestMediaPermission()
    if (micPermission) {
      if (!micPermission.granted) requestMicPermission()
    } else requestMicPermission()
  }, [])

  const takePic = async () => {
    const d = await camRef.current?.takePictureAsync()
    
    if(d?.uri) {
      const save = await createAssetAsync(d.uri)
    }
  }

  const recodeVideo = async ()=>{
    const d = await camRef.current?.recordAsync()
    if(d?.uri) {
      const save = await createAssetAsync(d.uri)
      console.log(save);
      
    }
  }
  const stopVideo = async ()=>{
    camRef.current?.stopRecording()
  }

  return (
    <View className='w-full flex-1'>
      {/* <Header Left={
        <Link href={'/'} asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={27} color="black" />
          </TouchableOpacity>
        </Link>
        }
        centerText='Category'
      /> */}
      <Text>Category</Text>
      <View className='relative w-full flex-1 bg-yellow-200'>
        <CameraView className='w-full flex-1 relative'
          facing={CameraType.back}
          ref={camRef}
          mode='picture'
          barcodeScannerSettings={{
            barcodeTypes: ["qr", 'code128'],
          }}
          onBarcodeScanned={(d)=>console.log(d)
          }
        >
          <View className='absolute z-50 bottom-[27px] left-0 w-full items-center justify-center'>
            <TouchableOpacity onPress={takePic}>
              <FontAwesome name="camera" size={27} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={recodeVideo} className='mt-7'>
              <FontAwesome name="video-camera" size={27} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={stopVideo} className='mt-7'>
              <FontAwesome name="stop-circle-o" size={27} color="white" />
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    </View>
  )
}

export default Category