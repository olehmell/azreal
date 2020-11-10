import dynamic from 'next/dynamic'
const Locations = dynamic(() => import('src/components/locations/Locations'), { ssr: false })

export default Locations