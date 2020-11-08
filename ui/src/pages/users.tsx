import dynamic from 'next/dynamic'
const Sensors = dynamic(import('../components/sensors'), { ssr: false })

export default Sensors