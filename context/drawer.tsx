import Nav from '@/layout/navbar';
import { createContext, useRef } from 'react'
import { DrawerLayoutAndroid } from 'react-native'

interface IDrawerContext {
    drawer: React.RefObject<DrawerLayoutAndroid>| null;
}
export const DrawerContext = createContext<IDrawerContext>({
    drawer: null
})

const DrawerProvider = ({children}:{children:React.JSX.Element}) => {
    const drawer = useRef<DrawerLayoutAndroid>(null)
  return (
    <DrawerContext.Provider value={{drawer}}>
        <DrawerLayoutAndroid ref={drawer} renderNavigationView={Nav} drawerWidth={300}
    drawerPosition='left'>
            {children}
        </DrawerLayoutAndroid>
      
    </DrawerContext.Provider>
  )
}

export default DrawerProvider