import dynamic from 'next/dynamic'
const Locations = dynamic(() => import('src/components/sensors/Maps'), { ssr: false })

export default Locations